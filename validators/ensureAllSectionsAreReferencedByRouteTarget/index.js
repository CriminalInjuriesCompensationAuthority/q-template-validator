'use strict';

function getAllStateTargetIds(state) {
    const targets = state?.on?.ANSWER || [];
    const targetIds = targets.map(targetDefinition => targetDefinition.target);

    return targetIds;
}

function getAllTargetIds(template) {
    const {initial, states} = template.routes;
    const allTargetIds = [initial];

    Object.values(states).forEach(state => {
        const targetIds = getAllStateTargetIds(state);

        allTargetIds.push(...targetIds);
    });

    return allTargetIds;
}

function ensureAllSectionsAreReferencedByRouteTarget({template, sectionIdIgnoreList = []}) {
    const {sections} = template;
    const sectionIds = new Set(Object.keys(sections));
    const targetIds = new Set(getAllTargetIds(template));
    const untargetedSectionIds = sectionIds.difference(targetIds);
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
