'use strict';

const defaults = {};

defaults.getObjectValueByPath = require('lodash.get');
defaults.createQuestionnaireRouter = require('q-router');

function createQuestionnairePathsHelper({
    template,
    ignoreStates = ['system'],
    getObjectValueByPath = defaults.getObjectValueByPath,
    createQuestionnaireRouter = defaults.createQuestionnaireRouter
} = {}) {
    const router = createQuestionnaireRouter(template);
    const localTemplate = router.current().context;
    const {sections, routes} = localTemplate;
    const {initial: initialId, states} = routes;

    function getRoutingQuestionIds() {
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

    const routingQuestionIds = getRoutingQuestionIds();

    function getAllTargetIds() {
        const targetIds = [];

        // loop through states
        Object.keys(states).forEach(stateId => {
            const state = states[stateId];
            const stateTargets = getObjectValueByPath(state, 'on.ANSWER') || [];
            const stateTargetIds = stateTargets.map(targetDefinition => targetDefinition.target);

            targetIds.push(...stateTargetIds);
        });

        return new Set(targetIds);
    }

    function getValidExamples(stateId) {
        const validExamples = sections && sections[stateId] && sections[stateId].examples;
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

    function traversePaths({currentSection, paths} = {}) {
        const {id, context: questionnaire} = currentSection;
        const currentSectionDefinition = questionnaire.routes.states[id];

        if (currentSectionDefinition.type === 'final') {
            paths.push(questionnaire.progress.join(','));
            return {paths, targetsStillToVisit: false};
        }

        const examples = getValidExamples(id);

        for (let i = 0; i < examples.length; i += 1) {
            const nextSection = router.next(examples[i], id);

            if (nextSection.meta.fromTransition === true) {
                const successfulTransitionDefinition =
                    nextSection.meta.transitionDefinition.value[
                        nextSection.meta.transitionDefinition.index
                    ];

                successfulTransitionDefinition.triggered = true;

                const traversalResult = traversePaths({
                    currentSection: nextSection,
                    paths
                });

                if (traversalResult.targetsStillToVisit === false) {
                    // don't do this transition again. All its upstream targets have been triggered.
                    // eslint-disable-next-line no-underscore-dangle
                    successfulTransitionDefinition._skip = true;

                    const allTargetsVisited = currentSectionDefinition.on.ANSWER.every(
                        // eslint-disable-next-line no-underscore-dangle
                        transitionInstance => transitionInstance._skip === true
                    );

                    if (allTargetsVisited) {
                        currentSectionDefinition.type = 'final';
                        return {paths, targetsStillToVisit: false};
                    }
                }
            }
        }

        return {paths};
    }

    function getUnvisitedPaths() {
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

    function getPaths() {
        const traversed = traversePaths({
            currentSection: router.current(),
            paths: []
        });

        return {
            visited: traversed.paths,
            unvisited: getUnvisitedPaths()
        };
    }

    return Object.freeze({
        getPaths
    });
}

module.exports = createQuestionnairePathsHelper;
