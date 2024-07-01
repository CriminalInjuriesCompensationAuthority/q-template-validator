'use strict';

const Ajv = require('ajv');
const questionnaireSchema = require('./index');
const validQuestionnaireTemplateFixture = require('./fixtures/valid-questionnaire-template.json');
const invalidQuestionnaireTemplateFixture = require('./fixtures/invalid-questionnaire-template-missing-essential-attributes');

const validParallelMachinesQuestionnaireTemplateFixture = require('./fixtures/valid-parallel-machines-questionnaire-template');
const invalidParallelMachinesQuestionnaireTemplateFixture = require('./fixtures/invalid-parallel-machines-questionnaire-template-missing-essential-attributes');

function copyJsonObject(objectDerivedFromJson) {
    return JSON.parse(JSON.stringify(objectDerivedFromJson));
}

function getValidQuestionnaireTemplate() {
    return copyJsonObject(validQuestionnaireTemplateFixture);
}

function getInvalidQuestionnaireTemplate() {
    return copyJsonObject(invalidQuestionnaireTemplateFixture);
}

function getValidParallelMachineQuestionnaireTemplate() {
    return copyJsonObject(validParallelMachinesQuestionnaireTemplateFixture);
}

function getInvalidParallelMachineQuestionnaireTemplate() {
    return copyJsonObject(invalidParallelMachinesQuestionnaireTemplateFixture);
}

const ajv = new Ajv({
    allErrors: true,
    jsonPointers: true,
    format: 'full',
    coerceTypes: true
});

describe('Questionnaire Schema', () => {
    describe('Default single machine template', () => {
        it('should return true for a valid questionnaire document structure', () => {
            const validate = ajv.compile(questionnaireSchema);
            const validQuestionnaireTemplate = getValidQuestionnaireTemplate();
            const valid = validate(validQuestionnaireTemplate);
            expect(valid).toEqual(true);
        });

        it('should return errors for an invalid questionnaire document structure', () => {
            const validate = ajv.compile(questionnaireSchema);
            const invalidQuestionnaireTemplate = getInvalidQuestionnaireTemplate();
            const valid = validate(invalidQuestionnaireTemplate);

            expect(valid).toEqual(false);
            expect(validate.errors).toIncludeSameMembers([
                {
                    dataPath: '',
                    keyword: 'additionalProperties',
                    message: 'should NOT have additional properties',
                    params: {additionalProperty: 'extraAttribute'},
                    schemaPath: '#/additionalProperties'
                },
                {
                    dataPath: '/meta',
                    keyword: 'required',
                    message: "should have required property 'questionnaireDocumentVersion'",
                    params: {missingProperty: 'questionnaireDocumentVersion'},
                    schemaPath: '#/properties/meta/required'
                },
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
            ]);
        });

        describe('taxonomies', () => {
            describe('taxon', () => {
                it('should allow the title to be a string', () => {
                    const validQuestionnaireTemplate = getValidQuestionnaireTemplate();

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
                    const validQuestionnaireTemplate = getValidQuestionnaireTemplate();

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

    describe('Multiple machine template', () => {
        it('should return true for a valid questionnaire document structure', () => {
            const validate = ajv.compile(questionnaireSchema);
            const validQuestionnaireTemplate = getValidParallelMachineQuestionnaireTemplate();
            const valid = validate(validQuestionnaireTemplate);
            expect(valid).toEqual(true);
        });

        it('should return errors for an invalid questionnaire document structure', () => {
            const validate = ajv.compile(questionnaireSchema);
            const invalidQuestionnaireTemplate = getInvalidParallelMachineQuestionnaireTemplate();
            const valid = validate(invalidQuestionnaireTemplate);

            expect(valid).toEqual(false);
            expect(validate.errors).toIncludeSameMembers([
                {
                    dataPath: '',
                    keyword: 'additionalProperties',
                    message: 'should NOT have additional properties',
                    params: {additionalProperty: 'extraAttribute'},
                    schemaPath: '#/additionalProperties'
                },
                {
                    dataPath: '/meta',
                    keyword: 'required',
                    message: "should have required property 'questionnaireDocumentVersion'",
                    params: {missingProperty: 'questionnaireDocumentVersion'},
                    schemaPath: '#/properties/meta/required'
                },
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
            ]);
        });
    });
});
