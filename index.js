'use strict';

const defaults = {_: {}};
defaults.qSchema = require('q-schema');
defaults.createQPathsInstance = require('./q-paths-helper');
defaults._.has = require('lodash.has');
defaults._.get = require('lodash.get');

function createQuestionnaireTemplateHelper({
    qSchema = defaults.qSchema,
    createQPathsInstance = defaults.createQPathsInstance,
    _ = defaults._,
    questionnaireTemplate,
    validate
} = {}) {
    const questionnaire = JSON.parse(JSON.stringify(questionnaireTemplate));
    const {sections, routes} = questionnaire;
    const {states} = routes;

    function getAllTargets(state) {
        const targets = _.get(state, 'on.ANSWER');

        if (Array.isArray(targets)) {
            return targets.map(destination => destination.target);
        }

        return [];
    }

    function getAllConditions(state) {
        const targets = _.get(state, 'on.ANSWER');

        if (Array.isArray(targets)) {
            return targets.reduce((acc, target, i) => {
                const condition = target.cond;

                if (condition) {
                    acc.push({
                        elements: condition,
                        arrayIndex: i
                    });
                }

                return acc;
            }, []);
        }

        return [];
    }

    function isDataReference(element) {
        return typeof element === 'string' && element.startsWith('$.');
    }

    function routeExists(stateId, sourcePath) {
        if (stateId in states) {
            return true;
        }

        return {
            type: 'RouteNotFound',
            source: sourcePath,
            description: `Route '/routes/states/${stateId}' not found`
        };
    }

    // 1 - is the questionnaire valid against the questionnaire schema
    function isValidDocument() {
        const result = validate(qSchema, questionnaire);
        if (result.valid === true) {
            return true;
        }

        return {
            type: 'InvalidTemplateStructure',
            source: '/',
            description: result.errors
        };
    }

    // 2 - do all sections have a corresponding route
    function ensureAllSectionsHaveCorrespondingRoute() {
        const errors = Object.keys(sections).reduce((acc, sectionId) => {
            if (!(sectionId in states)) {
                acc.push({
                    type: 'RouteNotFound',
                    source: `/sections/${sectionId}`,
                    description: `Route '/routes/states/${sectionId}' not found`
                });
            }

            return acc;
        }, []);

        if (errors.length > 0) {
            return errors;
        }

        return true;
    }

    // 2.1 - do all routes have a corresponding section
    function ensureAllRoutesHaveCorrespondingSection() {
        const errors = Object.keys(states).reduce((acc, stateId) => {
            if (!(stateId in sections)) {
                acc.push({
                    type: 'SectionNotFound',
                    source: `/routes/states/${stateId}`,
                    description: `Section '/sections/${stateId}' not found`
                });
            }

            return acc;
        }, []);

        if (errors.length > 0) {
            return errors;
        }

        return true;
    }

    // 2.2 - Does "initial" have a corresponding route
    function ensureInitialRouteExists() {
        return routeExists(routes.initial, '/routes/initial');
    }

    // 2.3 - Does "summary" have a corresponding route
    function ensureSummaryRouteExists() {
        return routeExists(routes.summary, '/routes/summary');
    }

    // 2.4 - Does "confirmation" have a corresponding route
    function ensureConfirmationRouteExists() {
        return routeExists(routes.confirmation, '/routes/confirmation');
    }

    // 3 - do all route targets have a corresponding state
    function ensureRouteTargetsHaveCorrespondingState() {
        const errors = Object.keys(states).reduce((acc, stateId) => {
            const state = states[stateId];
            const targets = getAllTargets(state);

            targets.forEach((target, i) => {
                if (!(target in states)) {
                    acc.push({
                        type: 'TargetNotFound',
                        source: `/routes/states/${stateId}/on/ANSWER/${i}/target`,
                        description: `Target '/routes/states/${target}' not found`
                    });
                }
            });

            return acc;
        }, []);

        if (errors.length > 0) {
            return errors;
        }

        return true;
    }

    // 3.1 - Do the condition data references have a corresponding question
    function ensureAllConditionDataReferencesHaveCorrespondingQuestion() {
        const errors = Object.keys(states).reduce((acc, stateId) => {
            const state = states[stateId];
            const conditions = getAllConditions(state);

            conditions.forEach(condition => {
                condition.elements.forEach((element, elementIndex) => {
                    if (isDataReference(element)) {
                        const dataReferenceParts = element.split('.');
                        const dataReference = `${dataReferenceParts[2]}.properties.${dataReferenceParts[3]}`;

                        if (_.has(sections, dataReference) === false) {
                            acc.push({
                                type: 'ConditionDataReferenceNotFound',
                                source: `/routes/states/${stateId}/on/ANSWER/${condition.arrayIndex}/cond/${elementIndex}`,
                                description: `Condition data reference '/sections/${dataReference.replace(
                                    /\./g,
                                    '/'
                                )}' not found`
                            });
                        }
                    }
                });
            });

            return acc;
        }, []);

        if (errors.length > 0) {
            return errors;
        }

        return true;
    }

    // 4 - are all the schemas valid against their validData and invalidData
    function ensureSectionSchemasAreValid() {
        const errors = Object.keys(sections).reduce((acc, sectionId) => {
            const sectionSchema = sections[sectionId];
            const validExamples = _.get(sectionSchema, 'examples');
            const invalidExamples = _.get(sectionSchema, 'invalidExamples');

            // for each valid example ensure there are no errors
            if (validExamples) {
                validExamples.forEach(validExample => {
                    const result = validate(sectionSchema, validExample);

                    if (result.valid === false) {
                        acc.push({
                            type: 'SectionSchemaFailed',
                            source: `/sections/${sectionId}`,
                            description: result.errors
                        });
                    }
                });
            }

            // for each invalid example ensure there *are* errors
            if (invalidExamples) {
                invalidExamples.forEach((invalidExample, i) => {
                    const result = validate(sectionSchema, invalidExample);
                    if (result.valid === true) {
                        acc.push({
                            type: 'SectionSchemaFailed',
                            source: `/sections/${sectionId}`,
                            description: `invalidExample '/sections/${sectionId}/invalidExamples/${i}' should not pass schema validation`
                        });
                    }
                });
            }

            return acc;
        }, []);

        if (errors.length > 0) {
            return errors;
        }

        return true;
    }

    // 5 - can all route permutations be reached
    function ensureAllRoutesCanBeReached() {
        const qPaths = createQPathsInstance();
        const paths = qPaths.getPaths(questionnaire);
        const unvisitedPaths = paths.unvisited;

        if (unvisitedPaths.length > 0) {
            const errors = unvisitedPaths.map(unvisitedPath => ({
                type: 'UnvisitedPath',
                source: '/routes/states',
                description: unvisitedPath.split(',')
            }));

            return errors;
        }

        return true;
    }

    function validateTemplate() {
        const results = [isValidDocument()];

        // Only run these if the document structure is correct
        if (results[0] === true) {
            results.push(
                ensureAllSectionsHaveCorrespondingRoute(),
                ensureAllRoutesHaveCorrespondingSection(),
                ensureInitialRouteExists(),
                ensureSummaryRouteExists(),
                ensureConfirmationRouteExists(),
                ensureRouteTargetsHaveCorrespondingState(),
                ensureAllConditionDataReferencesHaveCorrespondingQuestion(),
                ensureSectionSchemasAreValid()
            );
        }

        // Only run this is if everything else is valid
        if (results.every(result => result === true)) {
            results.push(ensureAllRoutesCanBeReached());
        }

        // Each result could be an array of errors. Add all array elements to a single array
        const errors = results.reduce((acc, result) => {
            if (result !== true) {
                if (Array.isArray(result)) {
                    acc.push(...result);
                } else {
                    acc.push(result);
                }
            }

            return acc;
        }, []);

        if (errors.length > 0) {
            console.log(JSON.stringify(errors, null, 4));

            return errors;
        }

        return true;
    }

    return Object.freeze({
        isValidDocument,
        ensureAllSectionsHaveCorrespondingRoute,
        ensureAllRoutesHaveCorrespondingSection,
        ensureInitialRouteExists,
        ensureSummaryRouteExists,
        ensureConfirmationRouteExists,
        ensureRouteTargetsHaveCorrespondingState,
        ensureAllConditionDataReferencesHaveCorrespondingQuestion,
        ensureSectionSchemasAreValid,
        ensureAllRoutesCanBeReached,
        validateTemplate
    });
}

module.exports = createQuestionnaireTemplateHelper;
