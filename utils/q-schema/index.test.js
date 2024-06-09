'use strict';

const Ajv = require('ajv');
const questionnaireSchema = require('./index');
const validSingleTaskQuestionnaireTemplateFixture = require('./fixtures/valid-single-task-questionnaire-template.json');
const validMultipleTaskQuestionnaireTemplateFixture = require('./fixtures/valid-single-task-questionnaire-template.json');
const invalidSingleTaskQuestionnaireTemplateFixture = require('./fixtures/invalid-questionnaire-template-missing-essential-attributes');
const invalidMultipleTaskQuestionnaireTemplateFixture = require('./fixtures/invalid-multiple-task-questionnaire-template-missing-essential-attributes');

function copyJsonObject(objectDerivedFromJson) {
    return JSON.parse(JSON.stringify(objectDerivedFromJson));
}

function getValidSingleTaskQuestionnaireTemplate() {
    return copyJsonObject(validSingleTaskQuestionnaireTemplateFixture);
}

function getValidMultipleTaskQuestionnaireTemplate() {
    return copyJsonObject(validMultipleTaskQuestionnaireTemplateFixture);
}

function getInvalidSingleTaskQuestionnaireTemplate() {
    return copyJsonObject(invalidSingleTaskQuestionnaireTemplateFixture);
}

function getInvalidMultipleTaskQuestionnaireTemplate() {
    return copyJsonObject(invalidMultipleTaskQuestionnaireTemplateFixture);
}

const ajv = new Ajv({
    allErrors: true,
    jsonPointers: true,
    format: 'full',
    coerceTypes: true
});

describe('Questionnaire Schema', () => {
    describe('Single task template', () => {
        it('should return true for a valid questionnaire document structure', () => {
            const validate = ajv.compile(questionnaireSchema);
            const validQuestionnaireTemplate = getValidSingleTaskQuestionnaireTemplate();
            const valid = validate(validQuestionnaireTemplate);
            expect(valid).toEqual(true);
        });

        it('should return errors for an invalid questionnaire document structure', () => {
            const validate = ajv.compile(questionnaireSchema);
            const invalidQuestionnaireTemplate = getInvalidSingleTaskQuestionnaireTemplate();
            const valid = validate(invalidQuestionnaireTemplate);

            expect(valid).toEqual(false);
            expect(validate.errors).toEqual(
                expect.arrayContaining([
                    {
                        keyword: 'required',
                        dataPath: '',
                        schemaPath: '#/oneOf/0/required',
                        params: {missingProperty: 'version'},
                        message: "should have required property 'version'"
                    },
                    {
                        keyword: 'required',
                        dataPath: '',
                        schemaPath: '#/oneOf/0/required',
                        params: {missingProperty: 'type'},
                        message: "should have required property 'type'"
                    },
                    {
                        keyword: 'required',
                        dataPath: '/meta',
                        schemaPath: '#/oneOf/0/properties/meta/required',
                        params: {missingProperty: 'questionnaireDocumentVersion'},
                        message: "should have required property 'questionnaireDocumentVersion'"
                    },
                    {
                        dataPath: '',
                        keyword: 'additionalProperties',
                        message: 'should NOT have additional properties',
                        params: {additionalProperty: 'extraAttribute'},
                        schemaPath: '#/oneOf/0/additionalProperties'
                    }
                ])
            );
        });
    });

    describe('Multiple task template', () => {
        it('should return true for a valid questionnaire document structure', () => {
            const validate = ajv.compile(questionnaireSchema);
            const validQuestionnaireTemplate = getValidMultipleTaskQuestionnaireTemplate();
            const valid = validate(validQuestionnaireTemplate);
            expect(valid).toEqual(true);
        });

        it('should return errors for an invalid questionnaire document structure', () => {
            const validate = ajv.compile(questionnaireSchema);
            const invalidQuestionnaireTemplate = getInvalidMultipleTaskQuestionnaireTemplate();
            const valid = validate(invalidQuestionnaireTemplate);

            expect(valid).toEqual(false);
            expect(validate.errors).toEqual(
                expect.arrayContaining([
                    {
                        keyword: 'required',
                        dataPath: '',
                        schemaPath: '#/oneOf/1/required',
                        params: {missingProperty: 'taskStatuses'},
                        message: "should have required property 'taskStatuses'"
                    },
                    {
                        dataPath: '/routes',
                        keyword: 'required',
                        message: "should have required property 'initial'",
                        params: {
                            missingProperty: 'initial'
                        },
                        schemaPath: '#/oneOf/1/properties/routes/required'
                    },
                    {
                        keyword: 'required',
                        dataPath: '/meta',
                        schemaPath: '#/oneOf/1/properties/meta/required',
                        params: {missingProperty: 'questionnaireDocumentVersion'},
                        message: "should have required property 'questionnaireDocumentVersion'"
                    },
                    {
                        dataPath: '',
                        keyword: 'additionalProperties',
                        message: 'should NOT have additional properties',
                        params: {additionalProperty: 'extraAttribute'},
                        schemaPath: '#/oneOf/1/additionalProperties'
                    }
                ])
            );
        });
    });

    describe('taxonomies', () => {
        describe('taxon', () => {
            it('should allow the title to be a string', () => {
                const validQuestionnaireTemplate = getValidSingleTaskQuestionnaireTemplate();

                validQuestionnaireTemplate.taxonomies = {
                    'some-taxonomy-name': {
                        taxa: {
                            'some-taxon-name': {
                                title: 'Taxon 1'
                            },
                            'some-other-taxon-name': {
                                title: 'Taxon 2'
                            }
                        }
                    }
                };

                const validate = ajv.compile(questionnaireSchema);
                const valid = validate(validQuestionnaireTemplate);

                expect(valid).toEqual(true);
            });

            it('should allow the title to be an l10nt JSON expression', () => {
                const validQuestionnaireTemplate = getValidSingleTaskQuestionnaireTemplate();

                validQuestionnaireTemplate.taxonomies = {
                    'some-taxonomy-name': {
                        taxa: {
                            'some-taxon-name': {
                                title: 'Taxon 1'
                            },
                            'some-other-taxon-name': {
                                title: ['|l10nt', 'some.translation.id']
                            }
                        }
                    }
                };

                const validate = ajv.compile(questionnaireSchema);
                const valid = validate(validQuestionnaireTemplate);

                expect(valid).toEqual(true);
            });
        });
    });
});
