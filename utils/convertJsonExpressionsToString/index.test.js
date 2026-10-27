'use strict';

const assert = require('node:assert/strict');
const {describe, it} = require('node:test');

const convertJsonExpressionsToString = require('./index');

describe('convertJsonExpressionsToString', () => {
    it('should replace all JSON expressions with a string', () => {
        const schema = {
            title: ['|role.any', 'foo', 'bar'],
            some: {
                nested: {
                    key: ['|role.all', 'biz', 'baz'],
                    plainArray: ['foo', 'bar', 'baz'],
                },
            },
        };

        const result = convertJsonExpressionsToString(schema);

        assert.deepStrictEqual(result, {
            title: '<<JSON Expression>>',
            some: {
                nested: {
                    key: '<<JSON Expression>>',
                    plainArray: ['foo', 'bar', 'baz'],
                },
            },
        });
    });
});
