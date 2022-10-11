'use strict';

const getDataRefsFromJsonExpression = require('./index');

describe('getDataRefsFromJsonExpression', () => {
    it('should return an empty array when no refs exist', () => {
        const jsonExpression = ['==', 1, 2];
        const dataRefs = getDataRefsFromJsonExpression(jsonExpression);

        expect(dataRefs).toEqual([]);
    });

    it('should return ref(s) for a flat expression', () => {
        const jsonExpression = ['==', '$.some.ref', 1, 'foo', '$.some.other.ref', null];
        const dataRefs = getDataRefsFromJsonExpression(jsonExpression);

        expect(dataRefs).toEqual(['$.some.ref', '$.some.other.ref']);
    });

    it('should return ref(s) for nested expressions', () => {
        const jsonExpression = [
            'and',
            ['==', '$.some.refA', 1, 'foo', '$.some.refB', null],
            [
                'or',
                ['==', '$.some.refC', 1, 'foo', '$.some.refD', null],
                ['==', '$.some.refE', ['==', '$.some.refF', 1, 'foo', '$.some.refG', null]]
            ]
        ];
        const dataRefs = getDataRefsFromJsonExpression(jsonExpression);

        expect(dataRefs).toEqual([
            '$.some.refA',
            '$.some.refB',
            '$.some.refC',
            '$.some.refD',
            '$.some.refE',
            '$.some.refF',
            '$.some.refG'
        ]);
    });
});
