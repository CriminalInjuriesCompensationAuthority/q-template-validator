'use strict';

const ensureAllSectionsAreTargetedByRouteTarget = require('./index');

describe('ensureAllSectionsAreTargetedByRouteTarget', () => {
    describe('questionnaire', () => {
        it('should return true if all sections are targeted by at least one route target', () => {
            const validTemplate = {
                sections: {
                    foo: {},
                    bar: {},
                    baz: {},
                    biz: {}
                },
                routes: {
                    initial: 'foo',
                    states: {
                        foo: {
                            on: {
                                ANSWER: [{target: 'bar'}]
                            }
                        },
                        bar: {
                            on: {
                                ANSWER: [{target: 'baz'}]
                            }
                        },
                        baz: {
                            on: {
                                ANSWER: [{target: 'biz'}]
                            }
                        },
                        biz: {
                            type: 'final'
                        }
                    }
                }
            };

            expect(ensureAllSectionsAreTargetedByRouteTarget({template: validTemplate})).toEqual(
                true
            );
        });

        it('should return an error for each section that is not targeted by any routes', () => {
            const invalidTemplate = {
                sections: {
                    foo: {},
                    bar: {},
                    baz: {},
                    biz: {}
                },
                routes: {
                    initial: 'bar',
                    states: {
                        bar: {
                            on: {
                                ANSWER: [{target: 'biz'}]
                            }
                        },
                        biz: {
                            type: 'final'
                        }
                    }
                }
            };
            const errors = ensureAllSectionsAreTargetedByRouteTarget({template: invalidTemplate});
            const expectedErrors = [
                {
                    type: 'UntargetedSection',
                    source: '/sections/foo',
                    description: `Section '/sections/foo' is not targeted by any route`
                },
                {
                    type: 'UntargetedSection',
                    source: '/sections/baz',
                    description: `Section '/sections/baz' is not targeted by any route`
                }
            ];

            expectedErrors.forEach(expectedError => expect(errors).toContainEqual(expectedError));
            expect(errors.length).toEqual(expectedErrors.length);
        });

        it('should ignore specified sections', () => {
            const invalidTemplate = {
                sections: {
                    foo: {},
                    bar: {},
                    baz: {},
                    biz: {}
                },
                routes: {
                    initial: 'bar',
                    states: {
                        bar: {
                            on: {
                                ANSWER: [{target: 'biz'}]
                            }
                        },
                        biz: {
                            type: 'final'
                        }
                    }
                }
            };
            const errors = ensureAllSectionsAreTargetedByRouteTarget({
                template: invalidTemplate,
                sectionIdIgnoreList: ['foo']
            });
            const expectedErrors = [
                {
                    type: 'UntargetedSection',
                    source: '/sections/baz',
                    description: `Section '/sections/baz' is not targeted by any route`
                }
            ];

            expectedErrors.forEach(expectedError => expect(errors).toContainEqual(expectedError));
            expect(errors.length).toEqual(expectedErrors.length);
        });
    });
    describe('parallel', () => {
        it('should return true if all sections are targeted by at least one route target or are initial sections', () => {
            const validTemplate = {
                sections: {
                    foo: {},
                    bar: {},
                    baz: {},
                    biz: {}
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
                                        ANSWER: [{target: 'bar'}]
                                    }
                                }
                            }
                        },
                        't-bar': {
                            initial: 'bar',
                            states: {
                                bar: {
                                    on: {
                                        ANSWER: [{target: 'baz'}]
                                    }
                                }
                            }
                        },
                        't-baz': {
                            initial: 'baz',
                            states: {
                                baz: {
                                    on: {
                                        ANSWER: [{target: 'biz'}]
                                    }
                                }
                            }
                        }
                    }
                }
            };

            expect(ensureAllSectionsAreTargetedByRouteTarget({template: validTemplate})).toEqual(
                true
            );
        });

        it('should return an error for each section that is neither targeted by any routes nor an initial section', () => {
            const invalidTemplate = {
                sections: {
                    foo: {},
                    bar: {},
                    baz: {},
                    biz: {}
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
                                        ANSWER: [{target: 'bar'}]
                                    }
                                }
                            }
                        }
                    }
                }
            };
            const errors = ensureAllSectionsAreTargetedByRouteTarget({template: invalidTemplate});
            const expectedErrors = [
                {
                    type: 'UntargetedSection',
                    source: '/sections/biz',
                    description: `Section '/sections/biz' is not targeted by any route`
                },
                {
                    type: 'UntargetedSection',
                    source: '/sections/baz',
                    description: `Section '/sections/baz' is not targeted by any route`
                }
            ];

            expectedErrors.forEach(expectedError => expect(errors).toContainEqual(expectedError));
            expect(errors.length).toEqual(expectedErrors.length);
        });

        it('should ignore specified sections', () => {
            const invalidTemplate = {
                sections: {
                    foo: {},
                    bar: {},
                    baz: {},
                    biz: {}
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
                                        ANSWER: [{target: 'bar'}]
                                    }
                                }
                            }
                        }
                    }
                }
            };
            const errors = ensureAllSectionsAreTargetedByRouteTarget({
                template: invalidTemplate,
                sectionIdIgnoreList: ['baz']
            });
            const expectedErrors = [
                {
                    type: 'UntargetedSection',
                    source: '/sections/biz',
                    description: `Section '/sections/biz' is not targeted by any route`
                }
            ];

            expectedErrors.forEach(expectedError => expect(errors).toContainEqual(expectedError));
            expect(errors.length).toEqual(expectedErrors.length);
        });
    });
});
