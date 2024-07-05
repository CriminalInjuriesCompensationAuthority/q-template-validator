'use strict';

/*

const foo = [
    "a",
    "b",
    "c"
];
const bar = [
    "a",
    "d",
    "e"
];

const output = findDuplicates([foo, bar]);

console.log(output);
  // [ 'a' ]

*/

function findDuplicates(objects) {
    const valueCount = new Map();

    objects.forEach(subArray => {
        subArray.forEach(value => {
            if (valueCount.has(value)) {
                valueCount.set(value, valueCount.get(value) + 1);
            } else {
                valueCount.set(value, 1);
            }
        });
    });
    /* eslint-disable no-unused-vars */
    return [...valueCount.entries()].filter(([key, count]) => count > 1).map(([key, count]) => key);
}

module.exports = findDuplicates;
