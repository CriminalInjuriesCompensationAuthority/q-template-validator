'use strict';

const Ajv = require('ajv');
const questionnaireSchema = require('./index');
const validQuestionnaireTemplateFixture = require('./fixtures/valid-questionnaire-template.json');
const invalidQuestionnaireTemplateFixture = require('./fixtures/invalid-questionnaire-template-missing-essential-attributes');

function copyJsonObject(objectDerivedFromJson) {
    return JSON.parse(JSON.stringify(objectDerivedFromJson));
}

function getValidQuestionnaireTemplate() {
    return copyJsonObject(validQuestionnaireTemplateFixture);
}

function getInvalidQuestionnaireTemplate() {
    return copyJsonObject(invalidQuestionnaireTemplateFixture);
}

const ajv = new Ajv({
    allErrors: true,
    jsonPointers: true,
    format: 'full',
    coerceTypes: true
});

describe('Questionnaire Schema', () => {
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
                keyword: 'required',
                dataPath: '',
                schemaPath: '#/required',
                params: {missingProperty: 'version'},
                message: "should have required property 'version'"
            },
            {
                keyword: 'required',
                dataPath: '',
                schemaPath: '#/required',
                params: {missingProperty: 'type'},
                message: "should have required property 'type'"
            },
            {
                keyword: 'required',
                dataPath: '/meta',
                schemaPath: '#/properties/meta/required',
                params: {missingProperty: 'questionnaireDocumentVersion'},
                message: "should have required property 'questionnaireDocumentVersion'"
            },
            {
                dataPath: '',
                keyword: 'additionalProperties',
                message: 'should NOT have additional properties',
                params: {additionalProperty: 'extraAttribute'},
                schemaPath: '#/additionalProperties'
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
