'use strict';

const defaults = {_: {}};
defaults.Ajv = require('ajv');
defaults.AjvErrors = require('ajv-errors');
defaults.qSchema = require('./utils/q-schema');
defaults.createQPathsInstance = require('./q-paths-helper');
defaults._.has = require('lodash.has');
defaults._.get = require('lodash.get');
defaults.convertJsonExpressionsToString = require('./utils/convertJsonExpressionsToString');
defaults.getDataRefsFromJsonExpression = require('./utils/getDataRefsFromJsonExpression');

defaults.impliedRoutes = ['p-task-list'];

function createQuestionnaireTemplateHelper({
    Ajv = defaults.Ajv,
    AjvErrors = defaults.AjvErrors,
    qSchema = defaults.qSchema,
    createQPathsInstance = defaults.createQPathsInstance,
    _ = defaults._,
    questionnaireTemplate,
    customSchemaFormats = {},
    convertJsonExpressionsToString = defaults.convertJsonExpressionsToString,
    getDataRefsFromJsonExpression = defaults.getDataRefsFromJsonExpression,
    impliedRoutes = defaults.impliedRoutes
} = {}) {
    const questionnaire = JSON.parse(JSON.stringify(questionnaireTemplate));
    const {sections, routes} = questionnaire;
    const ajv = new Ajv({
        allErrors: true,
        jsonPointers: true,
        format: 'full',
        coerceTypes: false,
        formats: customSchemaFormats
    }); // options can be passed, e.g. {allErrors: true}

    AjvErrors(ajv);

    function getStates() {
        let stateObj = {};
        routes.states.forEach(task => {
            if ('states' in task) {
                stateObj = {
                    ...stateObj,
                    ...task.states
                };
            }
        });
        return Object.keys(stateObj).length === 0
            ? {tasks: [], states: routes.states}
            : {tasks: routes.states, states: stateObj};
    }

    const {tasks, states} = getStates();

    function getAllTargets(state) {
        const allTargets = _.get(state, 'on.ANSWER');

        if (Array.isArray(allTargets)) {
            // Remove implicit routes from the available targets
            const filteredTargets = allTargets.filter(
                target => !impliedRoutes.includes(target.target)
            );
            return filteredTargets.map(destination => destination.target);
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

    // Ignore implicit routes when checking if they exist
    function routeExists(stateId, sourcePath) {
        if (
            stateId in states ||
            tasks.some(task => stateId === task.id) ||
            tasks.some(task => stateId in task.states || impliedRoutes.includes(stateId))
        ) {
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
        const validate = ajv.compile(qSchema);
        const valid = validate(questionnaire);

        if (valid) {
            return true;
        }

        return {
            type: 'InvalidTemplateStructure',
            source: '/',
            description: validate.errors
        };
    }

    // 2 - do all sections have a corresponding route
    // Ignore implicit routes when checking if they exist
    function ensureAllSectionsHaveCorrespondingRoute() {
        const errors = Object.keys(sections).reduce((acc, sectionId) => {
            if (!(sectionId in states) && !impliedRoutes.includes(sectionId)) {
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
        const results = routes.summary.map(stateId => routeExists(stateId, '/routes/summary'));
        const errors = results.filter(result => result !== true);

        if (errors.length > 0) {
            return errors;
        }

        return true;
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
                const jsonExpression = condition.elements;
                const dataRefs = getDataRefsFromJsonExpression(jsonExpression);

                dataRefs.forEach(dataRef => {
                    const dataReferenceParts = dataRef.split('.');
                    const dataReference = `${dataReferenceParts[2]}.schema.properties.${dataReferenceParts[3]}`;

                    if (_.has(sections, dataReference) === false) {
                        acc.push({
                            type: 'ConditionDataReferenceNotFound',
                            source: `/routes/states/${stateId}/on/ANSWER/${condition.arrayIndex}/cond`,
                            description: `Condition data reference '/sections/${dataReference.replace(
                                /\./g,
                                '/'
                            )}' not found`
                        });
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
            const sectionSchema = sections[sectionId].schema;
            const validExamples = _.get(sectionSchema, 'examples');
            const invalidExamples = _.get(sectionSchema, 'invalidExamples');
            const preProcessedSectionSchema = convertJsonExpressionsToString(sectionSchema);
            const validate = ajv.compile(preProcessedSectionSchema);

            // for each valid example ensure there are no errors
            if (validExamples) {
                validExamples.forEach(validExample => {
                    const valid = validate(validExample);

                    if (!valid) {
                        acc.push({
                            type: 'SectionSchemaFailed',
                            source: `/sections/${sectionId}/schema`,
                            description: validate.errors
                        });
                    }
                });
            }

            // for each invalid example ensure there *are* errors
            if (invalidExamples) {
                invalidExamples.forEach((invalidExample, i) => {
                    const valid = validate(invalidExample);

                    if (valid) {
                        acc.push({
                            type: 'SectionSchemaFailed',
                            source: `/sections/${sectionId}/schema`,
                            description: `invalidExample '/sections/${sectionId}/schema/invalidExamples/${i}' should not pass schema validation`
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

    // 6 - do all sections have a theme

    function ensureAllSectionsHaveThemes() {
        const errors = Object.keys(sections).reduce((acc, sectionId) => {
            if (
                ['system', 'p--check-your-answers', 'owner', 'origin'].includes(sectionId) === false
            ) {
                const sectionSchema = sections[sectionId].schema;

                // if schema includes allOf && allOf.meta
                //      allOf > meta > classification > theme must exist
                // ELSE
                // if schema.properties && any properties have a 'type' key
                //      property > meta > classification > theme must exist
                // ELSE
                // Error

                if ('allOf' in sectionSchema) {
                    sectionSchema.allOf.forEach(property => {
                        if ('title' in property) {
                            if (!('meta' in property)) {
                                acc.push({
                                    type: 'SectionSchemaFailed',
                                    source: `/sections/${sectionId}/schema`,
                                    description: 'Schema does not contain meta data'
                                });
                            } else if (!('classifications' in property.meta)) {
                                acc.push({
                                    type: 'SectionSchemaFailed',
                                    source: `/sections/${sectionId}/schema`,
                                    description: 'Schema does not contain classifications data'
                                });
                            } else if (!('theme' in property.meta.classifications)) {
                                acc.push({
                                    type: 'SectionSchemaFailed',
                                    source: `/sections/${sectionId}/schema`,
                                    description: 'Schema does not contain theme data'
                                });
                            }
                        }
                    });
                }

                if ('properties' in sectionSchema) {
                    Object.keys(sectionSchema.properties).forEach(property => {
                        if ('type' in sectionSchema.properties[property]) {
                            if (!('meta' in sectionSchema.properties[property])) {
                                acc.push({
                                    type: 'SectionSchemaFailed',
                                    source: `/sections/${sectionId}/schema`,
                                    description: 'Schema does not contain meta data'
                                });
                            } else if (
                                !('classifications' in sectionSchema.properties[property].meta)
                            ) {
                                acc.push({
                                    type: 'SectionSchemaFailed',
                                    source: `/sections/${sectionId}/schema`,
                                    description: 'Schema does not contain classifications data'
                                });
                            } else if (
                                !(
                                    'theme' in
                                    sectionSchema.properties[property].meta.classifications
                                )
                            ) {
                                acc.push({
                                    type: 'SectionSchemaFailed',
                                    source: `/sections/${sectionId}/schema`,
                                    description: 'Schema does not contain theme data'
                                });
                            }
                        }
                    });
                }
            }

            return acc;
        }, []);

        if (errors.length > 0) {
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
                ensureSectionSchemasAreValid(),
                ensureAllSectionsHaveThemes()
            );
        }

        // TODO: reinstate this when https://github.com/CriminalInjuriesCompensationAuthority/q-template-validator/issues/11 is resolved
        // Only run this is if everything else is valid
        // if (results.every(result => result === true)) {
        //     results.push(ensureAllRoutesCanBeReached());
        // }

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
            // eslint-disable-next-line no-console
            console.log(JSON.stringify(errors, null, 4));

            return errors;
        }

        return true;
    }

    // Remove parts of a schema structure in order to test compiled schemas
    /* eslint-disable no-param-reassign */
    function removeSchemaElements(obj, unwantedKeyArray) {
        const result = obj;
        unwantedKeyArray.forEach(unwantedKey => {
            Object.keys(result).forEach(key => {
                if (unwantedKey === key) {
                    delete result[key];
                } else if (key === 'required' && Array.isArray(result[key])) {
                    result[key] = result[key].filter(e => e !== unwantedKey);
                } else if (typeof result[key] === 'object') {
                    removeSchemaElements(result[key], unwantedKeyArray);
                }
            });
        });
        return result;
    }
    /* eslint-enable no-param-reassign */

    // Check if compiled document is valid.
    // removedElementsArray - Array of strings which will be removed form the qSchema object, eg ["examples", "invalidExamples"]
    function isValidCompiledDocument(removedElementsArray) {
        const expectedSchema = removeSchemaElements(qSchema, removedElementsArray);
        const validate = ajv.compile(expectedSchema);
        const valid = validate(questionnaire);

        if (valid) {
            return true;
        }

        return {
            type: 'InvalidTemplateStructure',
            source: '/',
            description: validate.errors
        };
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
        validateTemplate,
        removeSchemaElements,
        isValidCompiledDocument,
        ensureAllSectionsHaveThemes,
        schema: JSON.parse(JSON.stringify(qSchema)) // qSchema
    });
}

module.exports = createQuestionnaireTemplateHelper;
