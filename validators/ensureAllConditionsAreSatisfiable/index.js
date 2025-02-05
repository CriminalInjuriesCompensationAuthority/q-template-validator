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
    // Precondition and route are both objects of the form {page:{question:{type, value}}} with as many pages as desired
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
    // Return all the role definitions from the template, along with a complexity tag stating whether or not they contain an 'or'
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
    // Given a section, return all sections in the template that have a route to it
    // TODO: we may want to add the ability to skip certain sections here, e.g. injury sections or up to a task etc.
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
    // Given a single condition (no and/or/|role.all) convert it to an object that can be compared in the matches function
    // TODO: Currently, all datecompares in the template are based on today's date and time differences of years before now. That is assumed to be the case here.
    // going forwards all this logic should be handled by an equivalent version of q-expressions/JSON-rules that sets instead of evaluating
    if (condition[0] === 'includes') {
        const answers = {};
        const page = condition[1].split('.')[2];
        const question = condition[1].split('.')[3];
        answers[page] = {};
        answers[page][question] = {type: condition[0], value: [condition[2]]};
        return answers;
    }
    if (condition[0] === 'dateCompare') {
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
        // TODO: unimplemented, currently will always validate any questions of this type
        const oldPage = condition[2].split('.')[2];
        const oldQuestion = condition[2].split('.')[3];
        const newPage = condition[1].split('.')[2];
        const newQuestion = condition[1].split('.')[3];
        answers[oldPage] = {};
        answers[oldPage][oldQuestion] = '-2';
        answers[newPage] = {};
        answers[newPage][newQuestion] = '0';
        return answers;
    }
    if (condition[0] === '!=') {
        // != conditions are handled by a separate function to ensure all possible values are caught
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
    // handle any unsimplified complex roles later
    const answers = {};
    answers[condition] = 'role';
    return answers;
}

function expandConditionExpression(condition, roles, expandComplexRoles) {
    // Given a condition expression expand it into answers and their types
    // If expandComplexRoles is set to true it will expand roles that have OR conditions in them (this allows checking all possibilities on earlier page routes)
    // If expandComplexRoles is set to false it will not expand roles that have OR conditions in them (this allows setting up the preconditions properly)
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
    // Given a section of the template, get all the routes off that page and convert them into precondition answers objects that can be compared
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
            // TODO: if the complex role is expanded above splitOrExpressions returns an array that is one deeper than it would otherwise be
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
    // Given a section of the template, a target to route to and some precondition, check whether any route to the target would be satisfied by that precondition
    // If the precondition does not cause the section to route to the target (e.g. a direct contradiction, routing hits a route to a different section instead) return false
    // If evaluating the precondition to true guarantees routing to the target return an empty object
    // If evaluating the precondition to true routes to the target given some other evaluation, return the precondition with any references to this section removed
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

    if (targetConditionIndex === -1) {
        // if the route to the target is the default route, ensure all other routes are not satisfied by the precondition
        if (conditionalRoutes.some(route => satisfies(newPrecondition, route, roles) === 'full')) {
            return false;
        }
        return true;
    }

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

    // Convert the route to the target to the same form as the precondition to make checking satisfiability easier
    // This returns an array as there may be multiple routes to the target (in the form of OR conditions)
    const splitRoutesToTarget = collateNotEqualToConditions(
        [splitOrExpressions(expandConditionExpression(routeToTarget.cond, roles, true))].flat(
            Infinity
        ),
        template
    );

    const satisfiedRoutesToTarget = splitRoutesToTarget.map(route =>
        satisfies(newPrecondition, route)
    );

    if (satisfiedRoutesToTarget.some(satisfaction => satisfaction === 'full')) {
        // if all answers referenced in the route are present in the precondition and they satisfy it is valid (this is an early exit. technically it is unknown but as we assume all previous pages are valid we can assume this one is valid too)
        return {};
    }
    if (satisfiedRoutesToTarget.every(satisfaction => satisfaction === 'none')) {
        // if there is a direct conflict between route and precondition it is invalid (i.e. assuming all sections not in the precondition evaluate as the route requires, given the precondition the route evaluates to false)
        return false;
    }
    // then if the precondition only references this page and it hasn't already been marked as satisfied then it is valid
    // TODO: can early exit here by deleting all answers mentioned in the route from the precondition, rather than just the page we are on
    delete newPrecondition[section];
    return newPrecondition;
}

function checkValid(targetSection, template, precondition, roles) {
    // Given a section to route to and a precondition assumed true, recursively move backwards through the application
    // Keep recursing until either:
    // the precondition has been shown to not route to the target via all possible routes
    // or all subconditions of the precondition have been shown to be satisfiable

    // TODO: if we hit the start of the application but still have preconditions then something has gone wrong
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
    // TODO: could make this non-recursive using a queue/stack and then that might make identifying errors easier
}

function ensureAllConditionsAreSatisfiable(template) {
    // Loop through all sections in the template and check all the routes that go from each section are satisfiable
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
            // If there are no preconditions they are always satisfiable
            return true;
        }
        // TODO: improve how this reports a failed/successful test
        const results = preconditionsWithOrs.map(preconditions => {
            // If a precondition contains an OR not in a role that is split into distinct preconditions because we want both options to be satisfiable
            // However, if the OR is within a role there are scenarios (e.g. the rep role) in which the distinct blocks within the OR are contradictions of each other
            // Because of this, each precondition is an array of objects (most of which end up being of length 1) only one of which needs to be satisfiable
            if (preconditions.length < 1) {
                // If there are no preconditions they are always satisfiable
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

module.exports = ensureAllConditionsAreSatisfiable;
