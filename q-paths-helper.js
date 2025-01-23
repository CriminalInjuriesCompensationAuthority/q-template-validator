'use strict';

const defaults = {_: {}};
defaults.createQuestionnaireRouter = require('q-router');

function createQuestionnairePathsHelper({
    createQuestionnaireRouter = defaults.createQuestionnaireRouter,
    ignoreStates = ['system', 'owner']
} = {}) {
    function isUsedForRouting(sectionId, states) {
        let isRoutingQuestion = false;

        // loop through states
        Object.keys(states).forEach(state => {
            const sectionRoutes = states[state];

            // If there is an "on" attribute there may be conditions
            if ('on' in sectionRoutes) {
                const targets = sectionRoutes.on.ANSWER;

                // If the target is an array it might contain conditions
                if (Array.isArray(targets)) {
                    const cascade = targets.some(target => {
                        if ('cond' in target) {
                            // Do any of the conditions reference the sectionId
                            return target.cond.some(element =>
                                String(element).includes(`.${sectionId}.`)
                            );
                        }

                        return false;
                    });

                    if (cascade) {
                        // If startIndex and i are equal, this is a section that relies on its own answer(s)
                        // for routing. Don't remove it from the progress, but everything after it (i + 1).
                        // return startIndex === i ? i + 1 : i;

                        isRoutingQuestion = true;
                    }
                }
            }
        });

        return isRoutingQuestion;
    }

    function getAllTargets(state) {
        const targets = state?.on?.ANSWER || [];
        const targetIds = targets.map(targetDefinition => targetDefinition.target);

        return new Set(targetIds);
    }

    function createStateTracker(template) {
        const {initial, states} = template.routes;
        const stateTargetIds = new Map();
        const allTargetIds = new Set([initial]);

        Object.keys(states).forEach(stateId => {
            const state = states[stateId];
            const targetIds = getAllTargets(state);

            stateTargetIds.set(stateId, targetIds);
            targetIds.forEach(targetId => allTargetIds.add(targetId));
        });

        return {
            stateTargetIds,
            allTargetIds
        };
    }

    function getValidExamples(stateId, template) {
        const validExamples = template?.sections?.[stateId]?.examples;
        const containsRoutingQuestion = isUsedForRouting(stateId, template.routes.states);

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

    function traverseAllPaths({
        template,
        stateId = template.routes.initial,
        router = createQuestionnaireRouter(template),
        paths = new Set(),
        stateTracker = createStateTracker(template)
    } = {}) {
        const state = template.routes.states[stateId];

        // Reached the end of a journey, save path
        if (state.type && state.type === 'final') {
            paths.add(router.current().context.progress.join(','));

            return null;
        }

        const validExamples = getValidExamples(stateId, template);

        for (let j = 0; j < validExamples.length; j += 1) {
            const next = router.next(validExamples[j], stateId);

            if (stateTracker) {
                stateTracker.stateTargetIds.get(stateId).delete(next.id);
            }

            traverseAllPaths({
                template,
                stateId: next.id,
                router,
                paths,
                stateTracker
            });
        }

        return {
            paths: Array.from(paths),
            state: stateTracker
        };
    }

    function getUnvisitedPaths(template, traversalState) {
        const {states} = template.routes;

        return Object.keys(states).reduce((acc, stateId) => {
            if (ignoreStates.includes(stateId)) {
                return acc;
            }

            if (traversalState.allTargetIds.has(stateId) === false) {
                acc.push(`?,${stateId}`);

                return acc;
            }

            traversalState.stateTargetIds.get(stateId).forEach(targetId => {
                acc.push(`${stateId},${targetId}`);
            });

            return acc;
        }, []);
    }

    function getPaths(template) {
        const templateCopy = JSON.parse(JSON.stringify(template));
        const traversed = traverseAllPaths({template: templateCopy});
        const unvisitedPaths = getUnvisitedPaths(templateCopy, traversed.state);

        return {
            visited: traversed.paths,
            unvisited: unvisitedPaths
        };
    }

    return Object.freeze({
        getPaths
    });
}

module.exports = createQuestionnairePathsHelper;
