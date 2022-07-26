'use strict';

function isJsonExpression(value) {
    return value && Array.isArray(value) && typeof value[0] === 'string' && value[0][0] === '|';
}

function isPlainObjectOrArray(value) {
    return value && typeof value === 'object' && isJsonExpression(value) === false;
}

function mutateObjectValues(value, valueTransformers, key) {
    if (isPlainObjectOrArray(value)) {
        Object.entries(value).forEach(([k, v]) => {
            // eslint-disable-next-line no-param-reassign
            value[k] = mutateObjectValues(v, valueTransformers, k);
        });

        return value;
    }

    const mutatedValue = valueTransformers.reduce((acc, transformValue) => {
        return transformValue(key, acc);
    }, value);

    return mutatedValue;
}

function convertJsonExpressionsToString(sectionSchema) {
    return mutateObjectValues(sectionSchema, [
        (key, value) => {
            if (isJsonExpression(value)) {
                return '<<JSON Expression>>';
            }

            return value;
        }
    ]);
}

module.exports = convertJsonExpressionsToString;
