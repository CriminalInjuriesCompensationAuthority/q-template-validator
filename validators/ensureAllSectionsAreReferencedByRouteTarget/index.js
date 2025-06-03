'use strict';

function getAllStateTargetIds(state) {
    const targets = state?.on?.ANSWER || [];
    const targetIds = targets.map(targetDefinition => targetDefinition.target);

    return targetIds;
}

function getAllTargetIds(template) {
    const {initial} = template.routes;
    let states;
    if (template.routes.type === 'parallel') {
        states = Object.keys(template.routes.states).reduce((acc, task) => {
            if (task.includes('__')) {
                // skip the applicability and completion status tasks
                return acc;
            }
            return Object.assign(acc, template.routes.states[task].states);
        }, {});
    } else {
        states = template.routes.states;
    }
    const allTargetIds = [initial];

    Object.values(states).forEach(state => {
        const targetIds = getAllStateTargetIds(state);

        allTargetIds.push(...targetIds);
    });

    return allTargetIds;
}

function getAllInitialSectionIds(template) {
    if (template.routes.type === 'parallel') {
        const initialStates = [];
        Object.keys(template.routes.states).forEach(task => {
            if (task.includes('__')) {
                // skip the applicability and completion status tasks
                return;
            }
            initialStates.push(template.routes.states[task].initial);
        });
        return initialStates;
    }
    return [template.routes.initial];
}

function ensureAllSectionsAreReferencedByRouteTarget({template, sectionIdIgnoreList = []}) {
    const {sections} = template;
    const sectionIds = new Set(Object.keys(sections));
    const targetIds = new Set(getAllTargetIds(template));
    const initialSectionIds = new Set(getAllInitialSectionIds(template));
    const untargetedSectionIds = sectionIds.difference(targetIds.union(initialSectionIds));
    const errors = [];

    untargetedSectionIds.forEach(untargetedSectionId => {
        if (sectionIdIgnoreList.includes(untargetedSectionId)) {
            return;
        }

        errors.push({
            type: 'UntargetedSection',
            source: `/sections/${untargetedSectionId}`,
            description: `Section '/sections/${untargetedSectionId}' is not targeted by any route`
        });
    });

    if (errors.length > 0) {
        return errors;
    }

    return true;
}

module.exports = ensureAllSectionsAreReferencedByRouteTarget;
