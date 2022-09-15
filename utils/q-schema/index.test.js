'use strict';

const Ajv = require('ajv');
const questionnaireSchema = require('./index');
const validQuestionnaireTemplate = require('./fixtures/valid-questionnaire-template.json');
const invalidQuestionnaireTemplate = require('./fixtures/invalid-questionnaire-template-missing-essential-attributes');

const ajv = new Ajv({
    allErrors: true,
    jsonPointers: true,
    format: 'full',
    coerceTypes: true
});

describe('Questionnaire Schema', () => {
    it('should return true for a valid questionnaire document structure', () => {
        const validate = ajv.compile(questionnaireSchema);
        const valid = validate(validQuestionnaireTemplate);
        expect(valid).toEqual(true);
    });

    it('should return errors for an invalid questionnaire document structure', () => {
        const validate = ajv.compile(questionnaireSchema);
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
});
