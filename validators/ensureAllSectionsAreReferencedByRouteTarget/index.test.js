'use strict';

const assert = require('node:assert/strict');
const {describe, it} = require('node:test');
const {isDeepStrictEqual} = require('node:util');

const ensureAllSectionsAreTargetedByRouteTarget = require('./index');

function assertContainsDeep(actual, expected) {
    assert.ok(Array.isArray(actual), 'Expected an array');

    expected.forEach((expectedItem) => {
        assert.ok(
            actual.some((actualItem) => isDeepStrictEqual(actualItem, expectedItem)),
            `Expected array to contain ${JSON.stringify(expectedItem)}`,
        );
    });
}

describe('ensureAllSectionsAreTargetedByRouteTarget', () => {
    describe('questionnaire', () => {
        it('should return true if all sections are targeted by at least one route target', () => {
            const validTemplate = {
                sections: {
                    foo: {},
                    bar: {},
                    baz: {},
                    biz: {},
                },
                routes: {
                    initial: 'foo',
                    states: {
                        foo: {
                            on: {
                                ANSWER: [{target: 'bar'}],
                            },
                        },
                        bar: {
                            on: {
                                ANSWER: [{target: 'baz'}],
                            },
                        },
                        baz: {
                            on: {
                                ANSWER: [{target: 'biz'}],
                            },
                        },
                        biz: {
                            type: 'final',
                        },
                    },
                },
            };

            assert.strictEqual(
                ensureAllSectionsAreTargetedByRouteTarget({template: validTemplate}),
                true,
            );
        });

        it('should return an error for each section that is not targeted by any routes', () => {
            const invalidTemplate = {
                sections: {
                    foo: {},
                    bar: {},
                    baz: {},
                    biz: {},
                },
                routes: {
                    initial: 'bar',
                    states: {
                        bar: {
                            on: {
                                ANSWER: [{target: 'biz'}],
                            },
                        },
                        biz: {
                            type: 'final',
                        },
                    },
                },
            };

            const errors = ensureAllSectionsAreTargetedByRouteTarget({
                template: invalidTemplate,
            });

            const expectedErrors = [
                {
                    type: 'UntargetedSection',
                    source: '/sections/foo',
                    description: `Section '/sections/foo' is not targeted by any route`,
                },
                {
                    type: 'UntargetedSection',
                    source: '/sections/baz',
                    description: `Section '/sections/baz' is not targeted by any route`,
                },
            ];

            assertContainsDeep(errors, expectedErrors);
            assert.strictEqual(errors.length, expectedErrors.length);
        });

        it('should ignore specified sections', () => {
            const invalidTemplate = {
                sections: {
                    foo: {},
                    bar: {},
                    baz: {},
                    biz: {},
                },
                routes: {
                    initial: 'bar',
                    states: {
                        bar: {
                            on: {
                                ANSWER: [{target: 'biz'}],
                            },
                        },
                        biz: {
                            type: 'final',
                        },
                    },
                },
            };

            const errors = ensureAllSectionsAreTargetedByRouteTarget({
                template: invalidTemplate,
                sectionIdIgnoreList: ['foo'],
            });

            const expectedErrors = [
                {
                    type: 'UntargetedSection',
                    source: '/sections/baz',
                    description: `Section '/sections/baz' is not targeted by any route`,
                },
            ];

            assertContainsDeep(errors, expectedErrors);
            assert.strictEqual(errors.length, expectedErrors.length);
        });
    });

    describe('parallel', () => {
        it('should return true if all sections are targeted by at least one route target or are initial sections', () => {
            const validTemplate = {
                sections: {
                    foo: {},
                    bar: {},
                    baz: {},
                    biz: {},
                },
                routes: {
                    id: 'parallel-routes',
                    type: 'parallel',
                    states: {
                        't-foo': {
                            initial: 'foo',
                            states: {
                                foo: {
                                    on: {
                                        ANSWER: [{target: 'bar'}],
                                    },
                                },
                            },
                        },
                        't-bar': {
                            initial: 'bar',
                            states: {
                                bar: {
                                    on: {
                                        ANSWER: [{target: 'baz'}],
                                    },
                                },
                            },
                        },
                        't-baz': {
                            initial: 'baz',
                            states: {
                                baz: {
                                    on: {
                                        ANSWER: [{target: 'biz'}],
                                    },
                                },
                            },
                        },
                    },
                },
            };

            assert.strictEqual(
                ensureAllSectionsAreTargetedByRouteTarget({template: validTemplate}),
                true,
            );
        });

        it('should return an error for each section that is neither targeted by any routes nor an initial section', () => {
            const invalidTemplate = {
                sections: {
                    foo: {},
                    bar: {},
                    baz: {},
                    biz: {},
                },
                routes: {
                    id: 'parallel-routes',
                    type: 'parallel',
                    states: {
                        't-foo': {
                            initial: 'foo',
                            states: {
                                foo: {
                                    on: {
                                        ANSWER: [{target: 'bar'}],
                                    },
                                },
                            },
                        },
                    },
                },
            };

            const errors = ensureAllSectionsAreTargetedByRouteTarget({
                template: invalidTemplate,
            });

            const expectedErrors = [
                {
                    type: 'UntargetedSection',
                    source: '/sections/biz',
                    description: `Section '/sections/biz' is not targeted by any route`,
                },
                {
                    type: 'UntargetedSection',
                    source: '/sections/baz',
                    description: `Section '/sections/baz' is not targeted by any route`,
                },
            ];

            assertContainsDeep(errors, expectedErrors);
            assert.strictEqual(errors.length, expectedErrors.length);
        });

        it('should ignore specified sections', () => {
            const invalidTemplate = {
                sections: {
                    foo: {},
                    bar: {},
                    baz: {},
                    biz: {},
                },
                routes: {
                    id: 'parallel-routes',
                    type: 'parallel',
                    states: {
                        't-foo': {
                            initial: 'foo',
                            states: {
                                foo: {
                                    on: {
                                        ANSWER: [{target: 'bar'}],
                                    },
                                },
                            },
                        },
                    },
                },
            };

            const errors = ensureAllSectionsAreTargetedByRouteTarget({
                template: invalidTemplate,
                sectionIdIgnoreList: ['baz'],
            });

            const expectedErrors = [
                {
                    type: 'UntargetedSection',
                    source: '/sections/biz',
                    description: `Section '/sections/biz' is not targeted by any route`,
                },
            ];

            assertContainsDeep(errors, expectedErrors);
            assert.strictEqual(errors.length, expectedErrors.length);
        });
    });
});
