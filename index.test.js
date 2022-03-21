'use strict';

const ajvFormatsMobileUk = require('ajv-formats-mobile-uk');
const createQuestionnaireTemplateHelper = require('./index');
const validQTemplate = require('./fixtures/valid-questionnaire-template');

function getValidQuestionnaireTemplate() {
    return JSON.parse(JSON.stringify(validQTemplate));
}

describe('q-helper', () => {
    it('should accept custom format functions for ajv', () => {
        const validTemplate = getValidQuestionnaireTemplate();

        validTemplate.sections['p-applicant-enter-your-telephone-number'].schema.properties[
            'q-applicant-enter-your-telephone-number'
        ].format = 'mobile-uk';

        const dummyFormatFunctionAlwaysPassesValidation = () => true;
        const qHelper = createQuestionnaireTemplateHelper({
            questionnaireTemplate: validTemplate,
            customSchemaFormats: {
                'mobile-uk': dummyFormatFunctionAlwaysPassesValidation
            }
        });

        expect(qHelper.validateTemplate()).toEqual(true);
    });

    describe('isValidQuestionnaireDocument', () => {
        it("should return true if the template's document structure is correct", () => {
            const validTemplate = getValidQuestionnaireTemplate();
            const qHelper = createQuestionnaireTemplateHelper({
                questionnaireTemplate: validTemplate
            });

            expect(qHelper.isValidDocument()).toEqual(true);
        });

        it("should return an error if the template's document structure is incorrect", () => {
            const validTemplate = getValidQuestionnaireTemplate();
            const invalidTemplate = validTemplate;

            // Make the valid questionnaire invalid - remove some properties that are required
            delete invalidTemplate.type;
            delete invalidTemplate.version;

            const qHelper = createQuestionnaireTemplateHelper({
                questionnaireTemplate: invalidTemplate
            });
            const error = qHelper.isValidDocument();

            expect(error).toEqual({
                type: 'InvalidTemplateStructure',
                source: '/',
                description: [
                    {
                        dataPath: '',
                        keyword: 'required',
                        message: "should have required property 'type'",
                        params: {missingProperty: 'type'},
                        schemaPath: '#/required'
                    },
                    {
                        dataPath: '',
                        keyword: 'required',
                        message: "should have required property 'version'",
                        params: {missingProperty: 'version'},
                        schemaPath: '#/required'
                    }
                ]
            });
        });
    });

    describe('ensureAllSectionsHaveCorrespondingRoute', () => {
        it('should return true if all sections have a corresponding route', () => {
            const validTemplate = getValidQuestionnaireTemplate();
            const qHelper = createQuestionnaireTemplateHelper({
                questionnaireTemplate: validTemplate
            });

            expect(qHelper.ensureAllSectionsHaveCorrespondingRoute()).toEqual(true);
        });

        it('should return an error for each section that has no corresponding route', () => {
            const validTemplate = getValidQuestionnaireTemplate();
            const invalidTemplate = validTemplate;

            // Make the valid questionnaire invalid - remove the states of some sections
            delete invalidTemplate.routes.states['p-applicant-british-citizen-or-eu-national'];
            delete invalidTemplate.routes.states['p--confirmation'];
            delete invalidTemplate.routes.states.system;

            const qHelper = createQuestionnaireTemplateHelper({
                questionnaireTemplate: invalidTemplate
            });
            const errors = qHelper.ensureAllSectionsHaveCorrespondingRoute();

            expect(errors).toIncludeSameMembers([
                {
                    type: 'RouteNotFound',
                    source: '/sections/p-applicant-british-citizen-or-eu-national',
                    description:
                        "Route '/routes/states/p-applicant-british-citizen-or-eu-national' not found"
                },
                {
                    type: 'RouteNotFound',
                    source: '/sections/p--confirmation',
                    description: "Route '/routes/states/p--confirmation' not found"
                },
                {
                    type: 'RouteNotFound',
                    source: '/sections/system',
                    description: "Route '/routes/states/system' not found"
                }
            ]);
        });
    });

    describe('ensureAllRoutesHaveCorrespondingSection', () => {
        it('should return true if all routes have a corresponding section', () => {
            const validTemplate = getValidQuestionnaireTemplate();
            const qHelper = createQuestionnaireTemplateHelper({
                questionnaireTemplate: validTemplate
            });

            expect(qHelper.ensureAllRoutesHaveCorrespondingSection()).toEqual(true);
        });

        it('should return an error for each route that has no corresponding section', () => {
            const validTemplate = getValidQuestionnaireTemplate();
            const invalidTemplate = validTemplate;

            // Make the valid questionnaire invalid - remove some sections
            delete invalidTemplate.sections['p-applicant-declaration'];
            delete invalidTemplate.sections['p-applicant-british-citizen-or-eu-national'];

            const qHelper = createQuestionnaireTemplateHelper({
                questionnaireTemplate: invalidTemplate
            });
            const errors = qHelper.ensureAllRoutesHaveCorrespondingSection();

            expect(errors).toIncludeSameMembers([
                {
                    type: 'SectionNotFound',
                    source: '/routes/states/p-applicant-declaration',
                    description: "Section '/sections/p-applicant-declaration' not found"
                },
                {
                    type: 'SectionNotFound',
                    source: '/routes/states/p-applicant-british-citizen-or-eu-national',
                    description:
                        "Section '/sections/p-applicant-british-citizen-or-eu-national' not found"
                }
            ]);
        });
    });

    describe('ensureInitialRouteExists', () => {
        it('should return true if the "initial" route has a corresponding state', () => {
            const validTemplate = getValidQuestionnaireTemplate();
            const qHelper = createQuestionnaireTemplateHelper({
                questionnaireTemplate: validTemplate
            });

            expect(qHelper.ensureInitialRouteExists()).toEqual(true);
        });

        it('should return an error if the "initial" route has no corresponding state', () => {
            const validTemplate = getValidQuestionnaireTemplate();
            const invalidTemplate = validTemplate;

            // Make the valid questionnaire invalid
            invalidTemplate.routes.states = [];

            const qHelper = createQuestionnaireTemplateHelper({
                questionnaireTemplate: invalidTemplate
            });
            const error = qHelper.ensureInitialRouteExists();

            expect(error).toEqual({
                type: 'RouteNotFound',
                source: '/routes/initial',
                description: "Route '/routes/states/p-applicant-fatal-claim' not found"
            });
        });
    });

    describe('ensureSummaryRouteExists', () => {
        it('should return true if the "summary" route has a corresponding state', () => {
            const validTemplate = getValidQuestionnaireTemplate();
            const qHelper = createQuestionnaireTemplateHelper({
                questionnaireTemplate: validTemplate
            });

            expect(qHelper.ensureSummaryRouteExists()).toEqual(true);
        });

        it('should return an error if the "summary" route has no corresponding state', () => {
            const validTemplate = getValidQuestionnaireTemplate();
            const invalidTemplate = validTemplate;

            // Make the valid questionnaire invalid
            delete invalidTemplate.routes.states['p-mainapplicant-declaration-under-12'];

            const qHelper = createQuestionnaireTemplateHelper({
                questionnaireTemplate: invalidTemplate
            });
            const error = qHelper.ensureSummaryRouteExists();

            expect(error).toEqual([
                {
                    type: 'RouteNotFound',
                    source: '/routes/summary',
                    description:
                        "Route '/routes/states/p-mainapplicant-declaration-under-12' not found"
                }
            ]);
        });
    });

    describe('ensureConfirmationRouteExists', () => {
        it('should return true if the "confirmation" route has a corresponding state', () => {
            const validTemplate = getValidQuestionnaireTemplate();
            const qHelper = createQuestionnaireTemplateHelper({
                questionnaireTemplate: validTemplate
            });

            expect(qHelper.ensureConfirmationRouteExists()).toEqual(true);
        });

        it('should return an error if the "confirmation" route has no corresponding state', () => {
            const validTemplate = getValidQuestionnaireTemplate();
            const invalidTemplate = validTemplate;

            // Make the valid questionnaire invalid
            delete invalidTemplate.routes.states['p--confirmation'];

            const qHelper = createQuestionnaireTemplateHelper({
                questionnaireTemplate: invalidTemplate
            });
            const error = qHelper.ensureConfirmationRouteExists();

            expect(error).toEqual({
                type: 'RouteNotFound',
                source: '/routes/confirmation',
                description: "Route '/routes/states/p--confirmation' not found"
            });
        });
    });

    describe('ensureRouteTargetsHaveCorrespondingState', () => {
        it('should return true if all state targets have a corresponding section', () => {
            const validTemplate = getValidQuestionnaireTemplate();
            const qHelper = createQuestionnaireTemplateHelper({
                questionnaireTemplate: validTemplate
            });

            expect(qHelper.ensureRouteTargetsHaveCorrespondingState()).toEqual(true);
        });

        it('should return an error for each target that has no corresponding state', () => {
            const validTemplate = getValidQuestionnaireTemplate();
            const invalidTemplate = validTemplate;

            // Make the valid questionnaire invalid - remove some states that are being referenced by targets
            delete invalidTemplate.routes.states['p-offender-enter-offenders-name'];
            delete invalidTemplate.routes.states['p--transition'];

            const qHelper = createQuestionnaireTemplateHelper({
                questionnaireTemplate: invalidTemplate
            });
            const errors = qHelper.ensureRouteTargetsHaveCorrespondingState();

            expect(errors).toIncludeSameMembers([
                {
                    type: 'TargetNotFound',
                    source:
                        '/routes/states/p-offender-do-you-know-the-name-of-the-offender/on/ANSWER/1/target',
                    description: "Target '/routes/states/p-offender-enter-offenders-name' not found"
                },
                {
                    type: 'TargetNotFound',
                    source:
                        '/routes/states/p-applicant-british-citizen-or-eu-national/on/ANSWER/0/target',
                    description: "Target '/routes/states/p--transition' not found"
                },
                {
                    type: 'TargetNotFound',
                    source:
                        '/routes/states/p-applicant-are-you-18-or-over/on/ANSWER/0/target',
                    description: "Target '/routes/states/p--transition' not found"
                },
                {
                    type: 'TargetNotFound',
                    source:
                        '/routes/states/p-applicant-enter-your-date-of-birth/on/ANSWER/0/target',
                    description: "Target '/routes/states/p--transition' not found"
                },
                {
                    type: 'TargetNotFound',
                    source: '/routes/states/p-mainapplicant-parent/on/ANSWER/0/target',
                    description: "Target '/routes/states/p--transition' not found"
                },
                {
                    type: 'TargetNotFound',
                    source: '/routes/states/p-applicant-fatal-claim/on/ANSWER/0/target',
                    description: "Target '/routes/states/p--transition' not found"
                }
            ]);
        });
    });

    describe('ensureAllConditionDataReferencesHaveCorrespondingQuestion', () => {
        it('should return true if all state condition data references have a corresponding question', () => {
            const validTemplate = getValidQuestionnaireTemplate();
            const qHelper = createQuestionnaireTemplateHelper({
                questionnaireTemplate: validTemplate
            });

            expect(qHelper.ensureAllConditionDataReferencesHaveCorrespondingQuestion()).toEqual(
                true
            );
        });

        it('should return an error if one or more condition data references have no corresponding question', () => {
            const validTemplate = getValidQuestionnaireTemplate();
            const invalidTemplate = validTemplate;

            // Make the valid questionnaire invalid
            invalidTemplate.routes.states[
                'p-applicant-british-citizen-or-eu-national'
            ].on.ANSWER[0].cond[1] = '$.answers.p-foo.q-baz';

            const qHelper = createQuestionnaireTemplateHelper({
                questionnaireTemplate: invalidTemplate
            });
            const error = qHelper.ensureAllConditionDataReferencesHaveCorrespondingQuestion();

            expect(error).toIncludeSameMembers([
                {
                    type: 'ConditionDataReferenceNotFound',
                    source:
                        '/routes/states/p-applicant-british-citizen-or-eu-national/on/ANSWER/0/cond/1',
                    description:
                        "Condition data reference '/sections/p-foo/schema/properties/q-baz' not found"
                }
            ]);
        });
    });

    describe('ensureSectionSchemasAreValid', () => {
        describe('Given "examples" are present', () => {
            it('should return true if all section schemas are valid', () => {
                const validTemplate = getValidQuestionnaireTemplate();
                const qHelper = createQuestionnaireTemplateHelper({
                    questionnaireTemplate: validTemplate,
                    customSchemaFormats: {
                        'mobile-uk': ajvFormatsMobileUk
                    }
                });

                expect(qHelper.ensureSectionSchemasAreValid()).toEqual(true);
            });

            it('should return an error for each section schema that is invalid', () => {
                const validTemplate = getValidQuestionnaireTemplate();
                const invalidTemplate = validTemplate;

                // Make the valid questionnaire invalid - modify some schemas to accept different data types
                // "q-applicant-british-citizen-or-eu-national" expects a boolean, change the example to a string
                invalidTemplate.sections['p-applicant-british-citizen-or-eu-national'].schema = {
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    type: 'object',
                    required: ['q-applicant-british-citizen-or-eu-national'],
                    additionalProperties: false,
                    properties: {
                        'q-applicant-british-citizen-or-eu-national': {
                            type: 'boolean',
                            title: 'Are you a British citizen or EU national?'
                        }
                    },
                    errorMessage: {
                        required: {
                            'q-applicant-british-citizen-or-eu-national':
                                'Select yes if you are a British citizen or EU national'
                        }
                    },
                    examples: [
                        {
                            'q-applicant-british-citizen-or-eu-national': 'foo'
                        }
                    ]
                };

                // "q-applicant-are-you-18-or-over" expects a boolean, change one of the examples to a string
                invalidTemplate.sections['p-applicant-are-you-18-or-over'].schema = {
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    type: 'object',
                    required: ['q-applicant-are-you-18-or-over'],
                    additionalProperties: false,
                    properties: {
                        'q-applicant-are-you-18-or-over': {
                            type: 'boolean',
                            title: 'Are you 18 or over?'
                        }
                    },
                    errorMessage: {
                        required: {
                            'q-applicant-are-you-18-or-over': 'Select yes if you are 18 or over'
                        }
                    },
                    examples: [
                        {
                            'q-applicant-are-you-18-or-over': 'foo bar'
                        },
                        {
                            'q-applicant-are-you-18-or-over': false
                        }
                    ]
                };

                const qHelper = createQuestionnaireTemplateHelper({
                    questionnaireTemplate: invalidTemplate,
                    customSchemaFormats: {
                        'mobile-uk': ajvFormatsMobileUk
                    }
                });
                const errors = qHelper.ensureSectionSchemasAreValid();

                expect(errors).toIncludeSameMembers([
                    {
                        type: 'SectionSchemaFailed',
                        source: '/sections/p-applicant-british-citizen-or-eu-national/schema',
                        description: [
                            {
                                dataPath: '/q-applicant-british-citizen-or-eu-national',
                                keyword: 'type',
                                message: 'should be boolean',
                                params: {
                                    type: 'boolean'
                                },
                                schemaPath:
                                    '#/properties/q-applicant-british-citizen-or-eu-national/type'
                            }
                        ]
                    },
                    {
                        type: 'SectionSchemaFailed',
                        source: '/sections/p-applicant-are-you-18-or-over/schema',
                        description: [
                            {
                                dataPath: '/q-applicant-are-you-18-or-over',
                                keyword: 'type',
                                message: 'should be boolean',
                                params: {
                                    type: 'boolean'
                                },
                                schemaPath: '#/properties/q-applicant-are-you-18-or-over/type'
                            }
                        ]
                    }
                ]);
            });

            it('should return error(s) if a custom format fails validation', () => {
                const validTemplate = getValidQuestionnaireTemplate();

                validTemplate.sections['p-applicant-enter-your-telephone-number'].schema.properties[
                    'q-applicant-enter-your-telephone-number'
                ].format = 'mobile-uk';

                const dummyFormatFunctionAlwaysFailsValidation = () => false;
                const qHelper = createQuestionnaireTemplateHelper({
                    questionnaireTemplate: validTemplate,
                    customSchemaFormats: {
                        'mobile-uk': dummyFormatFunctionAlwaysFailsValidation
                    }
                });
                const errors = qHelper.ensureSectionSchemasAreValid();

                expect(errors).toIncludeSameMembers([
                    {
                        type: 'SectionSchemaFailed',
                        source: '/sections/p-applicant-enter-your-telephone-number/schema',
                        description: [
                            {
                                dataPath: '/q-applicant-enter-your-telephone-number',
                                keyword: 'format',
                                message: 'should match format "mobile-uk"',
                                params: {format: 'mobile-uk'},
                                schemaPath:
                                    '#/properties/q-applicant-enter-your-telephone-number/format'
                            }
                        ]
                    },
                    {
                        type: 'SectionSchemaFailed',
                        source: '/sections/p-applicant-confirmation-method/schema',
                        description: [
                            {
                                dataPath: '/q-applicant-enter-your-telephone-number',
                                keyword: 'errorMessage',
                                message:
                                    'Enter a UK mobile phone number, like 07700 900 982 or +44 7700 900 982',
                                params: {
                                    errors: [
                                        {
                                            dataPath: '/q-applicant-enter-your-telephone-number',
                                            keyword: 'format',
                                            message: 'should match format "mobile-uk"',
                                            params: {format: 'mobile-uk'},
                                            schemaPath:
                                                '#/properties/q-applicant-enter-your-telephone-number/format'
                                        }
                                    ]
                                },
                                schemaPath:
                                    '#/properties/q-applicant-enter-your-telephone-number/errorMessage'
                            }
                        ]
                    },
                    {
                        type: 'SectionSchemaFailed',
                        source: '/sections/p-mainapplicant-confirmation-method/schema',
                        description: [
                            {
                                dataPath: '/q-mainapplicant-enter-your-telephone-number',
                                keyword: 'errorMessage',
                                message:
                                    'Enter a UK mobile phone number, like 07700 900 982 or +44 7700 900 982',
                                params: {
                                    errors: [
                                        {
                                            dataPath:
                                                '/q-mainapplicant-enter-your-telephone-number',
                                            keyword: 'format',
                                            message: 'should match format "mobile-uk"',
                                            params: {format: 'mobile-uk'},
                                            schemaPath:
                                                '#/properties/q-mainapplicant-enter-your-telephone-number/format'
                                        }
                                    ]
                                },
                                schemaPath:
                                    '#/properties/q-mainapplicant-enter-your-telephone-number/errorMessage'
                            }
                        ]
                    }
                ]);
            });
        });

        describe('Given "invalidExamples" are present', () => {
            it('should return true if all section schemas fail validation against their invalid examples', () => {
                const validTemplate = getValidQuestionnaireTemplate();
                const qHelper = createQuestionnaireTemplateHelper({
                    questionnaireTemplate: validTemplate,
                    customSchemaFormats: {
                        'mobile-uk': ajvFormatsMobileUk
                    }
                });

                expect(qHelper.ensureSectionSchemasAreValid()).toEqual(true);
            });

            it('should return an error for each section schema that passes validation against their invalid examples', () => {
                const validTemplate = getValidQuestionnaireTemplate();
                const invalidTemplate = validTemplate;

                // Make the valid questionnaire invalid
                // give the invalidExamples a valid example
                invalidTemplate.sections['p-applicant-british-citizen-or-eu-national'].schema = {
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    type: 'object',
                    required: ['q-applicant-british-citizen-or-eu-national'],
                    additionalProperties: false,
                    properties: {
                        'q-applicant-british-citizen-or-eu-national': {
                            type: 'boolean',
                            title: 'Are you a British citizen or EU national?'
                        }
                    },
                    errorMessage: {
                        required: {
                            'q-applicant-british-citizen-or-eu-national':
                                'Select yes if you are a British citizen or EU national'
                        }
                    },
                    invalidExamples: [
                        {
                            'q-applicant-british-citizen-or-eu-national': true
                        }
                    ]
                };

                // give the invalidExamples valid examples
                invalidTemplate.sections['p-applicant-are-you-18-or-over'].schema = {
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    type: 'object',
                    required: ['q-applicant-are-you-18-or-over'],
                    additionalProperties: false,
                    properties: {
                        'q-applicant-are-you-18-or-over': {
                            type: 'boolean',
                            title: 'Are you 18 or over?'
                        }
                    },
                    errorMessage: {
                        required: {
                            'q-applicant-are-you-18-or-over': 'Select yes if you are 18 or over'
                        }
                    },
                    invalidExamples: [
                        {
                            'q-applicant-are-you-18-or-over': true
                        },
                        {
                            'q-applicant-are-you-18-or-over': false
                        }
                    ]
                };

                const qHelper = createQuestionnaireTemplateHelper({
                    questionnaireTemplate: invalidTemplate,
                    customSchemaFormats: {
                        'mobile-uk': ajvFormatsMobileUk
                    }
                });
                const errors = qHelper.ensureSectionSchemasAreValid();

                expect(errors).toIncludeSameMembers([
                    {
                        type: 'SectionSchemaFailed',
                        source: '/sections/p-applicant-british-citizen-or-eu-national/schema',
                        description:
                            "invalidExample '/sections/p-applicant-british-citizen-or-eu-national/schema/invalidExamples/0' should not pass schema validation"
                    },
                    {
                        type: 'SectionSchemaFailed',
                        source: '/sections/p-applicant-are-you-18-or-over/schema',
                        description:
                            "invalidExample '/sections/p-applicant-are-you-18-or-over/schema/invalidExamples/0' should not pass schema validation"
                    },
                    {
                        type: 'SectionSchemaFailed',
                        source: '/sections/p-applicant-are-you-18-or-over/schema',
                        description:
                            "invalidExample '/sections/p-applicant-are-you-18-or-over/schema/invalidExamples/1' should not pass schema validation"
                    }
                ]);
            });
        });
    });

    // TODO: reinstate these when https://github.com/CriminalInjuriesCompensationAuthority/q-template-validator/issues/11 is resolved
    // eslint-disable-next-line jest/no-commented-out-tests
    // describe('ensureAllRoutesCanBeReached', () => {
    // eslint-disable-next-line jest/no-commented-out-tests
    //     it('should return true if all routes can be reached', () => {
    //         const validTemplate = getValidQuestionnaireTemplate();
    //         const qHelper = createQuestionnaireTemplateHelper({
    //             questionnaireTemplate: validTemplate
    //         });

    //         expect(qHelper.ensureAllRoutesCanBeReached()).toEqual(true);
    //     });

    // eslint-disable-next-line jest/no-commented-out-tests
    //     it('should return an error for each route that cannot be reached', () => {
    //         const validTemplate = getValidQuestionnaireTemplate();
    //         const invalidTemplate = validTemplate;

    //         // Make the valid questionnaire invalid - add an orphan state
    //         invalidTemplate.routes.states.foo = {type: 'final'};

    //         const qHelper = createQuestionnaireTemplateHelper({
    //             questionnaireTemplate: invalidTemplate
    //         });
    //         const errors = qHelper.ensureAllRoutesCanBeReached();

    //         expect(errors).toEqual([
    //             {
    //                 type: 'UnvisitedPath',
    //                 source: '/routes/states',
    //                 description: ['?', 'foo']
    //             }
    //         ]);
    //     });
    // });

    describe('validate', () => {
        it('should return true if the questionnaire template is valid', () => {
            const validTemplate = getValidQuestionnaireTemplate();
            const qHelper = createQuestionnaireTemplateHelper({
                questionnaireTemplate: validTemplate,
                customSchemaFormats: {
                    'mobile-uk': ajvFormatsMobileUk
                }
            });

            expect(qHelper.validateTemplate()).toEqual(true);
        });

        it('should return a single error if the template document is invalid', () => {
            const validTemplate = getValidQuestionnaireTemplate();
            const invalidTemplate = validTemplate;

            // Make the valid questionnaire invalid
            delete invalidTemplate.routes.initial;

            const qHelper = createQuestionnaireTemplateHelper({
                questionnaireTemplate: invalidTemplate
            });
            const errors = qHelper.validateTemplate();

            expect(errors).toIncludeSameMembers([
                {
                    type: 'InvalidTemplateStructure',
                    source: '/',
                    description: [
                        {
                            dataPath: '/routes',
                            keyword: 'required',
                            message: "should have required property 'initial'",
                            params: {missingProperty: 'initial'},
                            schemaPath: '#/properties/routes/required'
                        }
                    ]
                }
            ]);
        });

        it('should return an array of errors if the template is invalid', () => {
            const validTemplate = getValidQuestionnaireTemplate();
            const invalidTemplate = validTemplate;

            // Make the valid questionnaire invalid
            invalidTemplate.routes.initial = 'p-foo';
            invalidTemplate.routes.summary = ['p-bar'];
            invalidTemplate.routes.confirmation = 'p-baz';
            invalidTemplate.routes.states[
                'p-applicant-british-citizen-or-eu-national'
            ].on.ANSWER[0].target = 'p-biz';
            invalidTemplate.routes.states[
                'p-applicant-british-citizen-or-eu-national'
            ].on.ANSWER[0].cond[1] = '$.answers.p-foo.q-baz';

            delete invalidTemplate.sections['p-applicant-declaration'];

            invalidTemplate.sections['p-applicant-are-you-18-or-over'].schema = {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-are-you-18-or-over'],
                additionalProperties: false,
                properties: {
                    'q-applicant-are-you-18-or-over': {
                        type: 'boolean',
                        title: 'Are you 18 or over?'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-are-you-18-or-over': 'Select yes if you are 18 or over'
                    }
                },
                examples: [{'q-applicant-are-you-18-or-over': 'foo'}],
                invalidExamples: [
                    {
                        'q-applicant-are-you-18-or-over': true
                    },
                    {
                        'q-applicant-are-you-18-or-over': false
                    }
                ]
            };

            const qHelper = createQuestionnaireTemplateHelper({
                questionnaireTemplate: invalidTemplate,
                customSchemaFormats: {
                    'mobile-uk': ajvFormatsMobileUk
                }
            });
            const errors = qHelper.validateTemplate();

            expect(errors).toIncludeSameMembers([
                {
                    type: 'RouteNotFound',
                    source: '/routes/initial',
                    description: "Route '/routes/states/p-foo' not found"
                },
                {
                    type: 'RouteNotFound',
                    source: '/routes/summary',
                    description: "Route '/routes/states/p-bar' not found"
                },
                {
                    type: 'RouteNotFound',
                    source: '/routes/confirmation',
                    description: "Route '/routes/states/p-baz' not found"
                },
                {
                    type: 'TargetNotFound',
                    source:
                        '/routes/states/p-applicant-british-citizen-or-eu-national/on/ANSWER/0/target',
                    description: "Target '/routes/states/p-biz' not found"
                },
                {
                    type: 'SectionNotFound',
                    source: '/routes/states/p-applicant-declaration',
                    description: "Section '/sections/p-applicant-declaration' not found"
                },
                {
                    type: 'SectionSchemaFailed',
                    source: '/sections/p-applicant-are-you-18-or-over/schema',
                    description: [
                        {
                            dataPath: '/q-applicant-are-you-18-or-over',
                            keyword: 'type',
                            message: 'should be boolean',
                            params: {
                                type: 'boolean'
                            },
                            schemaPath: '#/properties/q-applicant-are-you-18-or-over/type'
                        }
                    ]
                },
                {
                    type: 'SectionSchemaFailed',
                    source: '/sections/p-applicant-are-you-18-or-over/schema',
                    description:
                        "invalidExample '/sections/p-applicant-are-you-18-or-over/schema/invalidExamples/0' should not pass schema validation"
                },
                {
                    type: 'SectionSchemaFailed',
                    source: '/sections/p-applicant-are-you-18-or-over/schema',
                    description:
                        "invalidExample '/sections/p-applicant-are-you-18-or-over/schema/invalidExamples/1' should not pass schema validation"
                },
                {
                    type: 'ConditionDataReferenceNotFound',
                    source:
                        '/routes/states/p-applicant-british-citizen-or-eu-national/on/ANSWER/0/cond/1',
                    description:
                        "Condition data reference '/sections/p-foo/schema/properties/q-baz' not found"
                }
            ]);
        });
    });

    describe('Validate compiled', () => {
        const validTemplate = getValidQuestionnaireTemplate();
        const qHelper = createQuestionnaireTemplateHelper({
            questionnaireTemplate: validTemplate
        });
        describe('Remove elements from object', () => {
            it('should remove specified keys from a json structure', () => {
                const json = {
                    a: '1',
                    b: '2',
                    c: {
                        a: '3',
                        b: '4'
                    }
                };
                const arrayToDelete = ['b'];
                const expected = {
                    a: '1',
                    c: {
                        a: '3'
                    }
                };
                const actual = qHelper.removeSchemaElements(json, arrayToDelete);

                expect(expected).toEqual(actual);
            });

            it('should remove specified keys from a "required" array', () => {
                const json = {
                    a: '1',
                    required: ['a', 'b', 'c'],
                    c: {
                        a: '3',
                        required: ['a', 'b', 'c'],
                        notRequired: ['a', 'b', 'c']
                    }
                };
                const arrayToDelete = ['b'];
                const expected = {
                    a: '1',
                    required: ['a', 'c'],
                    c: {
                        a: '3',
                        required: ['a', 'c'],
                        notRequired: ['a', 'b', 'c']
                    }
                };
                const actual = qHelper.removeSchemaElements(json, arrayToDelete);

                expect(expected).toEqual(actual);
            });
        });

        describe('isValidCompiledDocument', () => {
            it('should return true if a schema is valid', () => {
                const qTemplateHelper = createQuestionnaireTemplateHelper({
                    qSchema: {
                        type: 'object',
                        properties: {
                            foo: {
                                type: 'integer'
                            },
                            bar: {
                                type: 'string'
                            },
                            biz: {
                                type: 'object',
                                properties: {
                                    a: {
                                        type: 'string'
                                    },
                                    b: {
                                        type: 'string'
                                    },
                                    c: {
                                        type: 'string'
                                    }
                                },
                                required: ['a', 'b', 'c']
                            },
                            sections: {
                                type: 'object'
                            },
                            routes: {
                                type: 'object',
                                properties: {
                                    states: {
                                        type: 'object'
                                    }
                                }
                            }
                        },
                        required: ['foo'],
                        additionalProperties: false
                    },
                    questionnaireTemplate: {
                        foo: 1,
                        bar: 'abc',
                        biz: {
                            a: 'foo',
                            c: 'bar'
                        },
                        sections: {},
                        routes: {
                            states: {}
                        }
                    }
                });

                expect(qTemplateHelper.isValidCompiledDocument(['b'])).toEqual(true);
            });

            it('should return a single error if the template document is invalid', () => {
                const invalidTemplate = {
                    foo: 1,
                    bar: 'abc',
                    biz: {
                        a: 'foo',
                        c: 'bar'
                    },
                    sections: {},
                    routes: {
                        states: {}
                    }
                };

                // Make the valid questionnaire invalid
                delete invalidTemplate.foo;

                const qTemplateHelper = createQuestionnaireTemplateHelper({
                    qSchema: {
                        type: 'object',
                        properties: {
                            foo: {
                                type: 'integer'
                            },
                            bar: {
                                type: 'string'
                            },
                            biz: {
                                type: 'object',
                                properties: {
                                    a: {
                                        type: 'string'
                                    },
                                    b: {
                                        type: 'string'
                                    },
                                    c: {
                                        type: 'string'
                                    }
                                },
                                required: ['a', 'b', 'c']
                            },
                            sections: {
                                type: 'object'
                            },
                            routes: {
                                type: 'object',
                                properties: {
                                    states: {
                                        type: 'object'
                                    }
                                }
                            }
                        },
                        required: ['foo'],
                        additionalProperties: false
                    },
                    questionnaireTemplate: invalidTemplate
                });
                const errors = qTemplateHelper.isValidCompiledDocument(['b']);

                expect(errors).toEqual({
                    type: 'InvalidTemplateStructure',
                    source: '/',
                    description: [
                        {
                            dataPath: '',
                            keyword: 'required',
                            message: "should have required property 'foo'",
                            params: {missingProperty: 'foo'},
                            schemaPath: '#/required'
                        }
                    ]
                });
            });

            it('should return an array of errors if the template is invalid', () => {
                const invalidTemplate = {
                    foo: 1,
                    bar: 'abc',
                    biz: {
                        a: 'foo',
                        c: 'bar'
                    },
                    sections: {},
                    routes: {
                        states: {}
                    }
                };

                // Make the valid questionnaire invalid
                delete invalidTemplate.foo;
                delete invalidTemplate.bar;

                const qTemplateHelper = createQuestionnaireTemplateHelper({
                    qSchema: {
                        type: 'object',
                        properties: {
                            foo: {
                                type: 'integer'
                            },
                            bar: {
                                type: 'string'
                            },
                            biz: {
                                type: 'object',
                                properties: {
                                    a: {
                                        type: 'string'
                                    },
                                    b: {
                                        type: 'string'
                                    },
                                    c: {
                                        type: 'string'
                                    }
                                },
                                required: ['a', 'b', 'c']
                            },
                            sections: {
                                type: 'object'
                            },
                            routes: {
                                type: 'object',
                                properties: {
                                    states: {
                                        type: 'object'
                                    }
                                }
                            }
                        },
                        required: ['foo', 'bar'],
                        additionalProperties: false
                    },
                    questionnaireTemplate: invalidTemplate
                });
                const errors = qTemplateHelper.isValidCompiledDocument(['b']);

                expect(errors).toEqual({
                    type: 'InvalidTemplateStructure',
                    source: '/',
                    description: [
                        {
                            dataPath: '',
                            keyword: 'required',
                            message: "should have required property 'foo'",
                            params: {missingProperty: 'foo'},
                            schemaPath: '#/required'
                        },
                        {
                            dataPath: '',
                            keyword: 'required',
                            message: "should have required property 'bar'",
                            params: {missingProperty: 'bar'},
                            schemaPath: '#/required'
                        }
                    ]
                });
            });
        });
    });
});
