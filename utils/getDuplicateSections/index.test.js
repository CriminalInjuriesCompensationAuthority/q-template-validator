'use strict';

const getDupicateSections = require('./index');

describe('getDuplicateSections', () => {
    describe('Given sections from multiple tasks', () => {
        it('should return any sectionIds that appear in multiple tasks', () => {
            const sections = [
                ['a', 'b', 'c'],
                ['c', 'd', 'e'],
                ['f', 'g', 'h'],
                ['i', 'j', 'k'],
                ['k', 'l']
            ];

            const actual = getDupicateSections(sections);

            expect(actual).toEqual(['c', 'k']);
        });
        it('should return an empty array if there are no duplicate sectionIds', () => {
            const sections = [
                ['a', 'b', 'c'],
                ['d', 'e', 'f'],
                ['g', 'h', 'i'],
                ['j', 'k', 'l'],
                ['m', 'n']
            ];

            const actual = getDupicateSections(sections);

            expect(actual).toEqual([]);
        });
    });
});
