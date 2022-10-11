'use strict';

function isDataReference(element) {
    return typeof element === 'string' && element.startsWith('$.');
}

function getDataRefsFromJsonExpression(jsonExpression) {
    const dataRefs = [];

    jsonExpression.forEach(element => {
        if (isDataReference(element)) {
            dataRefs.push(element);
        }

        if (Array.isArray(element)) {
            dataRefs.push(getDataRefsFromJsonExpression(element));
        }
    });

    return dataRefs.flat();
}

module.exports = getDataRefsFromJsonExpression;
