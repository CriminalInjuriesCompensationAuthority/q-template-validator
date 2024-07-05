'use strict';

// Get a valid template and purposely make it invalid. Avoids maintaining another invalid JSON document.
const validQuestionnaireTemplate = require('./valid-multiple-task-questionnaire-template.json');

const invalidQuestionnaireTemplate = JSON.parse(JSON.stringify(validQuestionnaireTemplate));

// Make the valid questionnaire invalid
invalidQuestionnaireTemplate.extraAttribute = 'foo';
delete invalidQuestionnaireTemplate.currentSectionId;
delete invalidQuestionnaireTemplate.meta.questionnaireDocumentVersion;

module.exports = invalidQuestionnaireTemplate;
