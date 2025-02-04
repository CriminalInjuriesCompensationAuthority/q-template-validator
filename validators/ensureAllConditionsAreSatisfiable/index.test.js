'use strict';

const ensureAllConditionsAreSatisfiable = require('./index');
const rolesSchema = require('./fixtures/questionnaire-schema-roles');

describe('ensureAllConditionsAreSatisfiable', () => {
    describe('Satisfiable conditions', () => {
        it('should return true if all conditions on a section are satisfiable by questions on just that page', () => {
            const validTemplate = {
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
            expect(ensureAllConditionsAreSatisfiable(validTemplate)).toEqual(true);
        });
        it('should return true if all conditions are simple and satisfiable', () => {
            const validTemplate = {
                sections: {
                    one: {},
                    two: {},
                    three: {},
                    four: {},
                    five: {}
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
                                ANSWER: [
                                    {
                                        target: 'four',
                                        cond: ['includes', '$.answers.two.q-two', 'true']
                                    },
                                    {
                                        target: 'three',
                                        cond: ['includes', '$.answers.two.q-two', 'false']
                                    }
                                ]
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
                        }
                    }
                },
                attributes: rolesSchema.attributes
            };
            expect(ensureAllConditionsAreSatisfiable(validTemplate)).toEqual(true);
        });
        it('should return true if all conditions with an OR are all satisfiable', () => {
            const validTemplate = {
                sections: {
                    one: {},
                    two: {},
                    three: {},
                    four: {},
                    five: {}
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
                                ANSWER: [
                                    {
                                        target: 'four',
                                        cond: ['includes', '$.answers.two.q-two', 'true']
                                    },
                                    {
                                        target: 'three',
                                        cond: ['includes', '$.answers.two.q-two', 'false']
                                    }
                                ]
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
                                    {
                                        target: 'eight',
                                        cond: [
                                            'or',
                                            ['includes', '$.answers.two.q-two', 'true'],
                                            ['==', '$.answers.one.q-one', false]
                                        ]
                                    },
                                    {target: 'nine', cond: ['==', '$.answers.one.q-one', false]}
                                ]
                            }
                        }
                    }
                },
                attributes: rolesSchema.attributes
            };
            expect(ensureAllConditionsAreSatisfiable(validTemplate)).toEqual(true);
        });
        it('should return true if all conditions with an AND are all satisfiable', () => {
            const validTemplate = {
                sections: {
                    one: {},
                    two: {},
                    three: {},
                    four: {},
                    five: {}
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
                                ANSWER: [
                                    {
                                        target: 'four',
                                        cond: ['includes', '$.answers.two.q-two', 'true']
                                    },
                                    {
                                        target: 'three',
                                        cond: ['includes', '$.answers.two.q-two', 'false']
                                    }
                                ]
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
                                    {
                                        target: 'eight',
                                        cond: [
                                            'and',
                                            ['includes', '$.answers.two.q-two', 'true'],
                                            ['==', '$.answers.one.q-one', true]
                                        ]
                                    },
                                    {target: 'nine', cond: ['==', '$.answers.one.q-one', false]}
                                ]
                            }
                        }
                    }
                },
                attributes: rolesSchema.attributes
            };
            expect(ensureAllConditionsAreSatisfiable(validTemplate)).toEqual(true);
        });
        it('should return true if a condition depends on a role for which only one condition is satisfiable', () => {
            const validTemplate = {
                routes: {
                    // need to add in each of the pages referenced by the rep condition to show they're valid
                    initial: 'p-applicant-who-are-you-applying-for',
                    states: {
                        'p-applicant-who-are-you-applying-for': {
                            on: {
                                ANSWER: [{target: 'p-applicant-are-you-18-or-over'}]
                            }
                        },
                        'p-applicant-are-you-18-or-over': {
                            on: {
                                ANSWER: [{target: 'p-mainapplicant-parent'}]
                            }
                        },
                        'p-mainapplicant-parent': {
                            on: {
                                ANSWER: [{target: 'p--has-legal-authority'}]
                            }
                        },
                        'p--has-legal-authority': {
                            on: {
                                ANSWER: [{target: 'p-applicant-can-handle-affairs'}]
                            }
                        },
                        'p-applicant-can-handle-affairs': {
                            on: {
                                ANSWER: [{target: 'foo'}]
                            }
                        },
                        foo: {
                            on: {
                                ANSWER: [
                                    {
                                        target: 'bar',
                                        cond: [
                                            'and',
                                            [
                                                '==',
                                                '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                                                'someone-else'
                                            ],
                                            [
                                                '==',
                                                '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
                                                false
                                            ],
                                            [
                                                '==',
                                                '$.answers.p-mainapplicant-parent.q-mainapplicant-parent',
                                                false
                                            ],
                                            [
                                                '==',
                                                '$.answers.p--has-legal-authority.q--has-legal-authority',
                                                false
                                            ],
                                            [
                                                '==',
                                                '$.answers.p-applicant-can-handle-affairs.q-applicant-capable',
                                                false
                                                // This conflicts with one of the definitions of what a rep is
                                            ]
                                        ]
                                    },
                                    {target: 'baz', cond: ['==', '$.answers.foo.q-foo', false]}
                                ]
                            }
                        },
                        bar: {
                            on: {
                                ANSWER: [{target: 'baz', cond: ['|role.all', 'rep']}]
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
            expect(ensureAllConditionsAreSatisfiable(validTemplate)).toEqual(true);
        });
        it('should return true if both roles are satisfied for a route containing different role options', () => {
            const validTemplate = {
                routes: {
                    // need to add in each of the pages referenced by the rep condition to show they're valid
                    initial: 'p-applicant-who-are-you-applying-for',
                    states: {
                        'p-applicant-who-are-you-applying-for': {
                            on: {
                                ANSWER: [{target: 'p-applicant-are-you-18-or-over'}]
                            }
                        },
                        'p-applicant-are-you-18-or-over': {
                            on: {
                                ANSWER: [
                                    {
                                        target: 'p-mainapplicant-parent',
                                        cond: [
                                            '==',
                                            '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
                                            false
                                        ]
                                    },
                                    {
                                        target: 'p-applicant-fatal',
                                        cond: [
                                            '==',
                                            '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
                                            true
                                        ]
                                    }
                                ]
                            }
                        },
                        'p-applicant-fatal': {
                            on: {
                                ANSWER: [{target: 'bar'}]
                            }
                        },
                        'p-mainapplicant-parent': {
                            on: {
                                ANSWER: [{target: 'p--has-legal-authority'}]
                            }
                        },
                        'p--has-legal-authority': {
                            on: {
                                ANSWER: [{target: 'p-applicant-can-handle-affairs'}]
                            }
                        },
                        'p-applicant-can-handle-affairs': {
                            on: {
                                ANSWER: [{target: 'foo'}]
                            }
                        },
                        foo: {
                            on: {
                                ANSWER: [
                                    {
                                        target: 'bar',
                                        cond: [
                                            'and',
                                            [
                                                '==',
                                                '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                                                'someone-else'
                                            ],
                                            [
                                                '==',
                                                '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
                                                false
                                            ],
                                            [
                                                '==',
                                                '$.answers.p-mainapplicant-parent.q-mainapplicant-parent',
                                                false
                                            ],
                                            [
                                                '==',
                                                '$.answers.p--has-legal-authority.q--has-legal-authority',
                                                false
                                            ]
                                        ]
                                    },
                                    {target: 'baz', cond: ['==', '$.answers.foo.q-foo', false]}
                                ]
                            }
                        },
                        bar: {
                            on: {
                                ANSWER: [
                                    {
                                        target: 'baz',
                                        cond: [
                                            'or',
                                            ['|role.all', 'rep', 'child'],
                                            ['|role.all', 'deceased', 'adult']
                                        ]
                                    }
                                ]
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
            expect(ensureAllConditionsAreSatisfiable(validTemplate)).toEqual(true);
        });
        it('should return true if a route condition is an OR of two complex roles', () => {
            const validTemplate = {
                routes: {
                    // need to add in each of the pages referenced by the rep condition to show they're valid
                    initial: 'p-applicant-who-are-you-applying-for',
                    states: {
                        'p-applicant-who-are-you-applying-for': {
                            on: {
                                ANSWER: [{target: 'p-applicant-are-you-18-or-over'}]
                            }
                        },
                        'p-applicant-are-you-18-or-over': {
                            on: {
                                ANSWER: [
                                    {
                                        target: 'p-mainapplicant-parent',
                                        cond: [
                                            '==',
                                            '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
                                            false
                                        ]
                                    },
                                    {
                                        target: 'p-applicant-fatal',
                                        cond: [
                                            '==',
                                            '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
                                            true
                                        ]
                                    }
                                ]
                            }
                        },
                        'p-mainapplicant-confirmation-method': {
                            on: {
                                ANSWER: [{target: 'bar'}]
                            }
                        },
                        'p-mainapplicant-parent': {
                            on: {
                                ANSWER: [{target: 'p--has-legal-authority'}]
                            }
                        },
                        'p--has-legal-authority': {
                            on: {
                                ANSWER: [{target: 'p-applicant-can-handle-affairs'}]
                            }
                        },
                        'p-applicant-can-handle-affairs': {
                            on: {
                                ANSWER: [{target: 'foo'}]
                            }
                        },
                        foo: {
                            on: {
                                ANSWER: [
                                    {
                                        target: 'bar',
                                        cond: [
                                            'and',
                                            [
                                                '==',
                                                '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                                                'someone-else'
                                            ],
                                            [
                                                '==',
                                                '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
                                                false
                                            ],
                                            [
                                                '==',
                                                '$.answers.p-mainapplicant-parent.q-mainapplicant-parent',
                                                false
                                            ],
                                            [
                                                '==',
                                                '$.answers.p--has-legal-authority.q--has-legal-authority',
                                                false
                                            ]
                                        ]
                                    },
                                    {target: 'baz', cond: ['==', '$.answers.foo.q-foo', false]}
                                ]
                            }
                        },
                        bar: {
                            on: {
                                ANSWER: [
                                    {
                                        target: 'baz',
                                        cond: [
                                            'or',
                                            ['|role.all', 'rep'],
                                            ['|role.all', 'noContactMethod']
                                        ]
                                    }
                                ]
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
            expect(ensureAllConditionsAreSatisfiable(validTemplate)).toEqual(true);
        });
        it('should return true if there are no conflicts between != conditions and == conditions', () => {
            const validTemplate = {
                sections: {
                    foo: {
                        schema: {
                            properties: {
                                'q-foo': {
                                    oneOf: [{const: 'a'}, {const: 'b'}, {const: 'c'}, {const: 'd'}]
                                }
                            }
                        }
                    }
                },
                routes: {
                    initial: 'foo',
                    states: {
                        foo: {
                            on: {
                                ANSWER: [
                                    {target: 'bar', cond: ['==', '$.answers.foo.q-foo', 'c']},
                                    {target: 'baz', cond: ['==', '$.answers.foo.q-foo', 'a']}
                                ]
                            }
                        },
                        bar: {
                            on: {
                                ANSWER: [
                                    {
                                        target: 'baz',
                                        cond: [
                                            'and',
                                            ['!=', '$.answers.foo.q-foo', 'a'],
                                            ['!=', '$.answers.foo.q-foo', 'b']
                                        ]
                                    },
                                    {target: 'biz'}
                                ]
                            }
                        },
                        baz: {
                            on: {
                                ANSWER: [{target: 'biz', cond: ['==', '$.answers.foo.q-foo', 'c']}]
                            }
                        }
                    }
                },
                attributes: rolesSchema.attributes
            };
            expect(ensureAllConditionsAreSatisfiable(validTemplate)).toEqual(true);
        });
    });
    // need valid and invalid template for each question type
    // includes
    // roles (including ands and ors of two complex roles)
    // datecompare (simple cases where they have the same reference and also more complex ones (e.g. >5 and >6, <5 and <4))
    // date difference greater than 2 days (currently broken)
    // ors (for valid just any two conditions, for invalid need to do an or where one works and one doesn't )
    // or of no contact method and rep if possible

    describe('Unsatisfiable conditions', () => {
        it('should throw an error if a route directly contradicts a route to that page', () => {
            const invalidTemplate = {
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
                                ANSWER: [
                                    {target: 'baz', cond: ['==', '$.answers.foo.q-foo', false]},
                                    {target: 'biz'}
                                ]
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
        it('should throw an error for each invalid route from a page', () => {
            const invalidTemplate = {
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
                                ANSWER: [
                                    {target: 'baz', cond: ['==', '$.answers.foo.q-foo', false]},
                                    {
                                        target: 'biz',
                                        cond: ['==', '$.answers.foo.q-foo', 'undefined']
                                    }
                                ]
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
        it('should throw an error if not all OR conditions on a route can be satisfied', () => {
            const invalidTemplate = {
                sections: {
                    one: {},
                    two: {},
                    three: {},
                    four: {},
                    five: {}
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
                                ANSWER: [
                                    {
                                        target: 'four',
                                        cond: ['includes', '$.answers.two.q-two', 'true']
                                    },
                                    {
                                        target: 'three',
                                        cond: ['includes', '$.answers.two.q-two', 'false']
                                    }
                                ]
                            }
                        },
                        three: {
                            on: {
                                ANSWER: [{target: 'four'}]
                            }
                        },
                        four: {
                            on: {
                                ANSWER: [{target: 'five'}]
                            }
                        },
                        five: {
                            on: {
                                ANSWER: [
                                    {
                                        target: 'eight',
                                        cond: [
                                            'or',
                                            ['includes', '$.answers.two.q-two', 'true'],
                                            ['==', '$.answers.one.q-one', 'undefined']
                                        ]
                                    },
                                    {target: 'nine', cond: ['==', '$.answers.one.q-one', false]}
                                ]
                            }
                        }
                    }
                },
                attributes: rolesSchema.attributes
            };
            expect(ensureAllConditionsAreSatisfiable(invalidTemplate)).toThrow();
        });
        it('should throw an error if not all conditions with an AND are all satisfiable', () => {
            const validTemplate = {
                sections: {
                    one: {},
                    two: {},
                    three: {},
                    four: {},
                    five: {}
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
                                ANSWER: [
                                    {
                                        target: 'four',
                                        cond: ['includes', '$.answers.two.q-two', 'true']
                                    },
                                    {
                                        target: 'three',
                                        cond: ['includes', '$.answers.two.q-two', 'false']
                                    }
                                ]
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
                                    {
                                        target: 'eight',
                                        cond: [
                                            'and',
                                            ['includes', '$.answers.two.q-two', 'true'],
                                            ['==', '$.answers.one.q-one', true]
                                        ]
                                    },
                                    {target: 'nine', cond: ['==', '$.answers.one.q-one', false]}
                                ]
                            }
                        }
                    }
                },
                attributes: rolesSchema.attributes
            };
            expect(ensureAllConditionsAreSatisfiable(validTemplate)).toEqual(true);
        });
        it('should throw an error if there is a conflict between != conditions', () => {
            const invalidTemplate = {
                sections: {
                    foo: {
                        schema: {
                            properties: {
                                'q-foo': {
                                    oneOf: [{const: 'a'}, {const: 'b'}, {const: 'c'}, {const: 'd'}]
                                }
                            }
                        }
                    }
                },
                routes: {
                    initial: 'foo',
                    states: {
                        foo: {
                            on: {
                                ANSWER: [
                                    {
                                        target: 'bar',
                                        cond: [
                                            'or',
                                            ['==', '$.answers.foo.q-foo', 'c'],
                                            ['==', '$.answers.foo.q-foo', 'd']
                                        ]
                                    }
                                ]
                            }
                        },
                        bar: {
                            on: {
                                ANSWER: [
                                    {
                                        target: 'baz',
                                        cond: [
                                            'and',
                                            ['!=', '$.answers.foo.q-foo', 'a'],
                                            ['!=', '$.answers.foo.q-foo', 'b']
                                        ]
                                    },
                                    {target: 'biz'}
                                ]
                            }
                        },
                        baz: {
                            on: {
                                ANSWER: [
                                    {
                                        target: 'biz',
                                        cond: [
                                            'and',
                                            ['!=', '$.answers.foo.q-foo', 'c'],
                                            ['!=', '$.answers.foo.q-foo', 'd']
                                        ]
                                    }
                                ]
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
    });
});
