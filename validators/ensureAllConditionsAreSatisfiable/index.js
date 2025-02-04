'use strict';

// assumes routing logic is sound (i.e. there are no conditions like go to page a if question 1 = true and question 1 = false)
// also assumes that there are no duplicate conditional routes on a page (ors are fine but not multiple route objects with the same target)
// also assumes that 'includes' questions can always have any number of their possible answers selected (no conditional includes)
// Also assumes that all questions referenced in a route exist on the page they are said to exist on

// assumes that satisfiability/matching can only happen for the same question via the same method except for != and =. For most this is fine
// e.g. you can't have both an == and an includes condition for the same question, but in theory for dates it could be bad.
// Currently this is not an issue, but it could be with more complex datecompare and datedifferencegreaterthantwodays conditions

function matches(preconditionAnswer, routeAnswer) {
    // return true if the answers match (accounting for arrays, dates etc.)
    // returns false if they conflict
    // takes in two objects of the form {type, value}

    if (preconditionAnswer.type === '!=' || routeAnswer.type === '!=') {
        if (preconditionAnswer.type === routeAnswer.type) {
            return preconditionAnswer.value.some(answer => routeAnswer.value.includes(answer));
        }
        // this catches conditions where the route/precondition is a != and the other is an ==
        console.log(preconditionAnswer);
        return (
            preconditionAnswer.value.includes(routeAnswer.value) ||
            routeAnswer.value.includes(preconditionAnswer.value)
        );
    }
    if (preconditionAnswer.type === 'includes') {
        // these are always valid - if the route includes a and the target includes b its still reachable just not guaranteed
        return true;
    }
    if (preconditionAnswer.type === '>' && routeAnswer.type === '>') {
        return preconditionAnswer.value >= routeAnswer.value;
    }
    if (preconditionAnswer.type === '<' && routeAnswer.type === '<') {
        return preconditionAnswer.value <= routeAnswer.value;
    }
    if (preconditionAnswer.type === '>' && routeAnswer.type === '<') {
        return preconditionAnswer.value < routeAnswer.value;
    }
    if (preconditionAnswer.type === '<' && routeAnswer.type === '>') {
        return preconditionAnswer.value > routeAnswer.value;
    }
    return preconditionAnswer.value === routeAnswer.value;
}

function satisfies(precondition, route) {
    // Precondition and route are both answers objects
    // if a precondition satisfies the route completely return 'full'
    // if a precondition satisfies the route assuming other questions have some value return 'partial'
    // if a precondition doesn't satisfy a route return 'none'
    const satisfaction = Object.keys(route).map(section => {
        const questions = route[section];
        const matchedQuestions = Object.keys(questions).map(question => {
            if (precondition?.[section]?.[question] !== undefined) {
                return matches(precondition[section][question], route[section][question]);
            }
            return undefined;
        });
        if (matchedQuestions.every(result => result === true)) {
            return true;
        }
        if (matchedQuestions.some(result => result === false)) {
            return false;
        }
        return undefined;
    });
    if (satisfaction.every(result => result === true)) {
        return 'full';
    }
    if (satisfaction.some(result => result === false)) {
        return 'none';
    }
    return 'partial';
}

function getAllRoleDefinitions(template) {
    const roles = template.attributes.q__roles;
    const roleDefinitions = {};
    Object.keys(roles).forEach(role => {
        let complex = false;
        if (roles[role].schema.const.flat(Infinity).includes('or')) {
            complex = true;
        }
        roleDefinitions[role] = {roleCondition: roles[role].schema.const, complex};
    });

    return roleDefinitions;
}

function getPreviousSections(section, template) {
    // TODO: we may want to add the ability to skip certain sections here, e.g. injury sections
    const {states} = template.routes;
    const previousSections = [];
    Object.keys(states).forEach(state => {
        if (states[state].type === 'final') {
            // final states lead to no other states
        } else if (states[state].on.ANSWER.filter(route => route.target === section).length > 0) {
            previousSections.push(state);
        }
    });
    return previousSections;
}

function setSimpleCondition(condition) {
    // TODO: Currently, all datecompares in the template are based on today's date and time differences of years before now. That is assumed to be the case here.
    // going forwards all this logic should be handled by an equivalent version of q-expressions/JSON-rules that sets instead of evaluating
    if (condition[0] === 'includes') {
        // TODO: This currently only works for single item inclusivity checks, need to check if that is ok
        const answers = {};
        const page = condition[1].split('.')[2];
        const question = condition[1].split('.')[3];
        answers[page] = {};
        answers[page][question] = {type: condition[0], value: [condition[2]]};
        return answers;
    }
    if (condition[0] === 'dateCompare') {
        // going forwards, we could replace this logic to have the answers object be {page-id:{question-id:{type:x, value:y}}}
        const answers = {};
        const page = condition[1].split('.')[2];
        const question = condition[1].split('.')[3];
        answers[page] = {};
        if (condition[2] === '>=') {
            answers[page][question] = {type: '>', value: parseInt(condition[3], 10) + 1};
        } else if (condition[2] === '<=') {
            answers[page][question] = {type: '<', value: parseInt(condition[3], 10) - 1};
        } else {
            answers[page][question] = {type: condition[2], value: condition[3]};
        }
        return answers;
    }
    if (condition[0] === 'dateDifferenceGreaterThanTwoDays') {
        const answers = {};
        // TODO: make this work
        const oldPage = condition[2].split('.')[2];
        const oldQuestion = condition[2].split('.')[3];
        const newPage = condition[1].split('.')[2];
        const newQuestion = condition[1].split('.')[3];
        answers[oldPage] = {};
        answers[oldPage][oldQuestion] = Date.now() - 50 * 3600 * 1000;
        answers[newPage] = {};
        answers[newPage][newQuestion] = Date.now();
        return answers;
    }
    if (condition[0] === '!=') {
        const answers = {};
        const page = `${condition[1].split('.')[2]}!=${condition[1].split('.')[3]}!=${
            condition[2]
        }`;
        answers[page] = {};
        return answers;
    }
    if (condition[0] === '==') {
        const answers = {};
        const page = condition[1].split('.')[2];
        const question = condition[1].split('.')[3];
        answers[page] = {};
        answers[page][question] = {type: condition[0], value: condition[2]};
        return answers;
    }
    // handle any unsimplified roles
    const answers = {};
    answers[condition] = 'role';
    return answers;
}

function expandConditionExpression(condition, roles, expandComplexRoles) {
    if (condition[0] === 'or') {
        const conditionValues = condition.slice(1);
        const expandedExpression = conditionValues.map(subCondition => {
            return expandConditionExpression(subCondition, roles, expandComplexRoles);
        });
        return {or: expandedExpression};
    }
    if (condition[0] === 'and') {
        const answers = {};
        const conditionValues = condition.slice(1);
        return conditionValues.reduce((answer, subCondition) => {
            return {
                ...answer,
                ...expandConditionExpression(subCondition, roles, expandComplexRoles)
            };
        }, answers);
    }
    if (condition[0] === '|role.all') {
        const conditionValues = condition.slice(1);
        const replacedRoles = conditionValues.map(role => {
            if (roles[role].complex === true && expandComplexRoles === false) {
                return role;
            }
            return roles[role].roleCondition;
        });
        replacedRoles.unshift('and');
        return expandConditionExpression(replacedRoles, roles, expandComplexRoles);
    }
    return setSimpleCondition(condition);
}

function splitOrExpressions(expression) {
    // given a condition expanded using expandConditionExpression, remove all or conditions and split up their constituent parts into distinct objects
    if (expression.or === undefined) {
        return expression;
    }
    const noOrExpression = {...expression};
    delete noOrExpression.or;
    return expression.or.map(subcondition => {
        return splitOrExpressions({...noOrExpression, ...subcondition});
    });
}

function collateNotEqualToConditions(preconditions, template) {
    // use template to get all possible values to a question. then remove any referenced by the != question leaving an array of allowed values
    const newPreconditions = [];
    console.log(template);
    preconditions.forEach(precondition => {
        const newPrecondition = {};
        Object.keys(precondition).forEach(page => {
            if (page.includes('!=')) {
                const pageId = page.split('!=')[0];
                const questionId = page.split('!=')[1];
                const value = page.split('!=')[2];
                if (newPrecondition[pageId] === undefined) {
                    newPrecondition[pageId] = {};
                }
                if (newPrecondition[pageId][questionId] === undefined) {
                    const allValues = template.sections[pageId]?.schema?.properties?.[
                        questionId
                    ].oneOf.map(answer => answer.const);
                    allValues.splice(allValues.indexOf(value), 1);
                    newPrecondition[pageId][questionId] = {type: '!=', value: allValues};
                } else {
                    newPrecondition[pageId][questionId].value.splice(
                        newPrecondition[pageId][questionId].value.indexOf(value),
                        1
                    );
                }
            } else {
                newPrecondition[page] = precondition[page];
            }
        });
        newPreconditions.push(newPrecondition);
    });
    return newPreconditions;
}

function getSectionPreconditions(section, template, roles) {
    if (template.routes.states[section].type === 'final') {
        // final states lead to no other states
        return [];
    }
    // First get all the conditional routes
    const conditionalRoutes = template.routes.states[section].on.ANSWER.filter(
        route => route.cond
    ).map(route => route.cond);
    if (conditionalRoutes.length < 1) {
        // if a page has no conditional routing it will always be traversable
        return [];
    }

    // Then expand the conditional routes, splitting up any ANDs/ORs and replacing roles that rely on just ANDs and single values
    const expandedPreconditions = conditionalRoutes
        .map(condition => splitOrExpressions(expandConditionExpression(condition, roles, false)))
        .flat(Infinity);
    // Then replace more complex roles (that use ORs) with their true values
    const expandedRoles = expandedPreconditions.map(precondition => {
        let newCondition = {};
        Object.keys(precondition).forEach(subCondition => {
            if (precondition[subCondition] === 'role') {
                const roleCondition = expandConditionExpression(
                    roles[subCondition].roleCondition,
                    roles,
                    true
                );
                newCondition = {...newCondition, ...roleCondition};
            } else {
                newCondition[subCondition] = precondition[subCondition];
            }
        });
        if (newCondition.or) {
            // TODO: if there are issues in more complex or scenarios they are likely caused by either this if statement or the splitOrExpressionsFunction
            // For some reason if the complex role is expanded above splitOrExpressions returns an array that is one too deep, hence the if statement
            // This is likely to do with needing the flat(infinity) earlier
            return splitOrExpressions(newCondition);
        }
        return [newCondition];
    });

    // Then replace any != conditions with a list of allowed values (this makes satisfaction checking easier)
    const cleanedPreconditions = expandedRoles.map(precondition =>
        collateNotEqualToConditions(precondition, template)
    );

    // Then, if there are no default routes, create an inverse of all other routes to signify an illegal route
    if (conditionalRoutes.length === template.routes.states[section].on.ANSWER.length) {
        // TODO: this is a nice to have that goes beyond what our current BDD can do anyway
        // it would tell us if it is possible to get stuck on a page (i.e. tell us undocumented behaviour)
        return cleanedPreconditions;
    }

    // Returns an array of arrays of answers objects where each object corresponds to a different route off the page, where multiple answers objects in the same array signify an OR
    // i.e. [[pc1],[pc2.1, pc2.2], [pc3]]
    return cleanedPreconditions;
}

function checkSatisfiability(section, template, precondition, targetSection, roles) {
    // needs to return the modified precondition if part of it has been shown to work, false if it has failed and the precondition otherwise
    const newPrecondition = {...precondition};
    const conditionalRoutes = template.routes.states[section].on.ANSWER.filter(route => route.cond);

    if (conditionalRoutes.length < 1) {
        // if there are no conditional routes, you can always get to the target regardless of the value of that question
        delete newPrecondition[section];
        return newPrecondition;
    }

    const targetConditionIndex = conditionalRoutes
        .map(route => route.target)
        .indexOf(targetSection);

    const routeToTarget = conditionalRoutes[targetConditionIndex];

    // going from top to bottom until you hit the target in the conditions, if a precondition matches but goes to a different page then it is invalid
    const firstRoutes = conditionalRoutes.filter(
        route => conditionalRoutes.indexOf(route) < targetConditionIndex
    );
    if (firstRoutes.length > 0) {
        if (firstRoutes.some(route => satisfies(newPrecondition, route, roles) === 'full')) {
            return false;
        }
    }

    // after this will need changing once the roles stuff has changed - maybe just have a flag for full expansion in the expand function
    const splitRoutesToTarget = collateNotEqualToConditions(
        [splitOrExpressions(expandConditionExpression(routeToTarget.cond, roles, true))].flat(
            Infinity
        ),
        template
    );
    // the above is now a list of 'answers' objects.

    const satisfiedRoutesToTarget = splitRoutesToTarget.map(route =>
        satisfies(newPrecondition, route)
    );

    if (satisfiedRoutesToTarget.some(satisfaction => satisfaction === 'full')) {
        // if all answers referenced in the route are present in the precondition and they satisfy it is valid (this is an early exit. technically it is unknown but as we assume all previous pages are valid we can assume this one is valid too)
        return {};
    }
    if (satisfiedRoutesToTarget.every(satisfaction => satisfaction === 'none')) {
        // if there is a direct conflict between route and precondition it is invalid(i.e. assuming all sections not in the precondition evaluate as the route requires, given the precondition the route evaluates to false)
        return false;
    }
    // then if the precondition only references this page and it hasn't already been marked as satisfied then it is valid
    // TODO: can early exit here by deleting all answers mentioned in the route from the precondition, rather than just the page we are on
    delete newPrecondition[section];
    return newPrecondition;
}

function checkValid(targetSection, template, precondition, roles) {
    // TODO: if we hit the start of the application but still have preconditions then is something wrong or is it invalid? not sure but probably something wrong
    const previousSections = getPreviousSections(targetSection, template);
    const valid = previousSections.some(section => {
        const satisfiability = checkSatisfiability(
            section,
            template,
            precondition,
            targetSection,
            roles
        );
        if (satisfiability === false) {
            return false;
        }
        if (Object.keys(satisfiability).length === 0) {
            return true;
        }
        return checkValid(section, template, satisfiability, roles);
    });
    return valid;
    // We could make this non-recursive using a queue/stack and then that might make identifying errors easier
    // Although would it? my initial thought was it might make it easier to see at which particular point the route breaks, but
    // given there are multiple different routes for a precondition this might not help much
}

function ensureAllConditionsAreSatisfiable(template) {
    const roles = getAllRoleDefinitions(template);
    const result = Object.keys(template.routes.states).every(section => {
        const preconditionsWithOrs = getSectionPreconditions(section, template, roles).map(
            // delete any conditions that only depend on the page they lead off from
            condition => {
                return condition.filter(subCondition =>
                    Object.keys(subCondition).every(
                        conditionSection => conditionSection !== section
                    )
                );
            }
        );
        if (preconditionsWithOrs.length < 1) {
            return true;
        }
        // TODO: improve how this reports a failed/successful test
        const results = preconditionsWithOrs.map(preconditions => {
            if (preconditions.length < 1) {
                return true;
            }
            return preconditions.some(precondition =>
                checkValid(section, template, precondition, roles)
            );
        });
        const unsatisfiedPreconditions = [];
        results.forEach(precondition => {
            if (precondition === false) {
                unsatisfiedPreconditions.push(preconditionsWithOrs[results.indexOf(precondition)]);
            }
        });
        if (unsatisfiedPreconditions.length > 0) {
            throw new Error(
                `Unsatisfiable route on /sections/${section}: \n ${JSON.stringify(
                    unsatisfiedPreconditions,
                    null,
                    2
                )}`
            );
        }
        return true;
    });
    return result;
}

// might need to reconsider ors, specifically for roles. for roles some of them probably are unreachable so we may need to do the ors as a proper or
// for the preconditions this is likely the case. for the routes i think it works fine as is because we do a some not an every
// we can potentially do this by doing the preconditions a bit differently and managing the ors at that high level? Specifically, ors within a
// precondition are fine - these should all be satisfiable. But the ors within roles may not be
// may need to rejig ordering of deconstruction - do roles last so that we can keep them grouped
// first split ands and ors and any roles that don't have an or as we are currently
// then replace remaining roles with conditions
// then replace as before but keep the ors in an array or something
// then when looping over preconditions we can do a some for the ones with ors in
// this would also make error reporting clearer (maybe?)

// const template = {
//     sections: {
//         'p-applicant-infections': {
//             schema: {
//                 $schema: 'http://json-schema.org/draft-07/schema#',
//                 type: 'object',
//                 required: ['q-applicant-infections'],
//                 additionalProperties: false,
//                 properties: {
//                     'q-applicant-infections': {
//                         type: 'string',
//                         title: 'l10nt:q-applicant-infections.title{?lng,context,ns}',
//                         oneOf: [
//                             {
//                                 title: 'Yes',
//                                 const: 'yes'
//                             },
//                             {
//                                 title: 'No',
//                                 const: 'no'
//                             },
//                             {
//                                 title: "I'm not sure",
//                                 const: 'not-sure'
//                             }
//                         ],
//                         meta: {
//                             classifications: {
//                                 theme: 'injuries'
//                             },
//                             summary: {
//                                 title:
//                                     'l10nt:q-applicant-infections.meta.summary.title{?lng,context,ns}'
//                             }
//                         }
//                     }
//                 },
//                 errorMessage: {
//                     required: {
//                         'q-applicant-infections':
//                             'l10nt:q-applicant-infections.error.required{?lng,context,ns}'
//                     }
//                 },
//                 examples: [
//                     {
//                         'q-applicant-infections': 'yes'
//                     },
//                     {
//                         'q-applicant-infections': 'no'
//                     }
//                 ],
//                 invalidExamples: [
//                     {
//                         'q-applicant-infections': 'foo'
//                     }
//                 ]
//             }
//         }
//     },
//     routes: {
//         states: {
//             test: {
//                 on: {
//                     ANSWER: [
//                         {
//                             cond: [
//                                 'or',
//                                 [
//                                     'and',
//                                     ['|role.all', 'capable'],
//                                     [
//                                         '==',
//                                         '$.answers.p-applicant-eu-citizen.q-applicant-eu-citizen',
//                                         true
//                                     ]
//                                 ],
//                                 [
//                                     'and',
//                                     ['|role.all', 'capable'],
//                                     [
//                                         '==',
//                                         '$.answers.p-applicant-eu-citizen.q-applicant-eu-citizen',
//                                         false
//                                     ]
//                                 ],
//                                 [
//                                     '==',
//                                     '$.answers.p-applicant-eu-citizen.q-applicant-eu-test',
//                                     false
//                                 ]
//                             ]
//                         }
//                     ]
//                 }
//             }
//         }
//     },
//     attributes: {
//         q__roles: {
//             proxy: {
//                 schema: {
//                     $schema: 'http://json-schema.org/draft-07/schema#',
//                     title: 'A type of proxy for the applicant e.g. mainapplicant, rep',
//                     type: 'boolean',
//                     // prettier-ignore
//                     const: ['==',
//                 '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
//                 'someone-else'
//             ],
//                     examples: [{}],
//                     invalidExamples: [{}]
//                 }
//             },
//             myself: {
//                 schema: {
//                     $schema: 'http://json-schema.org/draft-07/schema#',
//                     title: 'Myself journey role',
//                     type: 'boolean',
//                     // prettier-ignore
//                     const: ['==',
//                 '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
//                 'myself'
//             ],
//                     examples: [{}],
//                     invalidExamples: [{}]
//                 }
//             },
//             child: {
//                 schema: {
//                     $schema: 'http://json-schema.org/draft-07/schema#',
//                     title: 'Child applicant role',
//                     type: 'boolean',
//                     // prettier-ignore
//                     const: ['==',
//             '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
//             false
//             ],
//                     examples: [{}],
//                     invalidExamples: [{}]
//                 }
//             },
//             adult: {
//                 schema: {
//                     $schema: 'http://json-schema.org/draft-07/schema#',
//                     title: 'Adult applicant role',
//                     type: 'boolean',
//                     // prettier-ignore
//                     const: ['==',
//             '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
//             true
//             ],
//                     examples: [{}],
//                     invalidExamples: [{}]
//                 }
//             },
//             mainapplicant: {
//                 schema: {
//                     $schema: 'http://json-schema.org/draft-07/schema#',
//                     title: 'Main Applicant role',
//                     type: 'boolean',
//                     // prettier-ignore
//                     const: ['or',
//                 ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', true],
//                 ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', true]
//             ],
//                     examples: [{}],
//                     invalidExamples: [{}]
//                 }
//             },
//             rep: {
//                 schema: {
//                     $schema: 'http://json-schema.org/draft-07/schema#',
//                     title: 'Rep role',
//                     type: 'boolean',
//                     // prettier-ignore
//                     const: ['or',
//                 [
//                     'and',
//                     ['==', '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for', 'someone-else'],
//                     ['==', '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over', false],
//                     ['==', '$.answers.p-mainapplicant-parent.q-mainapplicant-parent', false],
//                     ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false]
//                 ],
//                 [
//                     'and',
//                     ['==', '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for', 'someone-else'],
//                     ['==', '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over', true],
//                     ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false],
//                     ['==', '$.answers.p--represents-legal-authority.q--represents-legal-authority', true]
//                 ],
//                 [
//                     'and',
//                     ['==', '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for', 'someone-else'],
//                     ['==', '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over', true],
//                     ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false],
//                     ['==', '$.answers.p--represents-legal-authority.q--represents-legal-authority', false]
//                 ],
//                 [
//                     'and',
//                     ['==', '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for', 'someone-else'],
//                     ['==', '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over', true],
//                     ['==', '$.answers.p-applicant-can-handle-affairs.q-applicant-capable', true]
//                 ]
//             ],
//                     examples: [{}],
//                     invalidExamples: [{}]
//                 }
//             },
//             noauthority: {
//                 schema: {
//                     $schema: 'http://json-schema.org/draft-07/schema#',
//                     title: 'no authority role',
//                     type: 'boolean',
//                     // prettier-ignore
//                     const:
//                 ['and',
//                     ['==', '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over', true],
//                     ['==', '$.answers.p-applicant-can-handle-affairs.q-applicant-capable', false],
//                     ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', false],
//                     ['==', '$.answers.p--represents-legal-authority.q--represents-legal-authority', false]
//                 ],
//                     examples: [{}],
//                     invalidExamples: [{}]
//                 }
//             },
//             incapable: {
//                 schema: {
//                     $schema: 'http://json-schema.org/draft-07/schema#',
//                     title: 'incapable role',
//                     type: 'boolean',
//                     // prettier-ignore
//                     const:  ['==', '$.answers.p-applicant-can-handle-affairs.q-applicant-capable', false],
//                     examples: [{}],
//                     invalidExamples: [{}]
//                 }
//             },
//             capable: {
//                 schema: {
//                     $schema: 'http://json-schema.org/draft-07/schema#',
//                     title: 'capable role',
//                     type: 'boolean',
//                     // prettier-ignore
//                     const: ['or',
//                 ['==', '$.answers.p-applicant-can-handle-affairs.q-applicant-capable', true],
//                 ['==', '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for', 'myself']
//             ],
//                     examples: [{}],
//                     invalidExamples: [{}]
//                 }
//             },
//             authority: {
//                 schema: {
//                     $schema: 'http://json-schema.org/draft-07/schema#',
//                     title: 'Legal authority role',
//                     type: 'boolean',
//                     // prettier-ignore
//                     const: ['or',
//                 ['==', '$.answers.p--has-legal-authority.q--has-legal-authority', true],
//                 ['==', '$.answers.p--represents-legal-authority.q--represents-legal-authority', true]
//             ],
//                     examples: [true, false],
//                     invalidExamples: [{}]
//                 }
//             },
//             deceased: {
//                 schema: {
//                     $schema: 'http://json-schema.org/draft-07/schema#',
//                     title: 'Deceased role',
//                     type: 'boolean',
//                     // prettier-ignore
//                     const: ['==', '$.answers.p-applicant-fatal-claim.q-applicant-fatal-claim', true],
//                     examples: [true, false],
//                     invalidExamples: [{}]
//                 }
//             },
//             nonDeceased: {
//                 schema: {
//                     $schema: 'http://json-schema.org/draft-07/schema#',
//                     title: 'Non Deceased journey role',
//                     type: 'boolean',
//                     // prettier-ignore
//                     const: ['==', '$.answers.p-applicant-fatal-claim.q-applicant-fatal-claim', false],
//                     examples: [true, false],
//                     invalidExamples: [{}]
//                 }
//             },
//             childUnder12: {
//                 schema: {
//                     $schema: 'http://json-schema.org/draft-07/schema#',
//                     title: 'child under the age of 12',
//                     type: 'boolean',
//                     // prettier-ignore
//                     const: [
//                 'dateCompare',
//                 '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
//                 '<', // is less than ...
//                 '-12', // 12 ...
//                 'years' // years (before, due to the negative (-12) ...
//                 // today's date (no second date given. defaults to today's date).
//             ],
//                     examples: [{}],
//                     invalidExamples: [{}]
//                 }
//             },
//             childOver12: {
//                 schema: {
//                     $schema: 'http://json-schema.org/draft-07/schema#',
//                     title: 'child over the age of 12',
//                     type: 'boolean',
//                     // prettier-ignore
//                     const:   [
//                 'dateCompare',
//                 '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth', // this date ...
//                 '>=', // is greater than or equeal too ...
//                 '-12', // 12 ...
//                 'years' // years (before, due to the negative (-12) ...
//                 // today's date (no second date given. defaults to today's date).
//             ],
//                     examples: [{}],
//                     invalidExamples: [{}]
//                 }
//             },
//             noContactMethod: {
//                 schema: {
//                     $schema: 'http://json-schema.org/draft-07/schema#',
//                     title: 'has no email or text contact method',
//                     type: 'boolean',
//                     // prettier-ignore
//                     const: ['or',
//                 ['==', '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method', 'none'],
//                 ['==', '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method', 'none'],
//                 ['==', '$.answers.p-rep-confirmation-method.q-rep-confirmation-method', 'none']
//             ],
//                     examples: [{}],
//                     invalidExamples: [{}]
//                 }
//             }
//         }
//     }
// };
// const roles = getAllRoleDefinitions(template);
// const r = expandConditionExpression(
//     [
//         'or',
//         [
//             'and',
//             ['|role.all', 'capable'],
//             ['==', '$.answers.p-applicant-eu-citizen.q-applicant-eu-citizen', true]
//         ],
//         [
//             'and',
//             ['|role.all', 'capable'],
//             ['==', '$.answers.p-applicant-eu-citizen.q-applicant-eu-citizen', false]
//         ],
//         ['==', '$.answers.p-applicant-eu-citizen.q-applicant-eu-test', false]
//     ],
//     roles,
//     false
// );
// const noOr = splitOrExpressions(r);
// console.log(JSON.stringify(noOr, null, 2));
// const t = getSectionPreconditions('test', template, roles);
// console.log(JSON.stringify(t, null, 2));
module.exports = ensureAllConditionsAreSatisfiable;
