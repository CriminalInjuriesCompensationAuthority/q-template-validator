'use strict';

const createQuestionnairePathsHelper = require('./q-paths-helper');

/*
    need to determine what questions are used for routing. This can be done at q-generator time. This then allows us to
    determine if a states' valid objects all have to be used (to cover all routing) or just the first valid object to allow to app to proceed e.g.

    if question b is a boolean and is used for routing purposes then we need to traverse the true and false paths. If it wasn't used for routing then
    we could pick any of its valid objects as it wouldn't matter for identifying all valid paths.


    3 scenarios:
    1 - target relies on current state only
    2 - target relies on previous state only
    3 - target relies on current state and previous state(s)

    we need data to satisfy state "f"

    we also need data to satisfy each of state "f"s targets
*/

describe('q-paths', () => {
    describe('Given a section contains no "examples" for use as input', () => {
        it('should proceed to the next state for a non-routing question', () => {
            const questionnaireTemplate = {
                sections: {
                    a: {
                        examples: [{}] // TODO: remove this and fix test
                    },
                    b: {}
                },
                routes: {
                    initial: 'a',
                    states: {
                        a: {
                            on: {
                                ANSWER: [
                                    {
                                        target: 'b'
                                    }
                                ]
                            }
                        },
                        b: {type: 'final'}
                    }
                }
            };

            const qPaths = createQuestionnairePathsHelper();
            const paths = qPaths.getPaths(questionnaireTemplate);

            expect(paths.visited).toEqual(['a,b']);
        });

        it('should throw for a routing question', () => {
            const questionnaireTemplate = {
                sections: {
                    a: {},
                    b: {},
                    c: {}
                },
                routes: {
                    initial: 'a',
                    states: {
                        a: {
                            on: {
                                ANSWER: [
                                    {
                                        target: 'b',
                                        cond: ['==', '$.answers.a.q-a', true]
                                    },
                                    {
                                        target: 'c'
                                    }
                                ]
                            }
                        },
                        b: {type: 'final'},
                        c: {type: 'final'}
                    }
                }
            };

            const qPaths = createQuestionnairePathsHelper();

            expect(() => {
                qPaths.getPaths(questionnaireTemplate);
            }).toThrow(
                Error(
                    'Section "a" contains a routing question, however the section contains no "examples" to trigger the routing rules'
                )
            );
        });
    });

    describe('Given a section contains "examples" for use as input', () => {
        it('should use the first validObject for non-routing questions', () => {
            const questionnaireTemplate = {
                sections: {
                    a: {
                        examples: [{'q-a': true}, {'q-a': false}]
                    },
                    b: {}
                },
                routes: {
                    initial: 'a',
                    states: {
                        a: {
                            on: {
                                ANSWER: [
                                    {
                                        target: 'b'
                                    }
                                ]
                            }
                        },
                        b: {type: 'final'}
                    }
                }
            };

            const qPaths = createQuestionnairePathsHelper();
            const paths = qPaths.getPaths(questionnaireTemplate);

            expect(paths.visited).toEqual(['a,b']);
            // TODO expect(qPaths.getAnswers().a['q-a']).toEqual(true);
        });

        it('should use all examples for routing questions', () => {
            const questionnaireTemplate = {
                sections: {
                    a: {
                        examples: [
                            {
                                'q-a': true
                            },
                            {
                                'q-a': false
                            },
                            {
                                'q-a': 'foo'
                            }
                        ]
                    },
                    b: {},
                    c: {},
                    d: {}
                },
                routes: {
                    initial: 'a',
                    states: {
                        a: {
                            on: {
                                ANSWER: [
                                    {
                                        target: 'b',
                                        cond: ['==', '$.answers.a.q-a', true]
                                    },
                                    {
                                        target: 'c',
                                        cond: ['==', '$.answers.a.q-a', false]
                                    },
                                    {
                                        target: 'd'
                                    }
                                ]
                            }
                        },
                        b: {type: 'final'},
                        c: {type: 'final'},
                        d: {type: 'final'}
                    }
                }
            };

            const qPaths = createQuestionnairePathsHelper({
                questionnaireTemplate
            });
            const paths = qPaths.getPaths(questionnaireTemplate);

            expect(paths.visited).toEqual(['a,b', 'a,c', 'a,d']);
            // TODO expect(qPaths.getAnswers().a['q-a']).toEqual('foo');
        });

        describe('Given a state containing conditional targets', () => {
            describe('And the conditions rely on the current state only', () => {
                it('should proceed to the next state given the current state', () => {
                    const questionnaireTemplate = {
                        sections: {
                            a: {
                                examples: [
                                    {
                                        'q-a': true
                                    },
                                    {
                                        'q-a': false
                                    }
                                ]
                            },
                            b: {},
                            c: {}
                        },
                        routes: {
                            initial: 'a',
                            states: {
                                a: {
                                    on: {
                                        ANSWER: [
                                            {
                                                target: 'b',
                                                cond: ['==', '$.answers.a.q-a', true]
                                            },
                                            {
                                                target: 'c',
                                                cond: ['==', '$.answers.a.q-a', false]
                                            }
                                        ]
                                    }
                                },
                                b: {
                                    type: 'final'
                                },
                                c: {
                                    type: 'final'
                                }
                            }
                        }
                    };

                    const qPaths = createQuestionnairePathsHelper();
                    const paths = qPaths.getPaths(questionnaireTemplate);

                    expect(paths.visited).toEqual(['a,b', 'a,c']);
                });
            });

            describe('And the conditions rely solely on a single previous state', () => {
                it('should proceed to the next state given the previous state', () => {
                    const questionnaireTemplate = {
                        sections: {
                            a: {
                                examples: [
                                    {
                                        'q-a': true
                                    },
                                    {
                                        'q-a': false
                                    }
                                ]
                            },
                            b: {
                                examples: [{}]
                            },
                            c: {},
                            d: {}
                        },
                        routes: {
                            initial: 'a',
                            states: {
                                a: {
                                    on: {
                                        ANSWER: [
                                            {
                                                target: 'b'
                                            }
                                        ]
                                    }
                                },
                                b: {
                                    on: {
                                        ANSWER: [
                                            {
                                                target: 'c',
                                                cond: ['==', '$.answers.a.q-a', true]
                                            },
                                            {
                                                target: 'd',
                                                cond: ['==', '$.answers.a.q-a', false]
                                            }
                                        ]
                                    }
                                },
                                c: {type: 'final'},
                                d: {type: 'final'}
                            }
                        }
                    };

                    const qPaths = createQuestionnairePathsHelper();
                    const paths = qPaths.getPaths(questionnaireTemplate);

                    expect(paths.visited).toEqual(['a,b,c', 'a,b,d']);
                });
            });

            describe('And the conditions rely solely on a multiple previous state', () => {
                it('should proceed to the next state given the previous states', () => {
                    const questionnaireTemplate = {
                        sections: {
                            a: {
                                examples: [
                                    {
                                        'q-a': 5
                                    }
                                ]
                            },
                            b: {
                                examples: [
                                    {
                                        'q-b': 1
                                    },
                                    {
                                        'q-b': 5
                                    }
                                ]
                            },
                            c: {
                                examples: [
                                    {
                                        'q-c': 6
                                    },
                                    {
                                        'q-c': 1
                                    }
                                ]
                            },
                            d: {
                                examples: [
                                    {
                                        'q-d': true
                                    }
                                ]
                            },
                            e: {},
                            f: {}
                        },
                        routes: {
                            initial: 'a',
                            states: {
                                a: {
                                    on: {
                                        ANSWER: [
                                            {
                                                target: 'b'
                                            }
                                        ]
                                    }
                                },
                                b: {
                                    on: {
                                        ANSWER: [
                                            {
                                                target: 'c'
                                            }
                                        ]
                                    }
                                },
                                c: {
                                    on: {
                                        ANSWER: [
                                            {
                                                target: 'd'
                                            }
                                        ]
                                    }
                                },
                                d: {
                                    on: {
                                        ANSWER: [
                                            {
                                                target: 'e',
                                                cond: [
                                                    '==',
                                                    ['+', '$.answers.a.q-a', '$.answers.b.q-b'],
                                                    10
                                                ]
                                            },
                                            {
                                                target: 'e',
                                                cond: [
                                                    '==',
                                                    ['+', '$.answers.a.q-a', '$.answers.c.q-c'],
                                                    10
                                                ]
                                            },
                                            {
                                                target: 'f'
                                            }
                                        ]
                                    }
                                },
                                e: {type: 'final'},
                                // ee: {type: 'final'},
                                f: {type: 'final'}
                            }
                        }
                    };

                    const qPaths = createQuestionnairePathsHelper();
                    const paths = qPaths.getPaths(questionnaireTemplate);

                    expect(paths.visited.sort()).toEqual(
                        ['a,b,c,d,e', /* 'a,b,c,d,ee', */ 'a,b,c,d,f'].sort()
                    );
                });
            });

            describe('And the conditions rely on the current state and on a single previous state', () => {
                it('should proceed to the next state given the previous state', () => {
                    const questionnaireTemplate = {
                        sections: {
                            a: {
                                examples: [
                                    {
                                        'q-a': true
                                    },
                                    {
                                        'q-a': false
                                    }
                                ]
                            },
                            b: {
                                examples: [
                                    {
                                        'q-b': true
                                    },
                                    {
                                        'q-b': false
                                    }
                                ]
                            },
                            c: {},
                            d: {}
                        },
                        routes: {
                            initial: 'a',
                            states: {
                                a: {
                                    on: {
                                        ANSWER: [
                                            {
                                                target: 'b'
                                            }
                                        ]
                                    }
                                },
                                b: {
                                    on: {
                                        ANSWER: [
                                            {
                                                target: 'c',
                                                cond: [
                                                    'and',
                                                    ['==', '$.answers.a.q-a', true],
                                                    ['==', '$.answers.b.q-b', true]
                                                ]
                                            },
                                            {
                                                target: 'd',
                                                cond: [
                                                    'and',
                                                    ['==', '$.answers.a.q-a', false],
                                                    ['==', '$.answers.b.q-b', false]
                                                ]
                                            },
                                            {
                                                target: 'e'
                                            }
                                        ]
                                    }
                                },
                                c: {type: 'final'},
                                d: {type: 'final'},
                                e: {type: 'final'}
                            }
                        }
                    };

                    const qPaths = createQuestionnairePathsHelper();
                    const paths = qPaths.getPaths(questionnaireTemplate);

                    expect(paths.visited.sort()).toEqual(['a,b,c', 'a,b,d', 'a,b,e'].sort());
                });
            });

            describe('And the conditions rely on the current state and multiple previous states', () => {
                it('should proceed to the next state given the current and previous states', () => {
                    const questionnaireTemplate = {
                        sections: {
                            a: {
                                examples: [{'q-a': 'fooa'}]
                            },
                            b: {
                                examples: [
                                    {
                                        'q-b': true
                                    },
                                    {
                                        'q-b': false
                                    }
                                ]
                            },
                            c: {
                                examples: [{'q-c': false}]
                            },
                            d: {
                                examples: [{'q-d': 'food'}]
                            },
                            e: {
                                examples: [{'q-e': true}, {'q-e': false}]
                            },
                            f: {
                                examples: [{'q-f': 'foof'}]
                            },
                            g: {
                                examples: [{'q-g': 'foog'}]
                            },
                            h: {
                                examples: [{'q-h': 'fooh'}]
                            },
                            i: {
                                examples: [{'q-i': 'fooi'}]
                            }
                        },
                        routes: {
                            initial: 'a',
                            states: {
                                a: {
                                    on: {
                                        ANSWER: [
                                            {
                                                target: 'b'
                                            }
                                        ]
                                    }
                                },
                                b: {
                                    on: {
                                        ANSWER: [
                                            {
                                                target: 'c',
                                                cond: ['==', '$.answers.b.q-b', true]
                                            },
                                            {
                                                target: 'd',
                                                cond: ['==', '$.answers.b.q-b', false]
                                            }
                                        ]
                                    }
                                },
                                c: {
                                    on: {
                                        ANSWER: [
                                            {
                                                target: 'e'
                                            }
                                        ]
                                    }
                                },
                                d: {
                                    on: {
                                        ANSWER: [
                                            {
                                                target: 'e'
                                            }
                                        ]
                                    }
                                },
                                e: {
                                    on: {
                                        ANSWER: [
                                            {
                                                target: 'f'
                                            }
                                        ]
                                    }
                                },
                                f: {
                                    on: {
                                        ANSWER: [
                                            {
                                                target: 'g',
                                                cond: [
                                                    '==',
                                                    '$.answers.b.q-b',
                                                    '$.answers.e.q-e',
                                                    true
                                                ]
                                            },
                                            {
                                                target: 'h',
                                                cond: [
                                                    'and',
                                                    [
                                                        '==',
                                                        '$.answers.b.q-b',
                                                        '$.answers.e.q-e',
                                                        '$.answers.c.q-c',
                                                        false
                                                    ],
                                                    ['==', '$.answers.f.q-f', 'foof']
                                                ]
                                            },
                                            {
                                                target: 'i'
                                            }
                                        ]
                                    }
                                },
                                g: {
                                    type: 'final'
                                },
                                h: {
                                    type: 'final'
                                },
                                i: {
                                    type: 'final'
                                }
                            }
                        }
                    };

                    const qPaths = createQuestionnairePathsHelper();
                    const paths = qPaths.getPaths(questionnaireTemplate);

                    expect(paths.visited.sort()).toEqual(
                        ['a,b,c,e,f,g', 'a,b,c,e,f,i', 'a,b,d,e,f,h', 'a,b,d,e,f,i'].sort()
                    );
                });
            });
        });
    });

    describe('Given a section that contains a conditional target that has not been visited', () => {
        it('should provide an "unvisited" property on the paths object', () => {
            const questionnaireTemplate = {
                sections: {
                    a: {
                        examples: [
                            {
                                'q-a': true
                            },
                            {
                                'q-a': false
                            }
                        ]
                    },
                    b: {},
                    c: {}
                },
                routes: {
                    initial: 'a',
                    states: {
                        a: {
                            on: {
                                ANSWER: [
                                    {
                                        target: 'b',
                                        cond: ['==', '$.answers.a.q-a', true]
                                    },
                                    {
                                        target: 'c',
                                        cond: ['==', '$.answers.a.q-a', false]
                                    },
                                    {
                                        target: 'd'
                                    }
                                ]
                            }
                        },
                        b: {
                            type: 'final'
                        },
                        c: {
                            type: 'final'
                        },
                        d: {
                            type: 'final'
                        }
                    }
                }
            };

            const qPaths = createQuestionnairePathsHelper();
            const paths = qPaths.getPaths(questionnaireTemplate);

            expect(paths.unvisited).toEqual(['a,d']);
        });
    });

    describe('unvisited', () => {
        it('should return an "unvisited" entry for a final state that is not referenced', () => {
            const questionnaireTemplate = {
                sections: {
                    a: {
                        examples: [{}]
                    },
                    b: {}
                },
                routes: {
                    initial: 'a',
                    states: {
                        a: {
                            on: {
                                ANSWER: [
                                    {
                                        target: 'b'
                                    }
                                ]
                            }
                        },
                        b: {type: 'final'},
                        c: {type: 'final'}
                    }
                }
            };

            const qPaths = createQuestionnairePathsHelper();
            const paths = qPaths.getPaths(questionnaireTemplate);

            expect(paths.visited).toEqual(['a,b']);
            expect(paths.unvisited).toEqual(['?,c']);
        });

        it('should return an "unvisited" entry for a state that is not referenced', () => {
            const questionnaireTemplate = {
                sections: {
                    a: {
                        examples: [{}]
                    },
                    b: {}
                },
                routes: {
                    initial: 'a',
                    states: {
                        a: {
                            on: {
                                ANSWER: [
                                    {
                                        target: 'b'
                                    }
                                ]
                            }
                        },
                        b: {type: 'final'},
                        c: {
                            on: {
                                ANSWER: [
                                    {
                                        target: 'd'
                                    }
                                ]
                            }
                        },
                        d: {
                            on: {
                                ANSWER: [
                                    {
                                        target: 'z'
                                    }
                                ]
                            }
                        }
                    }
                }
            };

            const qPaths = createQuestionnairePathsHelper();
            const paths = qPaths.getPaths(questionnaireTemplate);

            expect(paths.visited).toEqual(['a,b']);
            expect(paths.unvisited).toEqual(['?,c', 'd,z']);
        });
    });
});
