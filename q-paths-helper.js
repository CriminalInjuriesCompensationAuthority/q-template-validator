'use strict';

const defaults = {_: {}};
defaults._.has = require('lodash.has');
defaults._.get = require('lodash.get');
defaults.createQuestionnaireRouter = require('q-router');

function createQuestionnairePathsHelper({
    _ = defaults._,
    createQuestionnaireRouter = defaults.createQuestionnaireRouter,
    ignoreStates = ['system']
} = {}) {
    function getRoutingQuestionIds(states) {
        const routingQuestionIds = new Set();
        const statesString = JSON.stringify(states);

        // loop through states
        Object.keys(states).forEach(stateId => {
            if (statesString.includes(`.${stateId}.`)) {
                routingQuestionIds.add(stateId);
            }
        });

        return routingQuestionIds;
    }

    function getAllTargetIds(states) {
        const targetIds = [];

        // loop through states
        Object.keys(states).forEach(stateId => {
            const state = states[stateId];
            const stateTargets = _.get(state, 'on.ANSWER') || [];
            const stateTargetIds = stateTargets.map(targetDefinition => targetDefinition.target);

            targetIds.push(...stateTargetIds);
        });

        return new Set(targetIds);
    }

    function getValidExamples(stateId, template, routingQuestionIds) {
        const validExamples =
            template.sections && template.sections[stateId] && template.sections[stateId].examples;
        const containsRoutingQuestion = routingQuestionIds.has(stateId);

        if (Array.isArray(validExamples) && validExamples.length > 0) {
            return containsRoutingQuestion ? validExamples : [validExamples[0]];
        }

        if (containsRoutingQuestion) {
            throw Error(
                `Section "${stateId}" contains a routing question, however the section contains no "examples" to trigger the routing rules`
            );
        }

        return [];
    }

    function traversePaths(router, currentState, paths, routingQuestionIds) {
        const {id, context: questionnaire} = currentState;
        const currentStateDefinition = questionnaire.routes.states[id];

        // if this is a final state, then our work is done, record the journey
        if (currentStateDefinition.type === 'final') {
            paths.push(questionnaire.progress.join(','));
            return {paths, unvisitedTargets: false};
        }

        const examples = getValidExamples(id, questionnaire, routingQuestionIds);

        // lets see if we can trigger any remaining targets
        for (let i = 0; i < examples.length; i += 1) {
            const next = router.next(examples[i], id);
            const nextMeta = next.meta;
            const nextFromTransition = nextMeta.fromTransition;
            let result;

            if (nextFromTransition === true) {
                const nextTransitionDefinition = nextMeta.transitionDefinition;
                const transition = nextTransitionDefinition.value[nextTransitionDefinition.index];
                transition.triggered = true;

                result = traversePaths(router, next, paths, routingQuestionIds);

                if (result.unvisitedTargets === false) {
                    // don't do this transition again all upstream targets have been triggered
                    // eslint-disable-next-line no-underscore-dangle
                    transition._skip = true;

                    if (
                        currentStateDefinition.on.ANSWER.every(
                            // eslint-disable-next-line no-underscore-dangle
                            transitionInstance => transitionInstance._skip === true
                        )
                    ) {
                        currentStateDefinition.type = 'final';
                        return {paths, unvisitedTargets: false};
                    }
                }
            }
        }

        return {paths};
    }

    function getUnvisitedPaths(routes) {
        const {states} = routes;
        const initialId = routes.initial;
        const targetIds = getAllTargetIds(states);

        return Object.keys(states).reduce((acc, stateId) => {
            if (ignoreStates.includes(stateId)) {
                return acc;
            }

            const state = states[stateId];

            if (targetIds.has(stateId) === false && stateId !== initialId) {
                acc.push(`?,${stateId}`);
            }

            if (state.type === 'final') {
                return acc;
            }

            const targets = state.on.ANSWER;

            for (let i = 0; i < targets.length; i += 1) {
                const target = targets[i];

                if (target.triggered !== true) {
                    acc.push(`${stateId},${target.target}`);
                }
            }

            return acc;
        }, []);
    }

    function getPaths(template) {
        const router = createQuestionnaireRouter(template);
        const routingQuestionIds = getRoutingQuestionIds(router.current().context.routes.states);
        const traversed = traversePaths(router, router.current(), [], routingQuestionIds);

        return {
            visited: traversed.paths,
            unvisited: getUnvisitedPaths(router.current().context.routes)
        };
    }

    return Object.freeze({
        getPaths
    });
}

module.exports = createQuestionnairePathsHelper;
