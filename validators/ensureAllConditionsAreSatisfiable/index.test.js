'use strict';

const ensureAllConditionsAreSatisfiable = require('./index');
const rolesSchema = require('./fixtures/questionnaire-schema-roles');

describe('ensureAllConditionsAreSatisfiable', () => {
    it('should return true if all conditions on a section are satisfiable', () => {
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
                            ANSWER: [
                                {target: 'bar', cond: ['==', '$.answers.foo.q-foo', true]},
                                {target: 'baz', cond: ['==', '$.answers.foo.q-foo', false]}
                            ]
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
            },
            attributes: rolesSchema.attributes
        };
        const validTemplate2 = {
            sections: {
                one: {},
                two: {},
                three: {},
                four: {},
                five: {},
                six: {},
                seven: {},
                eight: {},
                nine: {}
            },
            routes: {
                initial: 'one',
                states: {
                    one: {
                        on: {
                            ANSWER: [
                                {target: 'two', cond: ['==', '$.answers.one.q-one', true]},
                                {target: 'three', cond: ['==', '$.answers.one.q-one', false]}
                            ]
                        }
                    },
                    two: {
                        on: {
                            ANSWER: [{target: 'four'}]
                        }
                    },
                    three: {
                        on: {
                            ANSWER: [{target: 'four'}]
                        }
                    },
                    four: {
                        on: {
                            ANSWER: [
                                {target: 'five', cond: ['==', '$.answers.four.q-four', true]},
                                {target: 'six', cond: ['==', '$.answers.four.q-four', false]}
                            ]
                        }
                    },
                    five: {
                        on: {
                            ANSWER: [
                                {target: 'eight', cond: ['==', '$.answers.one.q-one', true]},
                                {target: 'nine', cond: ['==', '$.answers.one.q-one', false]}
                            ]
                        }
                    },
                    six: {
                        on: {
                            ANSWER: [{target: 'seven'}]
                        }
                    },
                    seven: {
                        type: 'final'
                    },
                    eight: {
                        type: 'final'
                    },
                    nine: {
                        type: 'final'
                    }
                }
            },
            attributes: rolesSchema.attributes
        };
        expect(ensureAllConditionsAreSatisfiable(validTemplate)).toEqual(true);
        expect(ensureAllConditionsAreSatisfiable(validTemplate2)).toEqual(true);
    });

    // need valid and invalid template for each question type

    it('should return an error for each condition that is not satisfiable', () => {
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
                    foo: {
                        on: {
                            ANSWER: [
                                {target: 'bar', cond: ['==', '$.answers.foo.q-foo', true]},
                                {target: 'baz', cond: ['==', '$.answers.foo.q-foo', false]}
                            ]
                        }
                    },
                    bar: {
                        on: {
                            ANSWER: [{target: 'baz', cond: ['==', '$.answers.foo.q-foo', false]}]
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
            },
            attributes: rolesSchema.attributes
        };
        expect(ensureAllConditionsAreSatisfiable(invalidTemplate)).toThrow();
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
