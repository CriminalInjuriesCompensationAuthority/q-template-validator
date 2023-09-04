'use strict';

const validQTemplate = {
    type: 'apply-for-compensation',
    version: '5.2.2',
    sections: {
        'p-applicant-declaration': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                title: 'Declaration',
                required: ['q-applicant-declaration'],
                propertyNames: {
                    enum: ['q-applicant-declaration']
                },
                allOf: [
                    {
                        properties: {
                            'applicant-declaration': {
                                description:
                                    '<div id="declaration"><p class="govuk-body">By submitting this application, I, ||/answers/p-applicant-enter-your-name/q-applicant-title|| ||/answers/p-applicant-enter-your-name/q-applicant-first-name|| ||/answers/p-applicant-enter-your-name/q-applicant-last-name||, confirm that I understand the following:</p><ul class="govuk-list govuk-list--bullet"><li>the information I’ve given here is true</li><li>CICA may share and receive information with the following parties for the purposes of processing this application for compensation or verifying information provided:</li><ul><li>police, prosecutors and ACRO Criminal Records Office, including for the purposes of obtaining a report of the crime and a record of any criminal convictions I may have</li><li>medical organisations, practitioners, and police medical staff to obtain medical evidence - including medical records and expert reports. CICA will let me know if this is required</li><li>any other individuals or organisations where necessary to process this application</li><li>any representative I may appoint to act for me in the course of this application</li></ul><li>if I deliberately provide information that I know is wrong or misleading, I may be refused compensation and may be prosecuted</li><li>I must notify CICA immediately of any change in circumstances relevant to this application, including my address and information about any other claim or proceedings which may give rise to a separate award or payment in respect of my injuries</li></ul><p class="govuk-body">Read our privacy notice to see <a href="https://www.gov.uk/guidance/cica-privacy-notice" class="govuk-link" target="_blank">how we use your data (opens in new tab)</a>.</p><h2 class="govuk-heading-m">Information about appointing a legal or another representative</h2><p class="govuk-body">It is not necessary to appoint a legal or other paid representative to act on an applicant’s behalf. If one is appointed at any stage, please be aware that CICA cannot meet their costs. We will communicate directly with any appointed representative.</p><p class="govuk-body">If we make an award, we will pay it only to an applicant or their legal representative. This is unless the application has been made on behalf of an adult who cannot manage their own financial affairs.</p><p class="govuk-body">If it is decided that a representative’s services are no longer required, you must tell us in writing as soon as possible. If a monetary award is to be made and there is a dispute about outstanding legal fees, it is our policy to retain the disputed amount until the parties involved resolve the dispute.</p></div>'
                            }
                        }
                    },
                    {
                        properties: {
                            'q-applicant-declaration': {
                                type: 'string',
                                title:
                                    'I have read and understood the <a href="#declaration" class="govuk-link">information and declaration</a>',
                                const: 'i-agree'
                            }
                        }
                    }
                ],
                errorMessage: {
                    required: {
                        'q-applicant-declaration': 'Select that you agree'
                    }
                },
                examples: [
                    {
                        'q-applicant-declaration': 'i-agree'
                    }
                ],
                invalidExamples: [
                    {},
                    {
                        foo: 'bar'
                    },
                    {
                        'q-applicant-declaration': true
                    },
                    {
                        'q-applicant-declaration': 'false'
                    },
                    {
                        'q-applicant-declaration': 123
                    },
                    {
                        'q-applicant-declaration': [123]
                    }
                ]
            }
        },
        'p-mainapplicant-declaration-12-and-over': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                title: 'Declaration',
                required: ['q-mainapplicant-declaration'],
                propertyNames: {
                    enum: ['q-mainapplicant-declaration']
                },
                allOf: [
                    {
                        properties: {
                            'mainapplicant-declaration': {
                                description:
                                    '<div id="declaration"><p class="govuk-body">By submitting this application, I, ||/answers/p-mainapplicant-enter-your-name/q-mainapplicant-title|| ||/answers/p-mainapplicant-enter-your-name/q-mainapplicant-first-name|| ||/answers/p-mainapplicant-enter-your-name/q-mainapplicant-last-name||, confirm that ||/answers/p-applicant-enter-your-name/q-applicant-title|| ||/answers/p-applicant-enter-your-name/q-applicant-first-name|| ||/answers/p-applicant-enter-your-name/q-applicant-last-name|| understands the following:</p><ul class="govuk-list govuk-list--bullet"><li>the information I’ve given here is true</li><li>CICA may share and receive information with the following parties for the purposes of processing this application for compensation or verifying information provided:</li><ul><li>police, prosecutors and ACRO Criminal Records Office, including for the purposes of obtaining a report of the crime and a record of any criminal convictions they may have</li><li>medical organisations, practitioners, and police medical staff to obtain medical evidence - including medical records and expert reports. CICA will let me know if this is required</li><li>any other individuals or organisations where necessary to process this application</li><li>any representative I may appoint to act for me in the course of this application</li></ul><li>if we deliberately provide information that we know is wrong or misleading, we may be refused compensation and we may be prosecuted</li><li>we must notify CICA immediately of any change in circumstances relevant to this application, including my address and information about any other claim or proceedings which may give rise to a separate award or payment in respect of their injuries</li></ul><p class="govuk-body">Read our privacy notice to see <a href="https://www.gov.uk/guidance/cica-privacy-notice" class="govuk-link" target="_blank">how we use your data (opens in new tab)</a>.</p><h2 class="govuk-heading-m">Information about appointing a legal or another representative</h2><p class="govuk-body">It is not necessary to appoint a legal or other representative to act on an applicant’s behalf. If one is appointed at any stage, please be aware that CICA cannot meet their costs. We will communicate directly with any appointed representative.</p><p class="govuk-body">If we make an award, we will pay it only to an applicant or their legal representative. This is unless the application has been made on behalf of an adult who cannot manage their own financial affairs or a child who is under 18 years of age. It is our general policy to put an award for a child in an interest earning deposit account until they reach the age of 18.</p><p class="govuk-body">If it is decided that a representative’s services are no longer required, you must tell us in writing as soon as possible. If a monetary award is to be made and there is a dispute about outstanding legal fees, it is our policy to retain the disputed amount until the parties involved resolve the dispute.</p></div>'
                            }
                        }
                    },
                    {
                        properties: {
                            'q-mainapplicant-declaration': {
                                type: 'string',
                                title:
                                    'I have read and understood the <a href="#declaration" class="govuk-link">information and declaration</a>',
                                const: 'i-agree-12-and-over'
                            }
                        }
                    }
                ],
                errorMessage: {
                    required: {
                        'q-mainapplicant-declaration': 'Select that you agree'
                    }
                },
                examples: [
                    {
                        'q-mainapplicant-declaration': 'i-agree-12-and-over'
                    }
                ],
                invalidExamples: [
                    {},
                    {
                        foo: 'bar'
                    },
                    {
                        'q-mainapplicant-declaration': true
                    },
                    {
                        'q-mainapplicant-declaration': 'false'
                    },
                    {
                        'q-mainapplicant-declaration': 123
                    },
                    {
                        'q-mainapplicant-declaration': [123]
                    }
                ]
            }
        },
        'p-mainapplicant-declaration-under-12': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                title: 'Declaration',
                required: ['q-mainapplicant-declaration'],
                propertyNames: {
                    enum: ['q-mainapplicant-declaration']
                },
                allOf: [
                    {
                        properties: {
                            'mainapplicant-declaration': {
                                description:
                                    '<div id="declaration"><p class="govuk-body">By submitting this application, I, ||/answers/p-mainapplicant-enter-your-name/q-mainapplicant-title|| ||/answers/p-mainapplicant-enter-your-name/q-mainapplicant-first-name|| ||/answers/p-mainapplicant-enter-your-name/q-mainapplicant-last-name|| on behalf of ||/answers/p-applicant-enter-your-name/q-applicant-title|| ||/answers/p-applicant-enter-your-name/q-applicant-first-name|| ||/answers/p-applicant-enter-your-name/q-applicant-last-name|| confirm that I understand the following:</p><ul class="govuk-list govuk-list--bullet"><li>the information I’ve given here is true</li><li>CICA may share and receive information with the following parties for the purposes of processing this application for compensation or verifying information provided:</li><ul><li>police, prosecutors and ACRO Criminal Records Office, including for the purposes of obtaining a report of the crime and a record of any criminal convictions they may have</li><li>medical organisations, practitioners, and police medical staff to obtain medical evidence - including medical records and expert reports. CICA will let me know if this is required</li><li>any other individuals or organisations where necessary to process this application</li><li>any representative I may appoint to act for me in the course of this application</li></ul><li>if I deliberately provide information that I know is wrong or misleading, I may be refused compensation and I may be prosecuted</li><li>I must notify CICA immediately of any change in circumstances relevant to this application, including my address and information about any other claim or proceedings which may give rise to a separate award or payment in respect of their injuries</li></ul><p class="govuk-body">Read our privacy notice to see <a href="https://www.gov.uk/guidance/cica-privacy-notice" class="govuk-link" target="_blank">how we use your data (opens in new tab)</a>.</p><h2 class="govuk-heading-m">Information about appointing a legal or another representative</h2><p class="govuk-body">It is not necessary to appoint a legal or other representative to act on an applicant’s behalf. If one is appointed at any stage, please be aware that CICA cannot meet their costs. We will communicate directly with any appointed representative.</p><p class="govuk-body">If we make an award, we will pay it only to an applicant or their legal representative. This is unless the application has been made on behalf of an adult who cannot manage their own financial affairs or a child who is under 18 years of age. It is our general policy to put an award for a child in an interest earning deposit account until they reach the age of 18.</p><p class="govuk-body">If it is decided that a representative’s services are no longer required, you must tell us in writing as soon as possible. If a monetary award is to be made and there is a dispute about outstanding legal fees, it is our policy to retain the disputed amount until the parties involved resolve the dispute.</p></div>'
                            }
                        }
                    },
                    {
                        properties: {
                            'q-mainapplicant-declaration': {
                                type: 'string',
                                title:
                                    'I have read and understood the <a href="#declaration" class="govuk-link">information and declaration</a>',
                                const: 'i-agree-under-12'
                            }
                        }
                    }
                ],
                errorMessage: {
                    required: {
                        'q-mainapplicant-declaration': 'Select that you agree'
                    }
                },
                examples: [
                    {
                        'q-mainapplicant-declaration': 'i-agree-under-12'
                    }
                ],
                invalidExamples: [
                    {},
                    {
                        foo: 'bar'
                    },
                    {
                        'q-mainapplicant-declaration': true
                    },
                    {
                        'q-mainapplicant-declaration': 'false'
                    },
                    {
                        'q-mainapplicant-declaration': 123
                    },
                    {
                        'q-mainapplicant-declaration': [123]
                    }
                ]
            }
        },
        'p--transition-no-phone-or-email': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    transition: {
                        title:
                            'You must apply by telephone if you do not have an email address or UK mobile phone',
                        description: "{% include 'contact.njk' %}"
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p-applicant-confirmation-method': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                propertyNames: {
                    enum: [
                        'q-applicant-confirmation-method',
                        'q-applicant-enter-your-email-address',
                        'q-applicant-enter-your-telephone-number'
                    ]
                },
                properties: {
                    'q-applicant-confirmation-method': {
                        title: "How should we tell you we've got the application?",
                        type: 'string',
                        oneOf: [
                            {
                                title: 'Email',
                                const: 'email'
                            },
                            {
                                title: 'Text message',
                                const: 'text'
                            },
                            {
                                title: "I don't have an email address or UK mobile phone number",
                                const: 'none'
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'applicant-details'
                            },
                            summary: {
                                title: 'Confirmation method'
                            }
                        }
                    },
                    'q-applicant-enter-your-email-address': {
                        type: 'string',
                        title: 'Email address',
                        maxLength: 50,
                        format: 'email',
                        errorMessage: {
                            maxLength: 'Email address must be 50 characters or less',
                            format:
                                'Enter an email address in the correct format, like name@example.com'
                        },
                        meta: {
                            classifications: {
                                theme: 'applicant-details'
                            }
                        }
                    },
                    'q-applicant-enter-your-telephone-number': {
                        type: 'string',
                        title: 'UK mobile phone number',
                        maxLength: 20,
                        format: 'mobile-uk',
                        errorMessage: {
                            format:
                                'Enter a UK mobile phone number, like 07700 900 982 or +44 7700 900 982',
                            maxLength: 'Telephone number must be 20 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'applicant-details'
                            }
                        }
                    }
                },
                required: ['q-applicant-confirmation-method'],
                allOf: [
                    {
                        $ref:
                            '#/definitions/if-email-then-q-applicant-enter-your-email-address-is-required'
                    },
                    {
                        $ref:
                            '#/definitions/if-text-then-q-applicant-enter-your-telephone-number-is-required'
                    },
                    {
                        $ref: '#/definitions/if-none-then-phone-and-email-explicitly-not-required'
                    }
                ],
                definitions: {
                    'if-email-then-q-applicant-enter-your-email-address-is-required': {
                        if: {
                            properties: {
                                'q-applicant-confirmation-method': {
                                    const: 'email'
                                }
                            },
                            required: ['q-applicant-confirmation-method']
                        },
                        then: {
                            required: ['q-applicant-enter-your-email-address'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-confirmation-method',
                                    'q-applicant-enter-your-email-address'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-enter-your-email-address': 'Enter an email address'
                                }
                            }
                        }
                    },
                    'if-text-then-q-applicant-enter-your-telephone-number-is-required': {
                        if: {
                            properties: {
                                'q-applicant-confirmation-method': {
                                    const: 'text'
                                }
                            },
                            required: ['q-applicant-confirmation-method']
                        },
                        then: {
                            required: ['q-applicant-enter-your-telephone-number'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-confirmation-method',
                                    'q-applicant-enter-your-telephone-number'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-enter-your-telephone-number':
                                        'Enter a UK mobile phone number'
                                }
                            }
                        }
                    },
                    'if-none-then-phone-and-email-explicitly-not-required': {
                        if: {
                            properties: {
                                'q-applicant-confirmation-method': {
                                    const: 'none'
                                }
                            },
                            required: ['q-applicant-confirmation-method']
                        },
                        then: {
                            additionalProperties: false,
                            properties: {
                                'q-applicant-confirmation-method': {
                                    const: 'none'
                                }
                            },
                            required: ['q-applicant-confirmation-method']
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-confirmation-method':
                            'Select how you want to get your confirmation message'
                    }
                },
                examples: [
                    {
                        'q-applicant-confirmation-method': 'none'
                    },
                    {
                        'q-applicant-confirmation-method': 'email',
                        'q-applicant-enter-your-email-address': 'foo@bar.com'
                    },
                    {
                        'q-applicant-confirmation-method': 'text',
                        'q-applicant-enter-your-telephone-number': '07701 234567'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-confirmation-method': 'none',
                        'q-applicant-enter-your-email-address': 'foo@bar.com'
                    },
                    {
                        'q-applicant-confirmation-method': 'none',
                        'q-applicant-enter-your-telephone-number': '07701 234567'
                    },
                    {
                        'q-applicant-confirmation-method': 'email'
                    },
                    {
                        'q-applicant-confirmation-method': 'text'
                    },
                    {
                        'q-applicant-confirmation-method': 'email',
                        'q-applicant-enter-your-telephone-number': '07701 234567'
                    },
                    {
                        'q-applicant-confirmation-method': 'text',
                        'q-applicant-enter-your-email-address': 'foo@bar.com'
                    },
                    {
                        'q-applicant-confirmation-method': 'email',
                        'q-applicant-enter-your-email-address': 'not an email address'
                    },
                    {
                        'q-applicant-confirmation-method': 'text',
                        'q-applicant-enter-your-telephone-number': 'not a UK mobile phone number'
                    },
                    {
                        'q-applicant-confirmation-method': 10
                    },
                    {
                        'q-applicant-confirmation-method': false
                    },
                    {
                        'q-applicant-confirmation-method': true,
                        'q-applicant-enter-your-email-address': true
                    },
                    {
                        'q-applicant-confirmation-method': 'none',
                        'q-applicant-enter-your-email-address': ['something']
                    },
                    {
                        'q-applicant-confirmation-method': 'none',
                        'q-applicant-enter-your-email-address': 123
                    },
                    {
                        'q-applicant-confirmation-method': 'text',
                        'q-applicant-enter-your-email-address': true
                    },
                    {
                        'q-applicant-confirmation-method': 'text',
                        'q-applicant-enter-your-telephone-number': 123
                    },
                    {
                        'q-applicant-confirmation-method': 'email',
                        'q-applicant-enter-your-telephone-number': false
                    }
                ]
            }
        },
        'p-applicant-british-citizen-or-eu-national': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-british-citizen-or-eu-national'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-british-citizen-or-eu-national',
                        resources: {
                            'q-applicant-british-citizen-or-eu-national': {
                                title: 'Are you a British citizen or EU national?',
                                'title_someone-else': 'Are they a British citizen or EU national?',
                                error: {
                                    required:
                                        'Select yes if you are a British citizen or EU national',
                                    'required_someone-else':
                                        'Select yes if they are a British citizen or EU national'
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-british-citizen-or-eu-national'],
                additionalProperties: false,
                properties: {
                    'q-applicant-british-citizen-or-eu-national': {
                        title:
                            'l10nt:q-applicant-british-citizen-or-eu-national.title{?lng,context,ns}',
                        type: 'boolean',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'about-application'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-british-citizen-or-eu-national':
                            'l10nt:q-applicant-british-citizen-or-eu-national.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-british-citizen-or-eu-national': true
                    },
                    {
                        'q-applicant-british-citizen-or-eu-national': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-british-citizen-or-eu-national': 'foo'
                    }
                ]
            }
        },
        'p-applicant-are-you-18-or-over': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-are-you-18-or-over'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-are-you-18-or-over',
                        resources: {
                            'q-applicant-are-you-18-or-over': {
                                title: 'Are you 18 or over?',
                                'title_someone-else': 'Is the person 18 or over?',
                                error: {
                                    required: 'Select yes if you are 18 or over',
                                    'required_someone-else':
                                        'Select yes if the person is 18 or over',
                                    meta: {
                                        summary: {
                                            title: 'Are you 18 or over?',
                                            'title_someone-else': 'Is the person 18 or over?'
                                        }
                                    }
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-are-you-18-or-over'],
                additionalProperties: false,
                properties: {
                    'q-applicant-are-you-18-or-over': {
                        type: 'boolean',
                        title: 'l10nt:q-applicant-are-you-18-or-over.title{?lng,context,ns}',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'about-application'
                            },
                            summary: {
                                title:
                                    'l10nt:q-applicant-are-you-18-or-over.meta.summary.title{?lng,context,ns}'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-are-you-18-or-over':
                            'l10nt:q-applicant-are-you-18-or-over.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-are-you-18-or-over': true
                    },
                    {
                        'q-applicant-are-you-18-or-over': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-are-you-18-or-over': 'foo'
                    }
                ]
            }
        },
        'p-applicant-who-are-you-applying-for': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-who-are-you-applying-for'],
                additionalProperties: false,
                properties: {
                    'q-applicant-who-are-you-applying-for': {
                        title: 'Who are you applying for?',
                        type: 'string',
                        oneOf: [
                            {
                                title: 'Myself',
                                const: 'myself'
                            },
                            {
                                title: 'Someone else',
                                const: 'someone-else'
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'about-application'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-who-are-you-applying-for':
                            'Select myself if you are applying for yourself'
                    }
                },
                examples: [
                    {
                        'q-applicant-who-are-you-applying-for': 'myself'
                    },
                    {
                        'q-applicant-who-are-you-applying-for': 'someone-else'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-who-are-you-applying-for': 12345
                    }
                ]
            }
        },
        'p--before-you-continue': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'applicant-impact-on-you': {
                        title: 'About the crime',
                        description:
                            '<p class="govuk-body">We’re going to ask you:</p><ul class="govuk-list govuk-list--bullet"><li>when and where the crime happened</li><li>which police force investigated the crime</li></ul><p class="govuk-body">This helps us get the information we need to make a decision about your claim.</p>{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "If you need help or support",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml + \'<p class="govuk-body">You can <a class="govuk-link" href="https://www.victimandwitnessinformation.org.uk/">get practical or emotional support</a> after a crime.</p><p class="govuk-body">There is different practical or emotional support <a class="govuk-link" href="https://www.mygov.scot/victim-witness-support/">if you live in Scotland</a>.</p>\'})}}'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p--was-the-crime-reported-to-police': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q--was-the-crime-reported-to-police'],
                additionalProperties: false,
                properties: {
                    'q--was-the-crime-reported-to-police': {
                        title: 'Was the crime reported to the police?',
                        type: 'boolean',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'about-application'
                            }
                        }
                    },
                    'dont-know-if-crime-reported': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "I do not know if the crime was reported to the police",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q--was-the-crime-reported-to-police':
                            'Select yes if the crime was reported to the police'
                    }
                },
                examples: [
                    {
                        'q--was-the-crime-reported-to-police': true
                    },
                    {
                        'q--was-the-crime-reported-to-police': false
                    }
                ],
                invalidExamples: [
                    {
                        'q--was-the-crime-reported-to-police': 'foo'
                    }
                ]
            }
        },
        'p--when-was-the-crime-reported-to-police': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q--when-was-the-crime-reported-to-police'],
                additionalProperties: false,
                properties: {
                    'q--when-was-the-crime-reported-to-police': {
                        title: 'When was the crime reported to the police?',
                        meta: {
                            keywords: {
                                format: {
                                    precision: 'YYYY-MM-DD'
                                }
                            },
                            classifications: {
                                theme: 'crime'
                            },
                            summary: {
                                title: 'When was the crime reported?'
                            }
                        },
                        type: 'string',
                        format: 'date-time',
                        description: 'For example, 28 2 2020. You can enter an approximate date.',
                        errorMessage: {
                            format:
                                'Enter the date the crime was reported to police and include a day, month and year'
                        }
                    },
                    'additional-info-help-text': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with when it was reported",html: \'<p class="govuk-body">If you enter an approximate date or if you reported the crime on more than one occasion, you can provide additional details later in this claim.</p>\'})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q--when-was-the-crime-reported-to-police':
                            'Enter the date the crime was reported to the police'
                    }
                },
                examples: [
                    {
                        'q--when-was-the-crime-reported-to-police': '2020-01-01T00:00:00.000Z'
                    }
                ],
                invalidExamples: [
                    {
                        'q--when-was-the-crime-reported-to-police': 12345
                    },
                    {
                        'q--when-was-the-crime-reported-to-police': 'not a date'
                    }
                ]
            }
        },
        'p--whats-the-crime-reference-number': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q--whats-the-crime-reference-number'],
                additionalProperties: false,
                properties: {
                    'q--whats-the-crime-reference-number': {
                        title: "What's the crime reference number?",
                        type: 'string',
                        description:
                            'This is the number the police gave the crime when it was reported. We need this to get information from the police about the crime.',
                        maxLength: 30,
                        errorMessage: {
                            maxLength: 'Crime reference number must be 30 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'crime'
                            }
                        }
                    },
                    'i-dont-know-the-crime-reference': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with your crime reference number",html: \'<p class="govuk-body">If you have more than one crime reference number, you can add these numbers to the ‘additional details’ section at the end of the application.</p><p class="govuk-body">If you do not have your crime reference number, call 101 to speak to your local police station. They can help you get this.</p>\'})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q--whats-the-crime-reference-number': 'Enter the crime reference number'
                    }
                },
                examples: [
                    {
                        'q--whats-the-crime-reference-number': 'abc123'
                    }
                ],
                invalidExamples: [
                    {
                        'q--whats-the-crime-reference-number': 12345
                    }
                ]
            }
        },
        'p-applicant-did-the-crime-happen-once-or-over-time': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-did-the-crime-happen-once-or-over-time'],
                additionalProperties: false,
                properties: {
                    'q-applicant-did-the-crime-happen-once-or-over-time': {
                        title: 'Did the crime happen once or over a period of time?',
                        type: 'string',
                        oneOf: [
                            {
                                title: 'Once',
                                const: 'once'
                            },
                            {
                                title: 'Over a period of time',
                                const: 'over-a-period-of-time'
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'crime'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-did-the-crime-happen-once-or-over-time':
                            'Select Once or Over a period of time'
                    }
                },
                examples: [
                    {
                        'q-applicant-did-the-crime-happen-once-or-over-time': 'once'
                    },
                    {
                        'q-applicant-did-the-crime-happen-once-or-over-time':
                            'over-a-period-of-time'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-did-the-crime-happen-once-or-over-time': 'never'
                    },
                    {
                        'q-applicant-did-the-crime-happen-once-or-over-time': 12345
                    }
                ]
            }
        },
        'p-applicant-when-did-the-crime-happen': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-when-did-the-crime-happen'],
                additionalProperties: false,
                properties: {
                    'q-applicant-when-did-the-crime-happen': {
                        title: 'When did the crime happen?',
                        meta: {
                            keywords: {
                                format: {
                                    precision: 'YYYY-MM-DD'
                                }
                            },
                            classifications: {
                                theme: 'crime'
                            }
                        },
                        type: 'string',
                        format: 'date-time',
                        description: 'For example, 28 2 2020. You can enter an approximate date.',
                        errorMessage: {
                            format:
                                'Enter the date the crime happened and include a day, month and year'
                        }
                    },
                    'when-did-the-crime-happen': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "I do not know when the crime happened",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-when-did-the-crime-happen':
                            'Enter the date the crime happened and include a day, month and year'
                    }
                },
                examples: [
                    {
                        'q-applicant-when-did-the-crime-happen': '2020-01-01T00:00:00.000Z'
                    },
                    {
                        'q-applicant-when-did-the-crime-happen': '2010-01-01T00:00:00.000Z'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-when-did-the-crime-happen': 12345
                    },
                    {
                        'q-applicant-when-did-the-crime-happen': 'not a date'
                    }
                ]
            }
        },
        'p-applicant-when-did-the-crime-start': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-when-did-the-crime-start'],
                additionalProperties: false,
                properties: {
                    'q-applicant-when-did-the-crime-start': {
                        title: 'When did it start?',
                        meta: {
                            keywords: {
                                format: {
                                    precision: 'YYYY-MM',
                                    defaults: {
                                        DD: '01'
                                    }
                                }
                            },
                            classifications: {
                                theme: 'crime'
                            }
                        },
                        type: 'string',
                        format: 'date-time',
                        description: 'For example, 02 2020. You can enter an approximate date.',
                        errorMessage: {
                            format: 'Enter the date the crime started and include a month and year'
                        }
                    },
                    'i-dont-know-when-the-crime-started': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "I do not know when the crime started",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-when-did-the-crime-start':
                            'Enter the date the crime started and include a month and year'
                    }
                },
                examples: [
                    {
                        'q-applicant-when-did-the-crime-start': '2020-01-01T00:00:00.000Z'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-when-did-the-crime-start': 12345
                    },
                    {
                        'q-applicant-when-did-the-crime-start': 'not a date'
                    }
                ]
            }
        },
        'p-applicant-when-did-the-crime-stop': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-when-did-the-crime-stop'],
                additionalProperties: false,
                properties: {
                    'q-applicant-when-did-the-crime-stop': {
                        title: 'When did it stop?',
                        meta: {
                            keywords: {
                                format: {
                                    precision: 'YYYY-MM',
                                    defaults: {
                                        DD: '01'
                                    }
                                }
                            },
                            classifications: {
                                theme: 'crime'
                            }
                        },
                        type: 'string',
                        format: 'date-time',
                        description: 'For example, 03 2020. You can enter an approximate date.',
                        errorMessage: {
                            format: 'Enter the date the crime stopped and include a month and year'
                        }
                    },
                    'i-dont-know-when-the-crime-stopped': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "I do not know when the crime stopped",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-when-did-the-crime-stop':
                            'Enter the date the crime stopped and include a month and year'
                    }
                },
                examples: [
                    {
                        'q-applicant-when-did-the-crime-stop': '2020-01-10T00:00:00.000Z'
                    },
                    {
                        'q-applicant-when-did-the-crime-stop': '2010-01-01T00:00:00.000Z'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-when-did-the-crime-stop': 12345
                    },
                    {
                        'q-applicant-when-did-the-crime-stop': 'not a date'
                    }
                ]
            }
        },
        'p-applicant-select-reasons-for-the-delay-in-making-your-application': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-select-reasons-for-the-delay-in-making-your-application'
                },
                translations: [
                    {
                        language: 'en',
                        namespace:
                            'p-applicant-select-reasons-for-the-delay-in-making-your-application',
                        resources: {
                            'q-applicant-explain-reason-for-delay-application': {
                                error: {
                                    required:
                                        'Explain the reasons for the delay in making your application',
                                    'required_someone-else':
                                        'Explain the reasons for the delay in making this application'
                                }
                            },
                            'q-applicant-select-reasons-for-the-delay-in-making-your-application': {
                                description: 'Select all options that apply to you.',
                                'description_someone-else': 'Select all options that apply.',
                                error: {
                                    required:
                                        'Select if you were under 18, advised to wait, medical reasons or other reasons',
                                    'required_someone-else':
                                        'Select if they were under 18, advised to wait, medical reasons or other reasons'
                                },
                                title: 'Select reasons for the delay in making your application',
                                'title_someone-else':
                                    'Select reasons for the delay in making this application',
                                value: {
                                    'i-was-underage': 'I was under 18',
                                    'i-was-underage_someone-else': 'The child was under 18',
                                    'i-was-advised-to-wait': 'I was advised to wait',
                                    'i-was-advised-to-wait_someone-else':
                                        'The child was advised to wait'
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: [
                    'q-applicant-explain-reason-for-delay-application',
                    'q-applicant-select-reasons-for-the-delay-in-making-your-application'
                ],
                additionalProperties: false,
                properties: {
                    'q-applicant-select-reasons-for-the-delay-in-making-your-application': {
                        title:
                            'l10nt:q-applicant-select-reasons-for-the-delay-in-making-your-application.title{?lng,context,ns}',
                        type: 'array',
                        maxItems: 4,
                        uniqueItems: true,
                        description:
                            'l10nt:q-applicant-select-reasons-for-the-delay-in-making-your-application.description{?lng,context,ns}',
                        items: {
                            anyOf: [
                                {
                                    title:
                                        'l10nt:q-applicant-select-reasons-for-the-delay-in-making-your-application.value.i-was-underage{?lng,context,ns}',
                                    const: 'i-was-underage'
                                },
                                {
                                    title:
                                        'l10nt:q-applicant-select-reasons-for-the-delay-in-making-your-application.value.i-was-advised-to-wait{?lng,context,ns}',
                                    const: 'i-was-advised-to-wait'
                                },
                                {
                                    title: 'Medical reasons',
                                    const: 'medical-reasons'
                                },
                                {
                                    title: 'Other reasons',
                                    const: 'other-reasons'
                                }
                            ]
                        },
                        meta: {
                            classifications: {
                                theme: 'crime'
                            },
                            summary: {
                                title: 'Reasons for delay in applying'
                            }
                        }
                    },
                    'q-applicant-explain-reason-for-delay-application': {
                        title: 'Briefly explain these reasons',
                        type: 'string',
                        maxLength: 500,
                        errorMessage: {
                            maxLength: 'Explanation must be 500 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'crime'
                            },
                            summary: {
                                title:
                                    'Briefly explain reasons for the delay in making your application'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-select-reasons-for-the-delay-in-making-your-application':
                            'l10nt:q-applicant-select-reasons-for-the-delay-in-making-your-application.error.required{?lng,context,ns}',
                        'q-applicant-explain-reason-for-delay-application':
                            'l10nt:q-applicant-explain-reason-for-delay-application.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-select-reasons-for-the-delay-in-making-your-application': [
                            'i-was-underage',
                            'medical-reasons'
                        ],
                        'q-applicant-explain-reason-for-delay-application': 'some reason'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-select-reasons-for-the-delay-in-making-your-application': [
                            'not a valid answer'
                        ],
                        'q-applicant-explain-reason-for-delay-application': 'Because reasons'
                    },
                    {
                        'q-applicant-select-reasons-for-the-delay-in-making-your-application': [
                            12345
                        ],
                        'q-applicant-explain-reason-for-delay-application': 'Because reasons'
                    },
                    {
                        'q-applicant-select-reasons-for-the-delay-in-making-your-application': [
                            'i-was-underage'
                        ],
                        'q-applicant-explain-reason-for-delay-application': 12345
                    }
                ]
            }
        },
        'p-applicant-where-did-the-crime-happen': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-where-did-the-crime-happen'],
                additionalProperties: false,
                properties: {
                    'q-applicant-where-did-the-crime-happen': {
                        title: 'Where did the crime happen?',
                        type: 'string',
                        oneOf: [
                            {
                                title: 'England',
                                const: 'england'
                            },
                            {
                                title: 'Scotland',
                                const: 'scotland'
                            },
                            {
                                title: 'Wales',
                                const: 'wales'
                            },
                            {
                                title: 'Somewhere else',
                                const: 'somewhere-else'
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'crime'
                            }
                        }
                    },
                    'additional-info-help-text': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with where it happened",html: \'<p class="govuk-body">If the crime took place in more than one of these countries, you can provide additional details later in this claim.</p>\'})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-where-did-the-crime-happen':
                            'Select England, Scotland, Wales or Somewhere else'
                    }
                },
                examples: [
                    {
                        'q-applicant-where-did-the-crime-happen': 'england'
                    },
                    {
                        'q-applicant-where-did-the-crime-happen': 'scotland'
                    },
                    {
                        'q-applicant-where-did-the-crime-happen': 'wales'
                    },
                    {
                        'q-applicant-where-did-the-crime-happen': 'somewhere-else'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-where-did-the-crime-happen': 'Japan'
                    },
                    {
                        'q-applicant-where-did-the-crime-happen': 12345
                    }
                ]
            }
        },
        'p-applicant-where-in-england-did-it-happen': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                allOf: [
                    {
                        title: 'Where in England did it happen?',
                        meta: {
                            compositeId: 'crime-location-england',
                            classifications: {
                                theme: 'crime'
                            }
                        },
                        required: [
                            'q-applicant-english-town-or-city',
                            'q-applicant-english-location'
                        ],
                        propertyNames: {
                            enum: [
                                'q-applicant-english-town-or-city',
                                'q-applicant-english-location'
                            ]
                        },
                        allOf: [
                            {
                                properties: {
                                    'q-applicant-english-town-or-city': {
                                        type: 'string',
                                        title: 'Town or city',
                                        maxLength: 60,
                                        errorMessage: {
                                            maxLength: 'Town or city must be 60 characters or less'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'crime'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'q-applicant-english-location': {
                                        type: 'string',
                                        title: 'Location',
                                        description:
                                            'For example, the name of a street, business, building or nearby local landmark. You can enter more than one.',
                                        maxLength: 60,
                                        errorMessage: {
                                            maxLength: 'Location must be 60 characters or less'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'crime'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'additional-info-help-text': {
                                        description:
                                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with where it happened",html: \'<p class="govuk-body">If the crime took place in more than one place, you can provide additional details later in this claim.</p>\'})}}'
                                    }
                                }
                            }
                        ],
                        errorMessage: {
                            required: {
                                'q-applicant-english-location':
                                    'Enter the name of a street, business, building or nearby local landmark',
                                'q-applicant-english-town-or-city':
                                    'Enter the town or city where the crime happened'
                            }
                        }
                    }
                ],
                examples: [
                    {
                        'q-applicant-english-town-or-city': 'Some town',
                        'q-applicant-english-location': 'Some location'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-english-town-or-city': 12345,
                        'q-applicant-english-location': 'Some location'
                    },
                    {
                        'q-applicant-english-town-or-city': 'York',
                        'q-applicant-english-location': 12345
                    }
                ]
            }
        },
        'p-applicant-where-in-scotland-did-it-happen': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                allOf: [
                    {
                        title: 'Where in Scotland did it happen?',
                        meta: {
                            compositeId: 'crime-location-scotland',
                            classifications: {
                                theme: 'crime'
                            }
                        },
                        required: [
                            'q-applicant-scottish-town-or-city',
                            'q-applicant-scottish-location'
                        ],
                        propertyNames: {
                            enum: [
                                'q-applicant-scottish-town-or-city',
                                'q-applicant-scottish-location'
                            ]
                        },
                        allOf: [
                            {
                                properties: {
                                    'q-applicant-scottish-town-or-city': {
                                        type: 'string',
                                        title: 'Town or city',
                                        maxLength: 60,
                                        errorMessage: {
                                            maxLength: 'Town or city must be 60 characters or less'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'crime'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'q-applicant-scottish-location': {
                                        type: 'string',
                                        title: 'Location',
                                        description:
                                            'For example, the name of a street, business, building or nearby local landmark. You can enter more than one.',
                                        maxLength: 60,
                                        errorMessage: {
                                            maxLength: 'Location must be 60 characters or less'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'crime'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'additional-info-help-text': {
                                        description:
                                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with where it happened",html: \'<p class="govuk-body">If the crime took place in more than one place, you can provide additional details later in this claim.</p>\'})}}'
                                    }
                                }
                            }
                        ],
                        errorMessage: {
                            required: {
                                'q-applicant-scottish-location':
                                    'Enter the name of a street, business, building or nearby local landmark',
                                'q-applicant-scottish-town-or-city':
                                    'Enter the town or city where the crime happened'
                            }
                        }
                    }
                ],
                examples: [
                    {
                        'q-applicant-scottish-town-or-city': 'Some town',
                        'q-applicant-scottish-location': 'Some location'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-scottish-town-or-city': 12345,
                        'q-applicant-scottish-location': 'Some location'
                    },
                    {
                        'q-applicant-scottish-town-or-city': 'Some town',
                        'q-applicant-scottish-location': 12345
                    }
                ]
            }
        },
        'p-applicant-where-in-wales-did-it-happen': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                allOf: [
                    {
                        title: 'Where in Wales did it happen?',
                        meta: {
                            compositeId: 'crime-location-wales',
                            classifications: {
                                theme: 'crime'
                            }
                        },
                        required: ['q-applicant-welsh-town-or-city', 'q-applicant-welsh-location'],
                        propertyNames: {
                            enum: ['q-applicant-welsh-town-or-city', 'q-applicant-welsh-location']
                        },
                        allOf: [
                            {
                                properties: {
                                    'q-applicant-welsh-town-or-city': {
                                        type: 'string',
                                        title: 'Town or city',
                                        maxLength: 60,
                                        errorMessage: {
                                            maxLength: 'Town or city must be 60 characters or less'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'crime'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'q-applicant-welsh-location': {
                                        type: 'string',
                                        title: 'Location',
                                        description:
                                            'For example, the name of a street, business, building or nearby local landmark. You can enter more than one.',
                                        maxLength: 60,
                                        errorMessage: {
                                            maxLength: 'Location must be 60 characters or less'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'crime'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'additional-info-help-text': {
                                        description:
                                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with where it happened",html: \'<p class="govuk-body">If the crime took place in more than one place, you can provide additional details later in this claim.</p>\'})}}'
                                    }
                                }
                            }
                        ],
                        errorMessage: {
                            required: {
                                'q-applicant-welsh-location':
                                    'Enter the name of a street, business, building or nearby local landmark',
                                'q-applicant-welsh-town-or-city':
                                    'Enter the town or city where the crime happened'
                            }
                        }
                    }
                ],
                examples: [
                    {
                        'q-applicant-welsh-town-or-city': 'Some town',
                        'q-applicant-welsh-location': 'Some location'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-welsh-town-or-city': 12345,
                        'q-applicant-welsh-location': 'Some location'
                    },
                    {
                        'q-applicant-welsh-town-or-city': 'Some town',
                        'q-applicant-welsh-location': 12345
                    }
                ]
            }
        },
        'p--you-need-to-contact-us': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'you-need-to-contact-us': {
                        title: 'You need to contact us',
                        description:
                            '<p class="govuk-body">We need to check if you are eligible for compensation.</p>{% include \'contact.njk\' %}'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p--which-police-force-is-investigating-the-crime': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-police-force-id'],
                additionalProperties: false,
                properties: {
                    'q-police-force-id': {
                        title: 'Which police force is investigating the crime?',
                        type: 'integer',
                        oneOf: [
                            {
                                title: 'Avon And Somerset Constabulary',
                                const: 10000033
                            },
                            {
                                title: 'Bedfordshire Police',
                                const: 10000035
                            },
                            {
                                title: 'British Transport Police',
                                const: 10000001
                            },
                            {
                                title: 'Cambridgeshire Constabulary',
                                const: 10000039
                            },
                            {
                                title: 'Cheshire Constabulary',
                                const: 10000049
                            },
                            {
                                title: 'City Of London Police',
                                const: 10000059
                            },
                            {
                                title: 'Cleveland Police',
                                const: 10000066
                            },
                            {
                                title: 'Cumbria Constabulary',
                                const: 10000082
                            },
                            {
                                title: 'Derbyshire Constabulary',
                                const: 10000084
                            },
                            {
                                title: 'Devon and Cornwall Police',
                                const: 10000090
                            },
                            {
                                title: 'Dorset Police',
                                const: 10000093
                            },
                            {
                                title: 'Durham Constabulary',
                                const: 10000102
                            },
                            {
                                title: 'Essex Police',
                                const: 10000114
                            },
                            {
                                title: 'Gloucestershire Constabulary',
                                const: 10000128
                            },
                            {
                                title: 'Greater Manchester Police',
                                const: 10000140
                            },
                            {
                                title: 'Hampshire Constabulary',
                                const: 10000150
                            },
                            {
                                title: 'Hertfordshire Constabulary',
                                const: 10000153
                            },
                            {
                                title: 'Humberside Police',
                                const: 10000169
                            },
                            {
                                title: 'Kent Police',
                                const: 10000172
                            },
                            {
                                title: 'Lancashire Constabulary',
                                const: 10000175
                            },
                            {
                                title: 'Leicestershire Police',
                                const: 10000176
                            },
                            {
                                title: 'Lincolnshire Police',
                                const: 10000179
                            },
                            {
                                title: 'Merseyside Police',
                                const: 10000181
                            },
                            {
                                title: 'Metropolitan Barking',
                                const: 11809785
                            },
                            {
                                title: 'Metropolitan Barnet',
                                const: 11809719
                            },
                            {
                                title: 'Metropolitan Bexley',
                                const: 11809788
                            },
                            {
                                title: 'Metropolitan Brent',
                                const: 11809722
                            },
                            {
                                title: 'Metropolitan Bromley',
                                const: 11809760
                            },
                            {
                                title: 'Metropolitan Camden',
                                const: 11809694
                            },
                            {
                                title: 'Metropolitan Croydon',
                                const: 11809713
                            },
                            {
                                title: 'Metropolitan Ealing',
                                const: 11809743
                            },
                            {
                                title: 'Metropolitan Enfield',
                                const: 11809783
                            },
                            {
                                title: 'Metropolitan Greenwich',
                                const: 11809709
                            },
                            {
                                title: 'Metropolitan Hackney',
                                const: 11809763
                            },
                            {
                                title: 'Metropolitan Hammersmith',
                                const: 11809795
                            },
                            {
                                title: 'Metropolitan Haringey',
                                const: 11809738
                            },
                            {
                                title: 'Metropolitan Harrow',
                                const: 11809803
                            },
                            {
                                title: 'Metropolitan Havering',
                                const: 11809800
                            },
                            {
                                title: 'Metropolitan Hillingdon',
                                const: 11809775
                            },
                            {
                                title: 'Metropolitan Hounslow',
                                const: 11809780
                            },
                            {
                                title: 'Metropolitan Islington',
                                const: 11809765
                            },
                            {
                                title: 'Metropolitan Kensington',
                                const: 11809801
                            },
                            {
                                title: 'Metropolitan Kingston',
                                const: 11809865
                            },
                            {
                                title: 'Metropolitan Lambeth',
                                const: 11809693
                            },
                            {
                                title: 'Metropolitan Lewisham',
                                const: 11809698
                            },
                            {
                                title: 'Metropolitan Merton',
                                const: 11809861
                            },
                            {
                                title: 'Metropolitan Newham',
                                const: 11809701
                            },
                            {
                                title: 'Metropolitan Redbridge',
                                const: 11809782
                            },
                            {
                                title: 'Metropolitan Richmond',
                                const: 11809862
                            },
                            {
                                title: 'Metropolitan Southwark',
                                const: 11809691
                            },
                            {
                                title: 'Metropolitan Sutton',
                                const: 11809805
                            },
                            {
                                title: 'Metropolitan Tower Hamlets',
                                const: 11809767
                            },
                            {
                                title: 'Metropolitan Waltham Forest',
                                const: 11809726
                            },
                            {
                                title: 'Metropolitan Wandsworth',
                                const: 11809771
                            },
                            {
                                title: 'Metropolitan Westminster',
                                const: 11809683
                            },
                            {
                                title: 'Norfolk Constabulary',
                                const: 10000185
                            },
                            {
                                title: 'North Yorkshire Police',
                                const: 10000189
                            },
                            {
                                title: 'Northamptonshire Police',
                                const: 10000191
                            },
                            {
                                title: 'Northumbria Police',
                                const: 10000195
                            },
                            {
                                title: 'Nottinghamshire Police',
                                const: 10000199
                            },
                            {
                                title: 'South Yorkshire Police',
                                const: 10000218
                            },
                            {
                                title: 'Staffordshire Police',
                                const: 10000223
                            },
                            {
                                title: 'Suffolk Constabulary',
                                const: 10000233
                            },
                            {
                                title: 'Surrey Police',
                                const: 10000237
                            },
                            {
                                title: 'Sussex Police',
                                const: 10000240
                            },
                            {
                                title: 'Thames Valley Police',
                                const: 10000247
                            },
                            {
                                title: 'Warwickshire Police',
                                const: 10000274
                            },
                            {
                                title: 'West Mercia Police',
                                const: 10000279
                            },
                            {
                                title: 'West Midlands Police',
                                const: 10000285
                            },
                            {
                                title: 'West Yorkshire Police',
                                const: 10000291
                            },
                            {
                                title: 'Wiltshire Police',
                                const: 10000295
                            },
                            {
                                title: 'Police Scotland Argyll and West Dunbartonshire',
                                const: 12607027
                            },
                            {
                                title: 'Police Scotland Ayrshire',
                                const: 12157147
                            },
                            {
                                title: 'Police Scotland Dumfries and Galloway',
                                const: 10000098
                            },
                            {
                                title: 'Police Scotland Edinburgh',
                                const: 13400412
                            },
                            {
                                title: 'Police Scotland Fife',
                                const: 10002424
                            },
                            {
                                title: 'Police Scotland Forth Valley',
                                const: 10000045
                            },
                            {
                                title: 'Police Scotland Greater Glasgow',
                                const: 12607023
                            },
                            {
                                title: 'Police Scotland Highland and Islands',
                                const: 10000193
                            },
                            {
                                title: 'Police Scotland Lanarkshire',
                                const: 12607028
                            },
                            {
                                title: 'Police Scotland North East',
                                const: 10000133
                            },
                            {
                                title: 'Police Scotland Renfrewshire and Inverclyde',
                                const: 12607026
                            },
                            {
                                title: 'Police Scotland Tayside',
                                const: 10000243
                            },
                            {
                                title: 'Police Scotland The Lothians and Scottish Borders',
                                const: 13400413
                            },
                            {
                                title: 'Dyfed-Powys',
                                const: 10000109
                            },
                            {
                                title: 'Gwent',
                                const: 10000147
                            },
                            {
                                title: 'North Wales',
                                const: 10000187
                            },
                            {
                                title: 'South Wales',
                                const: 10000215
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'crime'
                            }
                        }
                    },
                    'additional-info-help-text': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with which police force is investigating",html: \'<p class="govuk-body">If more than 1 police force is investigating the crime, you can provide additional details later in this claim.</p><p class="govuk-body">See a list of all <a class="govuk-link" href="/police-forces" target="_blank">police forces in England, Scotland and Wales (opens in a new tab)</a>.</p><p class="govuk-body">If you can’t find the police force in the list, make the closest selection you can then provide additional details later in this claim.</p>\'})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q-police-force-id': 'Select a police force from the list'
                    }
                },
                examples: [
                    {
                        'q-police-force-id': 10000147
                    }
                ],
                invalidExamples: [
                    {
                        'q-police-force-id': 999999999
                    },
                    {
                        'q-police-force-id': '10000147'
                    }
                ]
            }
        },
        'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police'
                },
                translations: [
                    {
                        language: 'en',
                        namespace:
                            'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police',
                        resources: {
                            'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': {
                                description: 'Select all options that apply to you.',
                                'description_someone-else': 'Select all options that apply.',
                                error: {
                                    required:
                                        'Select if you were under 18, unable to report the crime or other reasons',
                                    'required_someone-else':
                                        'Select if they were under 18, unable to report the crime or other reasons'
                                },
                                value: {
                                    'i-was-under-18': 'I was under 18',
                                    'i-was-under-18_someone-else': 'The child was under 18',
                                    'unable-to-report-crime': 'Unable to report the crime',
                                    'unable-to-report-crime_someone-else':
                                        'The child was unable to report the crime'
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: [
                    'q-applicant-explain-reason-for-delay-reporting',
                    'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police'
                ],
                additionalProperties: false,
                properties: {
                    'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': {
                        title: 'Select reasons for the delay in reporting the crime to the police',
                        type: 'array',
                        maxItems: 3,
                        uniqueItems: true,
                        description:
                            'l10nt:q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police.description{?lng,context,ns}',
                        items: {
                            anyOf: [
                                {
                                    title:
                                        'l10nt:q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police.value.i-was-under-18{?lng,context,ns}',
                                    const: 'i-was-under-18'
                                },
                                {
                                    title:
                                        'l10nt:q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police.value.unable-to-report-crime{?lng,context,ns}',
                                    const: 'unable-to-report-crime'
                                },
                                {
                                    title: 'Other reasons',
                                    const: 'other'
                                }
                            ]
                        },
                        meta: {
                            classifications: {
                                theme: 'crime'
                            },
                            summary: {
                                title: 'Reasons for delay in reporting'
                            }
                        }
                    },
                    'q-applicant-explain-reason-for-delay-reporting': {
                        title: 'Briefly explain these reasons',
                        type: 'string',
                        maxLength: 500,
                        errorMessage: {
                            maxLength: 'Explanation must be 500 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'crime'
                            },
                            summary: {
                                title:
                                    'Briefly explain reasons for the delay in reporting the crime to the police'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police':
                            'l10nt:q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police.error.required{?lng,context,ns}',
                        'q-applicant-explain-reason-for-delay-reporting':
                            'Explain the reasons for the delay in reporting the crime to the police'
                    }
                },
                examples: [
                    {
                        'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': [
                            'i-was-under-18',
                            'unable-to-report-crime',
                            'other'
                        ],
                        'q-applicant-explain-reason-for-delay-reporting': 'Some reasons'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': [
                            'foo'
                        ],
                        'q-applicant-explain-reason-for-delay-reporting': 'Some reasons'
                    },
                    {
                        'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': [
                            12345
                        ],
                        'q-applicant-explain-reason-for-delay-reporting': 'Some reasons'
                    },
                    {
                        'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': [
                            'i-was-under-18',
                            'unable-to-report-crime',
                            'other'
                        ],
                        'q-applicant-explain-reason-for-delay-reporting': 12345
                    }
                ]
            }
        },
        'p-offender-do-you-know-the-name-of-the-offender': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-offender-do-you-know-the-name-of-the-offender'],
                additionalProperties: false,
                properties: {
                    'q-offender-do-you-know-the-name-of-the-offender': {
                        title: "Do you know the offender's name?",
                        type: 'boolean',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'offender'
                            }
                        }
                    },
                    'additional-info-help-text': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with offender\'s name",html: \'<p class="govuk-body">If there was more than one offender, you can provide additional details later in this claim.</p>\'})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q-offender-do-you-know-the-name-of-the-offender':
                            "Select yes if you know the offender's name"
                    }
                },
                examples: [
                    {
                        'q-offender-do-you-know-the-name-of-the-offender': true
                    },
                    {
                        'q-offender-do-you-know-the-name-of-the-offender': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-offender-do-you-know-the-name-of-the-offender': 'foo'
                    }
                ]
            }
        },
        'p-offender-enter-offenders-name': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-offender-enter-offenders-name'],
                additionalProperties: false,
                properties: {
                    'q-offender-enter-offenders-name': {
                        title: "Enter the offender's name",
                        type: 'string',
                        description: 'We will never contact the offender.',
                        maxLength: 120,
                        errorMessage: {
                            maxLength: "Offender's name must be 120 characters or less"
                        },
                        meta: {
                            classifications: {
                                theme: 'offender'
                            },
                            summary: {
                                title: 'Offenders name'
                            }
                        }
                    },
                    'additional-info-help-text': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with offender\'s name",html: \'<p class="govuk-body">If there was more than one offender, you can provide additional details later in this claim.</p>\'})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q-offender-enter-offenders-name': "Enter the offender's name"
                    }
                },
                examples: [
                    {
                        'q-offender-enter-offenders-name': 'Foo Bar'
                    }
                ],
                invalidExamples: [
                    {
                        'q-offender-enter-offenders-name': 12345
                    }
                ]
            }
        },
        'p-offender-do-you-have-contact-with-offender': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-offender-do-you-have-contact-with-offender'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-offender-do-you-have-contact-with-offender',
                        resources: {
                            'q-offender-do-you-have-contact-with-offender': {
                                title: 'Do you have contact with the offender?',
                                'title_someone-else':
                                    'Does the child have contact with the offender?',
                                error: {
                                    required: 'Select yes if you have contact with the offender',
                                    'required_someone-else':
                                        'Select yes if the child has contact with the offender'
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-offender-do-you-have-contact-with-offender'],
                additionalProperties: false,
                properties: {
                    'q-offender-do-you-have-contact-with-offender': {
                        type: 'boolean',
                        title:
                            'l10nt:q-offender-do-you-have-contact-with-offender.title{?lng,context,ns}',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'offender'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-offender-do-you-have-contact-with-offender':
                            'l10nt:q-offender-do-you-have-contact-with-offender.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-offender-do-you-have-contact-with-offender': true
                    },
                    {
                        'q-offender-do-you-have-contact-with-offender': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-offender-do-you-have-contact-with-offender': 'foo'
                    }
                ]
            }
        },
        'p-offender-describe-contact-with-offender': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-offender-describe-contact-with-offender'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-offender-describe-contact-with-offender',
                        resources: {
                            'q-offender-describe-contact-with-offender': {
                                title: 'Describe your contact with the offender',
                                'title_someone-else':
                                    "Describe the child's contact with the offender",
                                error: {
                                    required: 'Describe your contact with the offender',
                                    'required_someone-else':
                                        "Describe the child's contact with the offender"
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-offender-describe-contact-with-offender'],
                properties: {
                    'q-offender-describe-contact-with-offender': {
                        type: 'string',
                        title:
                            'l10nt:q-offender-describe-contact-with-offender.title{?lng,context,ns}',
                        description:
                            'We cannot pay compensation if the offender may benefit from it.',
                        maxLength: 500,
                        errorMessage: {
                            maxLength: 'Description must be 500 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'offender'
                            },
                            summary: {
                                title: 'Brief description'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-offender-describe-contact-with-offender':
                            'l10nt:q-offender-describe-contact-with-offender.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-offender-describe-contact-with-offender': 'Some contact'
                    }
                ],
                invalidExamples: [
                    {
                        'q-offender-describe-contact-with-offender': 12345
                    }
                ]
            }
        },
        'p-applicant-have-you-applied-to-us-before': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-have-you-applied-to-us-before'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-have-you-applied-to-us-before',
                        resources: {
                            'q-applicant-have-you-applied-to-us-before': {
                                title: 'Have you applied to us before?',
                                'title_someone-else':
                                    'Have you applied to us before on behalf of the child?',
                                error: {
                                    required: 'Select yes if you have applied to us before',
                                    'required_someone-else':
                                        'Select yes if you have applied to us before on behalf of the child'
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                propertyNames: {
                    enum: [
                        'q-applicant-have-you-applied-to-us-before',
                        'q-enter-your-previous-reference-number'
                    ]
                },
                properties: {
                    'q-applicant-have-you-applied-to-us-before': {
                        title:
                            'l10nt:q-applicant-have-you-applied-to-us-before.title{?lng,context,ns}',
                        type: 'boolean',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'other-compensation'
                            }
                        }
                    },
                    'q-enter-your-previous-reference-number': {
                        type: 'string',
                        title: 'Enter your previous reference number if you know it (optional)',
                        maxLength: 50,
                        errorMessage: {
                            maxLength: 'Previous reference number must be 50 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'other-compensation'
                            }
                        }
                    }
                },
                required: ['q-applicant-have-you-applied-to-us-before'],
                allOf: [
                    {
                        $ref:
                            '#/definitions/if-true-then-q-enter-your-previous-reference-number-is-required'
                    }
                ],
                definitions: {
                    'if-true-then-q-enter-your-previous-reference-number-is-required': {
                        if: {
                            properties: {
                                'q-applicant-have-you-applied-to-us-before': {
                                    const: true
                                }
                            }
                        },
                        then: {
                            propertyNames: {
                                enum: [
                                    'q-applicant-have-you-applied-to-us-before',
                                    'q-enter-your-previous-reference-number'
                                ]
                            }
                        },
                        else: {
                            propertyNames: {
                                enum: ['q-applicant-have-you-applied-to-us-before']
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-have-you-applied-to-us-before':
                            'l10nt:q-applicant-have-you-applied-to-us-before.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-have-you-applied-to-us-before': true,
                        'q-enter-your-previous-reference-number': '11//123456'
                    },
                    {
                        'q-applicant-have-you-applied-to-us-before': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-have-you-applied-to-us-before': false,
                        'q-enter-your-previous-reference-number': '11//123456'
                    },
                    {
                        'q-applicant-have-you-applied-to-us-before': true,
                        'q-enter-your-previous-reference-number': 12345
                    }
                ]
            }
        },
        'p-applicant-have-you-applied-for-or-received-any-other-compensation': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-have-you-applied-for-or-received-any-other-compensation'
                },
                translations: [
                    {
                        language: 'en',
                        namespace:
                            'p-applicant-have-you-applied-for-or-received-any-other-compensation',
                        resources: {
                            'q-applicant-have-you-applied-for-or-received-any-other-compensation': {
                                title:
                                    'Have you applied for or received any other form of compensation?',
                                'title_someone-else':
                                    'Have you applied for or received any other form of compensation on behalf of the child?',
                                error: {
                                    required:
                                        'Select yes if you have applied for any other form of compensation',
                                    'required_someone-else':
                                        'Select yes if you have applied for any other form of compensation on behalf of the child'
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-have-you-applied-for-or-received-any-other-compensation'],
                additionalProperties: false,
                properties: {
                    'q-applicant-have-you-applied-for-or-received-any-other-compensation': {
                        type: 'boolean',
                        title:
                            'l10nt:q-applicant-have-you-applied-for-or-received-any-other-compensation.title{?lng,context,ns}',
                        description:
                            'For example, this may be compensation awarded by a court or in a private settlement.',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'other-compensation'
                            },
                            summary: {
                                title: 'Have you applied for other compensation?'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-have-you-applied-for-or-received-any-other-compensation':
                            'l10nt:q-applicant-have-you-applied-for-or-received-any-other-compensation.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-have-you-applied-for-or-received-any-other-compensation': true
                    },
                    {
                        'q-applicant-have-you-applied-for-or-received-any-other-compensation': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-have-you-applied-for-or-received-any-other-compensation': 'foo'
                    }
                ]
            }
        },
        'p-applicant-enter-your-name': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-enter-your-name'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-enter-your-name',
                        resources: {
                            title: 'Enter your name',
                            'title_someone-else': "Enter the child's name",
                            'q-applicant-title': {
                                error: {
                                    required: 'Enter your title',
                                    'required_someone-else': "Enter the child's title"
                                }
                            },
                            'q-applicant-first-name': {
                                error: {
                                    required: 'Enter your first name',
                                    'required_someone-else': "Enter the child's first name"
                                }
                            },
                            'q-applicant-last-name': {
                                error: {
                                    required: 'Enter your last name',
                                    'required_someone-else': "Enter the child's last name"
                                }
                            },
                            meta: {
                                summary: {
                                    title: 'Your name',
                                    'title_someone-else': "The child's name"
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                allOf: [
                    {
                        title: 'l10nt:title{?lng,context,ns}',
                        meta: {
                            compositeId: 'applicant-name',
                            classifications: {
                                theme: 'applicant-details'
                            },
                            summary: {
                                title: 'l10nt:meta.summary.title{?lng,context,ns}'
                            }
                        },
                        required: [
                            'q-applicant-title',
                            'q-applicant-first-name',
                            'q-applicant-last-name'
                        ],
                        propertyNames: {
                            enum: [
                                'q-applicant-title',
                                'q-applicant-first-name',
                                'q-applicant-last-name'
                            ]
                        },
                        allOf: [
                            {
                                properties: {
                                    'q-applicant-title': {
                                        title: 'Title',
                                        type: 'string',
                                        maxLength: 6,
                                        errorMessage: {
                                            maxLength: 'Title must be 6 characters or less'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'applicant-details'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'q-applicant-first-name': {
                                        title: 'First name',
                                        type: 'string',
                                        maxLength: 70,
                                        errorMessage: {
                                            maxLength: 'First name must be 70 characters or less'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'applicant-details'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'q-applicant-last-name': {
                                        title: 'Last name',
                                        type: 'string',
                                        maxLength: 70,
                                        errorMessage: {
                                            maxLength: 'Last name must be 70 characters or less'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'applicant-details'
                                            }
                                        }
                                    }
                                }
                            }
                        ],
                        errorMessage: {
                            required: {
                                'q-applicant-title':
                                    'l10nt:q-applicant-title.error.required{?lng,context,ns}',
                                'q-applicant-first-name':
                                    'l10nt:q-applicant-first-name.error.required{?lng,context,ns}',
                                'q-applicant-last-name':
                                    'l10nt:q-applicant-last-name.error.required{?lng,context,ns}'
                            }
                        }
                    }
                ],
                examples: [
                    {
                        'q-applicant-title': 'Mr',
                        'q-applicant-first-name': 'Foo',
                        'q-applicant-last-name': 'Bar'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-title': 12345,
                        'q-applicant-first-name': 'Foo',
                        'q-applicant-last-name': 'Bar'
                    },
                    {
                        'q-applicant-title': 'Mr',
                        'q-applicant-first-name': 12345,
                        'q-applicant-last-name': 'Bar'
                    },
                    {
                        'q-applicant-title': 'Mr',
                        'q-applicant-first-name': 'Foo',
                        'q-applicant-last-name': 12345
                    }
                ]
            }
        },
        'p-applicant-have-you-been-known-by-any-other-names': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-have-you-been-known-by-any-other-names'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-have-you-been-known-by-any-other-names',
                        resources: {
                            'q-applicant-have-you-been-known-by-any-other-names': {
                                title: 'Have you ever been known by any other names?',
                                'title_someone-else':
                                    'Have they ever been known by any other names?',
                                error: {
                                    required:
                                        'Select yes if you have been known by any other names',
                                    'required_someone-else':
                                        'Select yes if they have been known by any other names'
                                },
                                meta: {
                                    summary: {
                                        title: 'Have you been known by another name?',
                                        'title_someone-else':
                                            'Have they been known by another name?'
                                    }
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-have-you-been-known-by-any-other-names'],
                additionalProperties: false,
                properties: {
                    'q-applicant-have-you-been-known-by-any-other-names': {
                        type: 'boolean',
                        title:
                            'l10nt:q-applicant-have-you-been-known-by-any-other-names.title{?lng,context,ns}',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'applicant-details'
                            },
                            summary: {
                                title:
                                    'l10nt:q-applicant-have-you-been-known-by-any-other-names.meta.summary.title{?lng,context,ns}'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-have-you-been-known-by-any-other-names':
                            'l10nt:q-applicant-have-you-been-known-by-any-other-names.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-have-you-been-known-by-any-other-names': true
                    },
                    {
                        'q-applicant-have-you-been-known-by-any-other-names': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-have-you-been-known-by-any-other-names': 'foo'
                    }
                ]
            }
        },
        'p-applicant-what-other-names-have-you-used': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-what-other-names-have-you-used'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-what-other-names-have-you-used',
                        resources: {
                            'q-applicant-what-other-names-have-you-used': {
                                title: 'What other names have you used?',
                                'title_someone-else': 'What other names have they used?',
                                error: {
                                    required: 'Enter the other names you have used',
                                    maxLength:
                                        'Other names you have used must be 50 characters or less',
                                    'required_someone-else': 'Enter the other names they have used',
                                    'maxLength_someone-else':
                                        'Other names they have used must be 50 characters or less'
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-what-other-names-have-you-used'],
                additionalProperties: false,
                properties: {
                    'q-applicant-what-other-names-have-you-used': {
                        type: 'string',
                        title:
                            'l10nt:q-applicant-what-other-names-have-you-used.title{?lng,context,ns}',
                        maxLength: 50,
                        errorMessage: {
                            maxLength:
                                'l10nt:q-applicant-what-other-names-have-you-used.error.maxLength{?lng,context,ns}'
                        },
                        meta: {
                            classifications: {
                                theme: 'applicant-details'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-what-other-names-have-you-used':
                            'l10nt:q-applicant-what-other-names-have-you-used.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-what-other-names-have-you-used': 'Mr Biz Baz'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-what-other-names-have-you-used': 12345
                    }
                ]
            }
        },
        'p-applicant-enter-your-date-of-birth': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-enter-your-date-of-birth'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-enter-your-date-of-birth',
                        resources: {
                            'q-applicant-enter-your-date-of-birth': {
                                title: 'Enter your date of birth',
                                'title_someone-else': 'Enter their date of birth',
                                error: {
                                    required:
                                        'Enter your date of birth and include a day, month and year',
                                    format:
                                        'Enter your date of birth and include a day, month and year',
                                    'required_someone-else':
                                        'Enter their date of birth and include a day, month and year',
                                    'format_someone-else':
                                        'Enter their date of birth and include a day, month and year'
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-enter-your-date-of-birth'],
                additionalProperties: false,
                properties: {
                    'q-applicant-enter-your-date-of-birth': {
                        title: 'l10nt:q-applicant-enter-your-date-of-birth.title{?lng,context,ns}',
                        meta: {
                            keywords: {
                                format: {
                                    precision: 'YYYY-MM-DD'
                                }
                            },
                            classifications: {
                                theme: 'applicant-details'
                            },
                            summary: {
                                title: 'Date of birth'
                            }
                        },
                        type: 'string',
                        format: 'date-time',
                        description: 'For example, 31 3 1980.',
                        errorMessage: {
                            format:
                                'l10nt:q-applicant-enter-your-date-of-birth.error.format{?lng,context,ns}'
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-enter-your-date-of-birth':
                            'l10nt:q-applicant-enter-your-date-of-birth.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-enter-your-date-of-birth': '1970-01-01T00:00:00.000Z'
                    },
                    {
                        'q-applicant-enter-your-date-of-birth': '2019-01-01T00:00:00.000Z'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-enter-your-date-of-birth': 12345
                    },
                    {
                        'q-applicant-enter-your-date-of-birth': 'not a date'
                    }
                ]
            }
        },
        'p-applicant-enter-your-email-address': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'q-applicant-enter-your-email-address': {
                        type: 'string',
                        title: 'Enter your email address',
                        description:
                            'We may use this to contact you if we need to clarify something in this application form (optional).',
                        maxLength: 50,
                        format: 'email',
                        errorMessage: {
                            maxLength: 'Email address must be 50 characters or less',
                            format: 'Enter your email address, for example john.smith@email.com'
                        },
                        meta: {
                            classifications: {
                                theme: 'applicant-details'
                            },
                            summary: {
                                title: 'Email address'
                            }
                        }
                    }
                },
                examples: [
                    {
                        'q-applicant-enter-your-email-address': 'foo@hhjhjk34h5jkh24kj5h2k45.com'
                    },
                    {}
                ],
                invalidExamples: [
                    {
                        'q-applicant-enter-your-email-address': 12345
                    }
                ]
            }
        },
        'p-applicant-enter-your-address': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-enter-your-address'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-enter-your-address',
                        resources: {
                            title: 'Enter your address',
                            'title_someone-else': 'Enter their address',
                            'q-applicant-building-and-street': {
                                error: {
                                    required: 'Enter the building and street where you live',
                                    'required_someone-else':
                                        'Enter the building and street where they live'
                                }
                            },
                            'q-applicant-town-or-city': {
                                error: {
                                    required: 'Enter the town or city where you live',
                                    'required_someone-else':
                                        'Enter the town or city where they live'
                                }
                            },
                            meta: {
                                summary: {
                                    title: 'Your address',
                                    'title_someone-else': 'Their address'
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                allOf: [
                    {
                        title: 'l10nt:title{?lng,context,ns}',
                        meta: {
                            compositeId: 'applicant-address',
                            classifications: {
                                theme: 'applicant-details'
                            },
                            summary: {
                                title: 'l10nt:meta.summary.title{?lng,context,ns}'
                            }
                        },
                        required: ['q-applicant-building-and-street', 'q-applicant-town-or-city'],
                        propertyNames: {
                            enum: [
                                'q-applicant-building-and-street',
                                'q-applicant-building-and-street-2',
                                'q-applicant-town-or-city',
                                'q-applicant-county',
                                'q-applicant-postcode'
                            ]
                        },
                        allOf: [
                            {
                                properties: {
                                    'q-applicant-building-and-street': {
                                        type: 'string',
                                        title: 'Building and street',
                                        maxLength: 60,
                                        errorMessage: {
                                            maxLength:
                                                'First line of address must be less than 60 characters'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'applicant-details'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'q-applicant-building-and-street-2': {
                                        type: 'string',
                                        title: 'Building and street line 2',
                                        maxLength: 60,
                                        errorMessage: {
                                            maxLength:
                                                'Second line of address must be less than 60 characters'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'applicant-details'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'q-applicant-town-or-city': {
                                        type: 'string',
                                        title: 'Town or city',
                                        maxLength: 32,
                                        errorMessage: {
                                            maxLength: 'Town or city must be 32 characters or less'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'applicant-details'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'q-applicant-county': {
                                        type: 'string',
                                        title: 'County (optional)',
                                        maxLength: 32,
                                        errorMessage: {
                                            maxLength: 'County must be 32 characters or less'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'applicant-details'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'q-applicant-postcode': {
                                        type: 'string',
                                        title: 'Postcode (optional)',
                                        maxLength: 10,
                                        errorMessage: {
                                            maxLength: 'Postcode must be 10 characters or less'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'applicant-details'
                                            }
                                        }
                                    }
                                }
                            }
                        ],
                        errorMessage: {
                            required: {
                                'q-applicant-building-and-street':
                                    'l10nt:q-applicant-building-and-street.error.required{?lng,context,ns}',
                                'q-applicant-town-or-city':
                                    'l10nt:q-applicant-town-or-city.error.required{?lng,context,ns}'
                            }
                        }
                    }
                ],
                examples: [
                    {
                        'q-applicant-building-and-street': '1 Foo Lane',
                        'q-applicant-building-and-street-2': 'Flat 2/3',
                        'q-applicant-town-or-city': 'FooCity',
                        'q-applicant-county': 'FooCounty',
                        'q-applicant-postcode': 'G1 1XX'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-building-and-street': 12345,
                        'q-applicant-building-and-street-2': 'Flat 2/3',
                        'q-applicant-town-or-city': 'FooCity',
                        'q-applicant-county': 'FooCounty',
                        'q-applicant-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-building-and-street': '1 Foo Lane',
                        'q-applicant-building-and-street-2': 12345,
                        'q-applicant-town-or-city': 'FooCity',
                        'q-applicant-county': 'FooCounty',
                        'q-applicant-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-building-and-street': '1 Foo Lane',
                        'q-applicant-building-and-street-2': 'Flat 2/3',
                        'q-applicant-town-or-city': 12345,
                        'q-applicant-county': 'FooCounty',
                        'q-applicant-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-building-and-street': '1 Foo Lane',
                        'q-applicant-building-and-street-2': 'Flat 2/3',
                        'q-applicant-town-or-city': 'FooCity',
                        'q-applicant-county': 12345,
                        'q-applicant-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-building-and-street': '1 Foo Lane',
                        'q-applicant-building-and-street-2': 'Flat 2/3',
                        'q-applicant-town-or-city': 'FooCity',
                        'q-applicant-county': 'FooCounty',
                        'q-applicant-postcode': 12345
                    }
                ]
            }
        },
        'p-applicant-enter-your-telephone-number': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'q-applicant-enter-your-telephone-number': {
                        type: 'string',
                        title: 'Enter your telephone number',
                        description:
                            'We may use this to contact you if we need to clarify something on your application form (optional).',
                        maxLength: 20,
                        pattern: '^[\\+\\d][\\d \\(\\)\\+\\-\\#]{7,19}$',
                        errorMessage: {
                            maxLength: 'Telephone number must be 20 characters or less',
                            pattern:
                                'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 0808 157 0192'
                        },
                        meta: {
                            classifications: {
                                theme: 'applicant-details'
                            },
                            summary: {
                                title: 'Telephone number'
                            }
                        }
                    }
                },
                examples: [
                    {
                        'q-applicant-enter-your-telephone-number': '01632 960 001'
                    },
                    {}
                ],
                invalidExamples: [
                    {
                        'q-applicant-enter-your-telephone-number': 12345
                    }
                ]
            }
        },
        'p--check-your-answers': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'p-check-your-answers': {
                        title: 'Check your answers',
                        type: 'object',
                        properties: {
                            summaryInfo: {}
                        }
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p--confirmation': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p--confirmation'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p--confirmation',
                        resources: {
                            confirmation: {
                                description:
                                    '{% set mobilePhoneNumber = "||/answers/p-applicant-confirmation-method/q-applicant-enter-your-telephone-number||" %}{% set emailAddress = "||/answers/p-applicant-confirmation-method/q-applicant-enter-your-email-address||" %}{% set caseReferenceNumber = "||/answers/system/case-reference||" %}{% if mobilePhoneNumber %}{% set contactMethod =  mobilePhoneNumber %}{% else %}{% set contactMethod =  emailAddress %}{% endif %}{% if caseReferenceNumber %}{% set html =  "<p>Your reference number is <br /><strong>" + caseReferenceNumber + "</strong></p><p>We have sent a confirmation to <strong>" + contactMethod + "</strong></p>" %}{% else %}{% set html =  "<p>We\'ll send your confirmation to <strong>" + contactMethod + "</strong> soon</p>" %}{% endif %}{{ govukPanel({titleText: "Application submitted",html: html})}}<p class="govuk-body">Thank you for submitting this application.</p><h2 class="govuk-heading-m">What happens next</h2><p class="govuk-body">We will:</p><ul class="govuk-list govuk-list--bullet"><li>ask the police for evidence</li><li>ask for medical information if required</li><li>ask you for more information if we need it</li><li>make a decision</li><li>send our decision letter by post</li></ul><p class="govuk-body">We aim to make a decision within one year but it can take longer. We may have to wait until there’s enough information about your injuries and recovery.</p><p class="govuk-body">Read our <a class="govuk-link" target="_blank" href="https://www.gov.uk/government/organisations/criminal-injuries-compensation-authority/about-our-services">Customer Charter (opens in new tab)</a></p>{{ govukWarningText({text: "You must inform us immediately if any of the information you have given us changes, especially your address, telephone number or email address.",iconFallbackText: "Warning"}) }}<h2 class="govuk-heading-m">Contact us</h2><p class="govuk-body govuk-!-margin-bottom-1">Email: <a href="mailto:info@cica.gov.uk" class="govuk-link">info@cica.gov.uk</a></p>{% include \'contact.njk\' %}<p class="govuk-body">We will not always send an acknowledgement if you:</p><ul class="govuk-list govuk-list--bullet"><li>email us</li><li>write to us</li><li>send us documents</li></ul><h2 class="govuk-heading-m">Help us improve this service</h2><p class="govuk-body">You can complete a short survey to help us improve this service.</p><p class="govuk-body">It does not ask for any details about your case and has no impact on your application.</p><p class="govuk-body"><a class="govuk-link" target="_blank" href="https://www.surveymonkey.com/r/Privatebetafeedback">Tell us what you think of our service (opens in new tab)</a> (takes 10 minutes)</p>',
                                'description_someone-else':
                                    '{% set mobilePhoneNumber = "||/answers/p-applicant-confirmation-method/q-applicant-enter-your-telephone-number||" %}{% set emailAddress = "||/answers/p-applicant-confirmation-method/q-applicant-enter-your-email-address||" %}{% set caseReferenceNumber = "||/answers/system/case-reference||" %}{% if mobilePhoneNumber %}{% set contactMethod =  mobilePhoneNumber %}{% else %}{% set contactMethod =  emailAddress %}{% endif %}{% if caseReferenceNumber %}{% set html =  "<p>Your reference number is <br /><strong>" + caseReferenceNumber + "</strong></p><p>We have sent a confirmation to <strong>" + contactMethod + "</strong></p>" %}{% else %}{% set html =  "<p>We\'ll send your confirmation to <strong>" + contactMethod + "</strong> soon</p>" %}{% endif %}{{ govukPanel({titleText: "Application submitted",html: html})}}<p class="govuk-body">Thank you for submitting this application.</p><h2 class="govuk-heading-m">Send proof you can apply on the child\'s behalf</h2><p class="govuk-body">You need to send proof that you have the right to apply on the child\'s behalf.</p><p class="govuk-body">This proof can be one of the following documents:</p><ul class="govuk-list govuk-list--bullet"><li>the child\'s full birth certificate</li><li>adoption documents</li><li>a parental responsibility agreement</li><li>a court order</li></ul><p class="govuk-body">You should copy the document in one of these ways to send to us:</p><ul class="govuk-list govuk-list--bullet"><li>take a photo</li><li>scan a copy</li><li>make a photocopy </li></ul><p class="govuk-body">You should email your documents to us at <a class="govuk-link" target="_blank" href="mailto:centraladminaction@cica.gov.uk">centraladminaction@cica.gov.uk</a>.</p><p class="govuk-body">If you cannot send these documents by email, you can post them to us at:</p>{{ govukInsetText({html: \'<p class="govuk-body govuk-!-margin-bottom-1"><strong>Criminal Injuries Compensation Authority</strong></p><p class="govuk-body govuk-!-margin-bottom-1">Alexander Bain House</p><p class="govuk-body govuk-!-margin-bottom-1">Atlantic Quay</p><p class="govuk-body govuk-!-margin-bottom-1">15 York Street</p><p class="govuk-body govuk-!-margin-bottom-1">Glasgow</p><p class="govuk-body govuk-!-margin-bottom-1">G2 8JQ</p><p class="govuk-body">United Kingdom</p>\'})}}<h2 class="govuk-heading-m">What happens next</h2><p class="govuk-body">We will:</p><ul class="govuk-list govuk-list--bullet"><li>ask the police for evidence</li><li>ask for medical information if required</li><li>ask you for more information if we need it</li><li>make a decision</li><li>send our decision letter by post</li></ul><p class="govuk-body">We aim to make a decision within one year but it can take longer. We may have to wait until there’s enough information about your injuries and recovery.</p><p class="govuk-body">Read our <a class="govuk-link" target="_blank" href="https://www.gov.uk/government/organisations/criminal-injuries-compensation-authority/about-our-services">Customer Charter (opens in new tab)</a></p>{{ govukWarningText({text: "You must inform us immediately if any of the information you have given us changes, especially your address, telephone number or email address.",iconFallbackText: "Warning"}) }}<h2 class="govuk-heading-m">Contact us</h2><p class="govuk-body govuk-!-margin-bottom-1">Email: <a href="mailto:info@cica.gov.uk" class="govuk-link">info@cica.gov.uk</a></p>{% include \'contact.njk\' %}<p class="govuk-body">We will not always send an acknowledgement if you:</p><ul class="govuk-list govuk-list--bullet"><li>email us</li><li>write to us</li><li>send us documents</li></ul><h2 class="govuk-heading-m">Help us improve this service</h2><p class="govuk-body">You can complete a short survey to help us improve this service.</p><p class="govuk-body">It does not ask for any details about your case and has no impact on your application.</p><p class="govuk-body"><a class="govuk-link" target="_blank" href="https://www.surveymonkey.com/r/Privatebetafeedback">Tell us what you think of our service (opens in new tab)</a> (takes 10 minutes)</p>'
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    confirmation: {
                        title: 'Confirmation',
                        description: 'l10nt:confirmation.description{?lng,context,ns}'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p-applicant-you-cannot-get-compensation': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'you-cannot-get-compensation': {
                        title: 'You cannot get compensation',
                        description:
                            '{% from "components/warning-text/macro.njk" import govukWarningText %}<p class="govuk-body">You cannot get compensation if the crime has not been reported to the police.</p>{{ govukWarningText({text: "If you submit a claim before the crime has been reported to the police, the claim will be refused and you will not be able to try again.",iconFallbackText: "Warning"}) }}'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p--context-offender': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p--context-offender'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p--context-offender',
                        resources: {
                            'offender-context': {
                                description:
                                    '<p class="govuk-body">We’re going to ask:</p><ul class="govuk-list govuk-list--bullet"><li>the offender\'s name (if you know it)</li><li>if you have contact with the offender</li></ul><p class="govuk-body">This is so we can make sure the offender does not benefit from any compensation you get.</p><p class="govuk-body">We will never contact the offender.</p>',
                                'description_someone-else':
                                    '<p class="govuk-body">We’re going to ask:</p><ul class="govuk-list govuk-list--bullet"><li>the offender\'s name (if you know it)</li><li>if the child has contact with the offender</li></ul><p class="govuk-body">This is so we can make sure the offender does not benefit from any compensation.</p><p class="govuk-body">We will never contact the offender.</p>'
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'offender-context': {
                        title: 'About the offender',
                        description: 'l10nt:offender-context.description{?lng,context,ns}'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p--context-compensation': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p--context-compensation'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p--context-compensation',
                        resources: {
                            'compensation-context': {
                                description:
                                    '<p class="govuk-body">We\'re going to ask about any other compensation you\'ve been paid for your injuries.</p><p class="govuk-body">This is so we can work out how much compensation you may receive.</p>',
                                'description_someone-else':
                                    '<p class="govuk-body">We\'re going to ask about any other compensation the child has been paid for their injuries.</p><p class="govuk-body">This is so we can work out how much compensation the child may receive.</p>'
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'compensation-context': {
                        title: 'Other compensation',
                        description: 'l10nt:compensation-context.description{?lng,context,ns}'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p-applicant-applied-for-other-compensation-briefly-explain-why-not': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-applied-for-other-compensation-briefly-explain-why-not'
                },
                translations: [
                    {
                        language: 'en',
                        namespace:
                            'p-applicant-applied-for-other-compensation-briefly-explain-why-not',
                        resources: {
                            'q-applicant-applied-for-other-compensation-briefly-explain-why-not': {
                                title:
                                    'Tell us why you have not applied for or received any other compensation',
                                'title_someone-else':
                                    'Tell us why you have not applied for or received any other compensation on behalf of the child'
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                required: ['q-applicant-applied-for-other-compensation-briefly-explain-why-not'],
                properties: {
                    'q-applicant-applied-for-other-compensation-briefly-explain-why-not': {
                        title:
                            'l10nt:q-applicant-applied-for-other-compensation-briefly-explain-why-not.title{?lng,context,ns}',
                        type: 'string',
                        maxLength: 500,
                        errorMessage: {
                            maxLength: 'Explanation must be 500 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'other-compensation'
                            },
                            summary: {
                                title: 'Reasons for not applying for other compensation'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-applied-for-other-compensation-briefly-explain-why-not':
                            'Enter a reason'
                    }
                },
                examples: [
                    {
                        'q-applicant-applied-for-other-compensation-briefly-explain-why-not': 'blah'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-applied-for-other-compensation-briefly-explain-why-not': 12345
                    }
                ]
            }
        },
        'p-applicant-who-did-you-apply-to': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-who-did-you-apply-to'],
                properties: {
                    'q-applicant-who-did-you-apply-to': {
                        title: 'Who have you applied to or received compensation from?',
                        type: 'string',
                        maxLength: 50,
                        errorMessage: {
                            maxLength:
                                'Who you applied to or received compensation from must be 50 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'other-compensation'
                            },
                            summary: {
                                title: 'Who have you applied for compensation from?'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-who-did-you-apply-to':
                            'Enter who you applied to or received compensation from'
                    }
                },
                examples: [
                    {
                        'q-applicant-who-did-you-apply-to': 'blah'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-who-did-you-apply-to': 12345
                    }
                ]
            }
        },
        'p-applicant-has-a-decision-been-made': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                required: ['q-applicant-has-a-decision-been-made'],
                properties: {
                    'q-applicant-has-a-decision-been-made': {
                        title: 'Have they made a decision about your claim?',
                        type: 'boolean',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'other-compensation'
                            },
                            summary: {
                                title: 'Have they made a decision?'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-has-a-decision-been-made':
                            'Select yes if you have received a decision about the other compensation claim'
                    }
                },
                examples: [
                    {
                        'q-applicant-has-a-decision-been-made': true
                    },
                    {
                        'q-applicant-has-a-decision-been-made': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-has-a-decision-been-made': 'foo'
                    }
                ]
            }
        },
        'p-applicant-how-much-was-award': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-how-much-was-award'],
                properties: {
                    'q-how-much-was-award': {
                        title: 'How much compensation were you awarded?',
                        type: 'string',
                        maxLength: 50,
                        errorMessage: {
                            maxLength: 'Award amount must be 50 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'other-compensation'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-how-much-was-award': 'Enter an amount'
                    }
                },
                examples: [
                    {
                        'q-how-much-was-award': 'blah'
                    }
                ],
                invalidExamples: [
                    {
                        'q-how-much-was-award': 12345
                    }
                ]
            }
        },
        'p-applicant-when-will-you-find-out': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-when-will-you-find-out'],
                properties: {
                    'q-when-will-you-find-out': {
                        title: "When will you find out if you've been awarded compensation?",
                        type: 'string',
                        description:
                            'Enter an approximate date, for example, December 2020. If you do not know you can say so.',
                        maxLength: 50,
                        errorMessage: {
                            maxLength: 'When will you find out must be 50 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'other-compensation'
                            },
                            summary: {
                                title: 'When will you find out their decision?'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-when-will-you-find-out': 'Enter an approximate date'
                    }
                },
                examples: [
                    {
                        'q-when-will-you-find-out': 'blah'
                    }
                ],
                invalidExamples: [
                    {
                        'q-when-will-you-find-out': 12345
                    }
                ]
            }
        },
        'p--context-applicant-details': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p--context-applicant-details'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p--context-applicant-details',
                        resources: {
                            'details-context': {
                                title: 'Your details',
                                'title_someone-else': 'Victim details',
                                description:
                                    '<p class="govuk-body">We’re going to ask for some details about you.</p><p class="govuk-body">We’ll use these to:</p><ul class="govuk-list govuk-list--bullet"><li>contact you</li><li>get a report about the crime from the police</li></ul>',
                                'description_someone-else':
                                    '<p class="govuk-body">We’re going to ask for some details about the child.</p><p class="govuk-body">We’ll use these to get a report about the crime from the police.</p>'
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'details-context': {
                        title: 'l10nt:details-context.title{?lng,context,ns}',
                        description: 'l10nt:details-context.description{?lng,context,ns}'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p--context-dmi-details': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p--context-dmi-details'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p--context-dmi-details',
                        resources: {
                            'details-context': {
                                description:
                                    '<p class="govuk-body">We\'re going to ask how the crime affected your mental health.</p><p class="govuk-body">This helps us decide if you\'ll get a payment for mental injury.</p><h2 class="govuk-heading-m">Disabling mental injury</h2><p class="govuk-body">We can only pay for a \'disabling mental injury\' that:</p><ul class="govuk-list govuk-list--bullet"><li>makes it much harder to do things you would normally do</li><li>lasts six weeks or more</li><li>is diagnosed by a clinical psychologist or psychiatrist</li></ul><p class="govuk-body">You can apply if you do not have a diagnosis yet. We\'ll tell you what medical evidence you\'ll need.</p>',
                                'description_someone-else':
                                    '<p class="govuk-body">We\'re going to ask how the crime affected their mental health.</p><p class="govuk-body">This helps us decide if they get a payment for mental injury.</p><h2 class="govuk-heading-m">Disabling mental injury</h2><p class="govuk-body">We can only pay for a \'disabling mental injury\' that:</p><ul class="govuk-list govuk-list--bullet"><li>makes it much harder to do things they would normally do</li><li>lasts six weeks or more</li><li>is diagnosed by a clinical psychologist or psychiatrist</li></ul><p class="govuk-body">You can apply if they do not have a diagnosis yet. We\'ll tell you what medical evidence they\'ll need.</p>',
                                title: 'Your mental health',
                                'title_someone-else': "The child's mental health"
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'details-context': {
                        title: 'l10nt:details-context.title{?lng,context,ns}',
                        description: 'l10nt:details-context.description{?lng,context,ns}'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p-applicant-do-you-have-disabling-mental-injury': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-do-you-have-disabling-mental-injury'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-do-you-have-disabling-mental-injury',
                        resources: {
                            'q-applicant-do-you-have-disabling-mental-injury': {
                                description:
                                    "This means it's much harder than usual to do things you would normally do, like going to work, seeing friends, or having a relationship.",
                                'description_someone-else':
                                    "This means it's much harder than usual to do things they would normally do, like going to school, seeing friends, working or having a relationship.",
                                error: {
                                    required:
                                        'Select yes if you suffered a disabling mental injury',
                                    'required_someone-else':
                                        'Select yes if they suffered a disabling mental injury'
                                },
                                title: 'Do you have a disabling mental injury?',
                                'title_someone-else': 'Do they have a disabling mental injury?'
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-do-you-have-disabling-mental-injury'],
                additionalProperties: false,
                properties: {
                    'q-applicant-do-you-have-disabling-mental-injury': {
                        type: 'boolean',
                        description:
                            'l10nt:q-applicant-do-you-have-disabling-mental-injury.description{?lng,context,ns}',
                        title:
                            'l10nt:q-applicant-do-you-have-disabling-mental-injury.title{?lng,context,ns}',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'mental-health'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-do-you-have-disabling-mental-injury':
                            'l10nt:q-applicant-do-you-have-disabling-mental-injury.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-do-you-have-disabling-mental-injury': true
                    },
                    {
                        'q-applicant-do-you-have-disabling-mental-injury': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-do-you-have-disabling-mental-injury': 'foo'
                    }
                ]
            }
        },
        'p-applicant-mental-injury-duration': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-mental-injury-duration'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-mental-injury-duration',
                        resources: {
                            'q-applicant-mental-injury-duration': {
                                error: {
                                    required:
                                        'Select yes if your mental injury has lasted longer than 6 weeks',
                                    'required_someone-else':
                                        'Select yes if their mental injury has lasted longer than 6 weeks'
                                },
                                title: 'Has your mental injury lasted 6 weeks or more?',
                                'title_someone-else':
                                    'Has this mental injury lasted 6 weeks or more?'
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-mental-injury-duration'],
                additionalProperties: false,
                properties: {
                    'q-applicant-mental-injury-duration': {
                        type: 'boolean',
                        title: 'l10nt:q-applicant-mental-injury-duration.title{?lng,context,ns}',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'mental-health'
                            },
                            summary: {
                                title: 'Has it lasted 6 weeks or more?'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-mental-injury-duration':
                            'l10nt:q-applicant-mental-injury-duration.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-mental-injury-duration': true
                    },
                    {
                        'q-applicant-mental-injury-duration': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-mental-injury-duration': 'foo'
                    }
                ]
            }
        },
        'p-applicant-select-treatments': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-select-treatments'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-select-treatments',
                        resources: {
                            'q-applicant-other-treatment-dmi': {
                                error: {
                                    required:
                                        'Enter any other treatment you have received for your mental injury',
                                    'required_someone-else':
                                        'Enter any other treatment they have received for their mental injury'
                                },
                                title: 'Other mental health treatment'
                            },
                            'q-applicant-select-treatments-dmi': {
                                description: "Include any treatment you're waiting to get.",
                                'description_someone-else':
                                    "Include any treatment they're waiting to get.",
                                error: {
                                    required:
                                        'Select any treatments you have received for your mental injury',
                                    'required_someone-else':
                                        'Select any treatments they have received for their mental injury'
                                },
                                title: 'What mental health treatments have you had?',
                                'title_someone-else': 'What mental health treatments have they had?'
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                propertyNames: {
                    enum: ['q-applicant-select-treatments-dmi', 'q-applicant-other-treatment-dmi']
                },
                properties: {
                    'q-applicant-select-treatments-dmi': {
                        title: 'l10nt:q-applicant-select-treatments-dmi.title{?lng,context,ns}',
                        description:
                            'l10nt:q-applicant-select-treatments-dmi.description{?lng,context,ns}',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'CBT (cognitive behavioural therapy)',
                                    const: 'cbt'
                                },
                                {
                                    title: 'EMDR (eye movement desensitisation and reprocessing)',
                                    const: 'emdr'
                                },
                                {
                                    title: 'Antidepressants',
                                    const: 'antidepressants'
                                },
                                {
                                    title: 'Counselling',
                                    const: 'counselling'
                                },
                                {
                                    title: 'Psychotherapy',
                                    const: 'psychotherapy'
                                },
                                {
                                    title: 'Other',
                                    const: 'other'
                                }
                            ]
                        },
                        meta: {
                            classifications: {
                                theme: 'treatment'
                            }
                        }
                    },
                    'q-applicant-other-treatment-dmi': {
                        type: 'string',
                        title: 'l10nt:q-applicant-other-treatment-dmi.title{?lng,context,ns}',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other treatments must be 499 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'treatment'
                            }
                        }
                    }
                },
                required: ['q-applicant-select-treatments-dmi'],
                allOf: [
                    {
                        $ref:
                            '#/definitions/if-other-then-q-applicant-other-treatment-dmi-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-q-applicant-other-treatment-dmi-is-required': {
                        if: {
                            properties: {
                                'q-applicant-select-treatments-dmi': {
                                    contains: {
                                        const: 'other'
                                    }
                                }
                            },
                            required: ['q-applicant-select-treatments-dmi']
                        },
                        then: {
                            required: ['q-applicant-other-treatment-dmi'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-select-treatments-dmi',
                                    'q-applicant-other-treatment-dmi'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-other-treatment-dmi':
                                        'l10nt:q-applicant-other-treatment-dmi.error.required{?lng,context,ns}'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-select-treatments-dmi':
                            'l10nt:q-applicant-select-treatments-dmi.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-select-treatments-dmi': ['cbt']
                    },
                    {
                        'q-applicant-select-treatments-dmi': ['cbt', 'other'],
                        'q-applicant-other-treatment-dmi': 'some description'
                    },
                    {
                        'q-applicant-select-treatments-dmi': ['emdr']
                    },
                    {
                        'q-applicant-select-treatments-dmi': ['emdr', 'other'],
                        'q-applicant-other-treatment-dmi': 'some description'
                    },
                    {
                        'q-applicant-select-treatments-dmi': ['other'],
                        'q-applicant-other-treatment-dmi': 'some description'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-select-treatments-dmi': {
                            foo: 'bar'
                        }
                    },
                    {
                        'q-applicant-other-treatment-dmi': 'some description'
                    },
                    {
                        'q-applicant-select-treatments-dmi': ['other']
                    }
                ]
            }
        },
        'p-applicant-has-your-treatment-finished-dmi': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-has-your-treatment-finished-dmi'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-has-your-treatment-finished-dmi',
                        resources: {
                            'q-applicant-has-your-treatment-finished-dmi': {
                                error: {
                                    required: 'Select yes if you have finished your treatment',
                                    'required_someone-else':
                                        'Select yes if they have finished their treatment'
                                },
                                title: 'Have you finished your treatment?',
                                'title_someone-else': 'Have they finished their treatment?'
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-has-your-treatment-finished-dmi'],
                additionalProperties: false,
                properties: {
                    'q-applicant-has-your-treatment-finished-dmi': {
                        type: 'boolean',
                        title:
                            'l10nt:q-applicant-has-your-treatment-finished-dmi.title{?lng,context,ns}',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'treatment'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-has-your-treatment-finished-dmi':
                            'l10nt:q-applicant-has-your-treatment-finished-dmi.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-has-your-treatment-finished-dmi': true
                    },
                    {
                        'q-applicant-has-your-treatment-finished-dmi': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-has-your-treatment-finished-dmi': 'foo'
                    }
                ]
            }
        },
        'p-applicant-affect-on-daily-life-dmi': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-affect-on-daily-life-dmi'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-affect-on-daily-life-dmi',
                        resources: {
                            'q-applicant-affect-on-daily-life-dmi': {
                                description:
                                    'This helps us understand how the crime has affected you. You can leave this blank, but we may have to ask for more information later.',
                                'description_someone-else':
                                    'This helps us understand how the crime has affected them. You can leave this blank, but we may have to ask for more information later.',
                                title:
                                    'Briefly say how your injuries have affected your daily life',
                                'title_someone-else':
                                    'Briefly say how their injuries have affected their daily life',
                                meta: {
                                    summary: {
                                        title: 'How your injuries have affected your daily life',
                                        'title_someone-else':
                                            'How their injuries have affected their daily life'
                                    }
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                properties: {
                    'q-applicant-affect-on-daily-life-dmi': {
                        type: 'string',
                        title: 'l10nt:q-applicant-affect-on-daily-life-dmi.title{?lng,context,ns}',
                        description:
                            'l10nt:q-applicant-affect-on-daily-life-dmi.description{?lng,context,ns}',
                        maxLength: 1000,
                        errorMessage: {
                            maxLength: 'Description must be 1000 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'impact'
                            },
                            summary: {
                                title:
                                    'l10nt:q-applicant-affect-on-daily-life-dmi.meta.summary.title{?lng,context,ns}'
                            }
                        }
                    }
                },
                examples: [
                    {
                        'q-applicant-affect-on-daily-life-dmi': 'Some description'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-affect-on-daily-life-dmi': 12345
                    }
                ]
            }
        },
        'p-applicant-are-you-registered-with-gp': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-are-you-registered-with-gp'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-are-you-registered-with-gp',
                        resources: {
                            'q-applicant-are-you-registered-with-gp': {
                                error: {
                                    required: 'Select yes if you are registered with a GP',
                                    'required_someone-else':
                                        'Select yes if they are registered with a GP'
                                },
                                title: 'Are you registered with a GP practice?',
                                'title_someone-else': 'Are they registered with a GP practice?',
                                meta: {
                                    summary: {
                                        title: 'Select yes if you are registered with a GP',
                                        'title_someone-else':
                                            'Select yes if they are registered with a GP'
                                    }
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-are-you-registered-with-gp'],
                additionalProperties: false,
                properties: {
                    'q-applicant-are-you-registered-with-gp': {
                        type: 'boolean',
                        title:
                            'l10nt:q-applicant-are-you-registered-with-gp.title{?lng,context,ns}',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'treatment'
                            },
                            summary: {
                                title:
                                    'l10nt:q-applicant-are-you-registered-with-gp.meta.summary.title{?lng,context,ns}'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-are-you-registered-with-gp':
                            'l10nt:q-applicant-are-you-registered-with-gp.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-are-you-registered-with-gp': true
                    },
                    {
                        'q-applicant-are-you-registered-with-gp': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-are-you-registered-with-gp': 'foo'
                    }
                ]
            }
        },
        'p-applicant-have-you-seen-a-gp': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-have-you-seen-a-gp'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-have-you-seen-a-gp',
                        resources: {
                            'q-applicant-have-you-seen-a-gp': {
                                description: 'This includes your mental health.',
                                'description_someone-else': 'This includes their mental health.',
                                error: {
                                    required:
                                        'Select yes if you have seen a GP about your injuries',
                                    'required_someone-else':
                                        'Select yes if they have seen a GP about their injuries'
                                },
                                title: 'Have you seen a GP about your injuries?',
                                'title_someone-else': 'Have they seen a GP about their injuries?',
                                meta: {
                                    summary: {
                                        title: 'Have you seen a GP?',
                                        'title_someone-else': 'Have they seen a GP?'
                                    }
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-have-you-seen-a-gp'],
                additionalProperties: false,
                properties: {
                    'q-applicant-have-you-seen-a-gp': {
                        type: 'boolean',
                        description:
                            'l10nt:q-applicant-have-you-seen-a-gp.description{?lng,context,ns}',
                        title: 'l10nt:q-applicant-have-you-seen-a-gp.title{?lng,context,ns}',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'treatment'
                            },
                            summary: {
                                title:
                                    'l10nt:q-applicant-have-you-seen-a-gp.meta.summary.title{?lng,context,ns}'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-have-you-seen-a-gp':
                            'l10nt:q-applicant-have-you-seen-a-gp.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-have-you-seen-a-gp': true
                    },
                    {
                        'q-applicant-have-you-seen-a-gp': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-have-you-seen-a-gp': 'foo'
                    }
                ]
            }
        },
        'p-gp-enter-your-address': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                allOf: [
                    {
                        title: "What is the GP's address?",
                        meta: {
                            compositeId: 'applicant-gp-address',
                            classifications: {
                                theme: 'treatment'
                            }
                        },
                        required: [
                            'q-gp-building-and-street',
                            'q-gp-town-or-city',
                            'q-gp-building-and-street2'
                        ],
                        propertyNames: {
                            enum: [
                                'q-gp-building-and-street',
                                'q-gp-building-and-street2',
                                'q-gp-town-or-city',
                                'q-gp-county',
                                'q-gp-postcode'
                            ]
                        },
                        allOf: [
                            {
                                properties: {
                                    'q-gp-building-and-street': {
                                        type: 'string',
                                        title: 'Practice name',
                                        maxLength: 60,
                                        errorMessage: {
                                            maxLength:
                                                'Practice name must be less than 60 characters'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'treatment'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'q-gp-building-and-street2': {
                                        type: 'string',
                                        title: 'Building and street',
                                        maxLength: 60,
                                        errorMessage: {
                                            maxLength:
                                                'Building and street must be less than 60 characters'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'treatment'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'q-gp-town-or-city': {
                                        type: 'string',
                                        title: 'Town or city',
                                        maxLength: 32,
                                        errorMessage: {
                                            maxLength: 'Town or city must be 32 characters or less'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'treatment'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'q-gp-county': {
                                        type: 'string',
                                        title: 'County (optional)',
                                        maxLength: 32,
                                        errorMessage: {
                                            maxLength: 'County must be 32 characters or less'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'treatment'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'q-gp-postcode': {
                                        type: 'string',
                                        title: 'Postcode (optional)',
                                        maxLength: 10,
                                        errorMessage: {
                                            maxLength: 'Postcode must be 10 characters or less'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'treatment'
                                            }
                                        }
                                    }
                                }
                            }
                        ],
                        errorMessage: {
                            required: {
                                'q-gp-building-and-street': "Enter the name of the GP's practice",
                                'q-gp-building-and-street2':
                                    'Enter the building and street of the GP',
                                'q-gp-town-or-city':
                                    "Enter the town or city where the GP's practice is"
                            }
                        }
                    }
                ],
                examples: [
                    {
                        'q-gp-building-and-street': '1 Foo Lane',
                        'q-gp-building-and-street2': 'Flat 2/3',
                        'q-gp-town-or-city': 'FooCity',
                        'q-gp-county': 'FooCounty',
                        'q-gp-postcode': 'G1 1XX'
                    }
                ],
                invalidExamples: [
                    {
                        'q-gp-building-and-street': 12345,
                        'q-gp-building-and-street2': 'Flat 2/3',
                        'q-gp-town-or-city': 'FooCity',
                        'q-gp-county': 'FooCounty',
                        'q-gp-postcode': 'G1 1XX'
                    },
                    {
                        'q-gp-building-and-street': '1 Foo Lane',
                        'q-gp-building-and-street2': 12345,
                        'q-gp-town-or-city': 'FooCity',
                        'q-gp-county': 'FooCounty',
                        'q-gp-postcode': 'G1 1XX'
                    },
                    {
                        'q-gp-building-and-street': '1 Foo Lane',
                        'q-gp-building-and-street2': 'Flat 2/3',
                        'q-gp-town-or-city': 12345,
                        'q-gp-county': 'FooCounty',
                        'q-gp-postcode': 'G1 1XX'
                    },
                    {
                        'q-gp-building-and-street': '1 Foo Lane',
                        'q-gp-building-and-street2': 'Flat 2/3',
                        'q-gp-town-or-city': 'FooCity',
                        'q-gp-county': 12345,
                        'q-gp-postcode': 'G1 1XX'
                    },
                    {
                        'q-gp-building-and-street': '1 Foo Lane',
                        'q-gp-building-and-street2': 'Flat 2/3',
                        'q-gp-town-or-city': 'FooCity',
                        'q-gp-county': 'FooCounty',
                        'q-gp-postcode': 12345
                    }
                ]
            }
        },
        'p-applicant-dentist-visited': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-dentist-visited'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-dentist-visited',
                        resources: {
                            'q-applicant-dentist-visited': {
                                error: {
                                    required:
                                        'Select yes if you have seen a dentist about your injuries',
                                    'required_someone-else':
                                        'Select yes if they have seen a dentist about their injuries'
                                },
                                title: 'Have you seen a dentist about your injuries?',
                                'title_someone-else':
                                    'Have they seen a dentist about their injuries?',
                                meta: {
                                    summary: {
                                        title: 'Have you seen a dentist?',
                                        'title_someone-else': 'Have they seen a dentist?'
                                    }
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-dentist-visited'],
                additionalProperties: false,
                properties: {
                    'q-applicant-dentist-visited': {
                        type: 'boolean',
                        title: 'l10nt:q-applicant-dentist-visited.title{?lng,context,ns}',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'treatment'
                            },
                            summary: {
                                title:
                                    'l10nt:q-applicant-dentist-visited.meta.summary.title{?lng,context,ns}'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-dentist-visited':
                            'l10nt:q-applicant-dentist-visited.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-dentist-visited': true
                    },
                    {
                        'q-applicant-dentist-visited': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-dentist-visited': 'foo'
                    }
                ]
            }
        },
        'p-applicant-dentist-address': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                allOf: [
                    {
                        title: "What is the dentist's address?",
                        meta: {
                            compositeId: 'applicant-dentist-address',
                            classifications: {
                                theme: 'treatment'
                            }
                        },
                        required: [
                            'q-applicant-dentist-address-building-and-street',
                            'q-applicant-dentist-address-town-or-city',
                            'q-applicant-dentist-address-building-and-street2'
                        ],
                        propertyNames: {
                            enum: [
                                'q-applicant-dentist-address-building-and-street',
                                'q-applicant-dentist-address-building-and-street2',
                                'q-applicant-dentist-address-town-or-city',
                                'q-applicant-dentist-address-county',
                                'q-applicant-dentist-address-postcode'
                            ]
                        },
                        allOf: [
                            {
                                properties: {
                                    'q-applicant-dentist-address-building-and-street': {
                                        type: 'string',
                                        title: 'Practice name',
                                        maxLength: 60,
                                        errorMessage: {
                                            maxLength:
                                                'Practice name must be less than 60 characters'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'treatment'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'q-applicant-dentist-address-building-and-street2': {
                                        type: 'string',
                                        title: 'Building and street',
                                        maxLength: 60,
                                        errorMessage: {
                                            maxLength:
                                                'Building and street must be less than 60 characters'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'treatment'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'q-applicant-dentist-address-town-or-city': {
                                        type: 'string',
                                        title: 'Town or city',
                                        maxLength: 32,
                                        errorMessage: {
                                            maxLength: 'Town or city must be 32 characters or less'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'treatment'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'q-applicant-dentist-address-county': {
                                        type: 'string',
                                        title: 'County (optional)',
                                        maxLength: 32,
                                        errorMessage: {
                                            maxLength: 'County must be 32 characters or less'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'treatment'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'q-applicant-dentist-address-postcode': {
                                        type: 'string',
                                        title: 'Postcode (optional)',
                                        maxLength: 10,
                                        errorMessage: {
                                            maxLength: 'Postcode must be 10 characters or less'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'treatment'
                                            }
                                        }
                                    }
                                }
                            }
                        ],
                        errorMessage: {
                            required: {
                                'q-applicant-dentist-address-building-and-street':
                                    "Enter the name of the dentist's practice",
                                'q-applicant-dentist-address-building-and-street2':
                                    'Enter the building and street of the dentist',
                                'q-applicant-dentist-address-town-or-city':
                                    "Enter the town or city where the dentist's practice is"
                            }
                        }
                    }
                ],
                examples: [
                    {
                        'q-applicant-dentist-address-building-and-street': '1 Foo Lane',
                        'q-applicant-dentist-address-building-and-street2': 'Flat 2/3',
                        'q-applicant-dentist-address-town-or-city': 'FooCity',
                        'q-applicant-dentist-address-county': 'FooCounty',
                        'q-applicant-dentist-address-postcode': 'G1 1XX'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-dentist-address-building-and-street': 12345,
                        'q-applicant-dentist-address-building-and-street2': 'Flat 2/3',
                        'q-applicant-dentist-address-town-or-city': 'FooCity',
                        'q-applicant-dentist-address-county': 'FooCounty',
                        'q-applicant-dentist-address-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-dentist-address-building-and-street': '1 Foo Lane',
                        'q-applicant-dentist-address-building-and-street2': 12345,
                        'q-applicant-dentist-address-town-or-city': 'FooCity',
                        'q-applicant-dentist-address-county': 'FooCounty',
                        'q-applicant-dentist-address-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-dentist-address-building-and-street': '1 Foo Lane',
                        'q-applicant-dentist-address-building-and-street2': 'Flat 2/3',
                        'q-applicant-dentist-address-town-or-city': 12345,
                        'q-applicant-dentist-address-county': 'FooCounty',
                        'q-applicant-dentist-address-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-dentist-address-building-and-street': '1 Foo Lane',
                        'q-applicant-dentist-address-building-and-street2': 'Flat 2/3',
                        'q-applicant-dentist-address-town-or-city': 'FooCity',
                        'q-applicant-dentist-address-county': 12345,
                        'q-applicant-dentist-address-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-dentist-address-building-and-street': '1 Foo Lane',
                        'q-applicant-dentist-address-building-and-street2': 'Flat 2/3',
                        'q-applicant-dentist-address-town-or-city': 'FooCity',
                        'q-applicant-dentist-address-county': 'FooCounty',
                        'q-applicant-dentist-address-postcode': 12345
                    }
                ]
            }
        },
        'p-applicant-are-you-claiming-for-physical-injuries': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-are-you-claiming-for-physical-injuries'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-are-you-claiming-for-physical-injuries',
                        resources: {
                            'q-applicant-are-you-claiming-for-physical-injuries': {
                                title: 'Do you have physical injuries as a result of the crime?',
                                'title_someone-else':
                                    'Do they have physical injuries as a result of the crime?',
                                error: {
                                    required:
                                        'Select yes if you have physical injuries as a result of the crime',
                                    'required_someone-else':
                                        'Select yes if they have physical injuries as a result of the crime'
                                },
                                meta: {
                                    summary: {
                                        title: 'Do you have physical injuries?',
                                        'title_someone-else': 'Do they have physical injuries?'
                                    }
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-are-you-claiming-for-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-are-you-claiming-for-physical-injuries': {
                        type: 'boolean',
                        title:
                            'l10nt:q-applicant-are-you-claiming-for-physical-injuries.title{?lng,context,ns}',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'injuries'
                            },
                            summary: {
                                title:
                                    'l10nt:q-applicant-are-you-claiming-for-physical-injuries.meta.summary.title{?lng,context,ns}'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-are-you-claiming-for-physical-injuries':
                            'l10nt:q-applicant-are-you-claiming-for-physical-injuries.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-are-you-claiming-for-physical-injuries': true
                    },
                    {
                        'q-applicant-are-you-claiming-for-physical-injuries': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-are-you-claiming-for-physical-injuries': 'foo'
                    }
                ]
            }
        },
        'p--transition': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    transition: {
                        title: 'Continue your claim',
                        description:
                            '<p class="govuk-body">You\'ll be taken to another website to continue your claim.</p>{{ govukButton({text: "Continue",href: "https://www.cica.gov.uk/OAS/Account/create",isStartButton: true}) }}'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p--context-physical-injuries': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p--context-physical-injuries'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p--context-physical-injuries',
                        resources: {
                            'details-context': {
                                title: 'About your injuries',
                                'title_someone-else': "About the child's injuries",
                                description:
                                    '<p class="govuk-body">We’re going to ask about any physical injuries caused by the crime.</p><p class="govuk-body">This helps us decide if a payment can be made for any physical injuries.</p><p class="govuk-body">We’ll ask you about your mental health later in the application.</p>',
                                'description_someone-else':
                                    '<p class="govuk-body">We’re going to ask about any physical injuries caused by the crime.</p><p class="govuk-body">This helps us decide if a payment can be made for any physical injuries.</p><p class="govuk-body">We’ll ask you about the child\'s mental health later in the application.</p>'
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'details-context': {
                        title: 'l10nt:details-context.title{?lng,context,ns}',
                        description: 'l10nt:details-context.description{?lng,context,ns}'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p-applicant-physical-injuries': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'What was injured?',
                        description: 'Select all that apply.',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Head, face or neck',
                                    const: 'upper'
                                },
                                {
                                    title: 'Torso',
                                    const: 'torso'
                                },
                                {
                                    title: 'Arms or hands',
                                    const: 'arms'
                                },
                                {
                                    title: 'Legs or feet',
                                    const: 'legs'
                                }
                            ]
                        },
                        meta: {
                            classifications: {
                                theme: 'injuries'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an injury from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['legs']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    },
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    }
                ]
            }
        },
        'p-applicant-infections': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-infections'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-infections',
                        resources: {
                            'q-applicant-infections': {
                                title: 'Did you get an infection as a result of the crime?',
                                'title_someone-else':
                                    'Did they get an infection as a result of the crime?',
                                error: {
                                    required:
                                        'Select yes if you got an infection as a result of the crime',
                                    'required_someone-else':
                                        'Select yes if they got an infection as a result of the crime'
                                },
                                meta: {
                                    summary: {
                                        title: 'Did you get any infections?',
                                        'title_someone-else': 'Did they get any infections?'
                                    }
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-infections'],
                additionalProperties: false,
                properties: {
                    'q-applicant-infections': {
                        type: 'string',
                        title: 'l10nt:q-applicant-infections.title{?lng,context,ns}',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: 'yes'
                            },
                            {
                                title: 'No',
                                const: 'no'
                            },
                            {
                                title: "I'm not sure",
                                const: 'not-sure'
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'injuries'
                            },
                            summary: {
                                title:
                                    'l10nt:q-applicant-infections.meta.summary.title{?lng,context,ns}'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-infections':
                            'l10nt:q-applicant-infections.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-infections': 'yes'
                    },
                    {
                        'q-applicant-infections': 'no'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-infections': 'foo'
                    }
                ]
            }
        },
        'p-applicant-select-infections': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'What infection?',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'HIV',
                                    const: 'phyinj-141'
                                },
                                {
                                    title: 'Hepatitis B',
                                    const: 'phyinj-142'
                                },
                                {
                                    title: 'Hepatitis C',
                                    const: 'phyinj-143'
                                },
                                {
                                    title: 'Other sexually transmitted infection (STI)',
                                    const: 'phyinj-145'
                                },
                                {
                                    title: 'Other infection',
                                    const: 'phyinj-149'
                                }
                            ]
                        },
                        meta: {
                            classifications: {
                                theme: 'injuries'
                            }
                        }
                    },
                    'q-applicant-infections-other': {
                        type: 'string',
                        title: 'Other infection',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other infections must be 499 characters or fewer'
                        },
                        meta: {
                            classifications: {
                                theme: 'injuries'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an infection from the list'
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-infections-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-infections-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-infections-other': 'Enter other infection'
                                }
                            }
                        }
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-141']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-pregnancy': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-pregnancy'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-pregnancy',
                        resources: {
                            'q-applicant-pregnancy': {
                                title: 'Did you become pregnant as a result of the crime?',
                                'title_someone-else':
                                    'Did they become pregnant as a result of the crime?',
                                error: {
                                    required:
                                        'Select yes if you became pregnant as a result of the crime',
                                    'required_someone-else':
                                        'Select yes if they became pregnant as a result of the crime'
                                },
                                meta: {
                                    summary: {
                                        title: 'Did you become pregnant?',
                                        'title_someone-else': 'Did they become pregnant?'
                                    }
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-pregnancy'],
                additionalProperties: false,
                properties: {
                    'q-applicant-pregnancy': {
                        type: 'string',
                        title: 'l10nt:q-applicant-pregnancy.title{?lng,context,ns}',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: 'yes'
                            },
                            {
                                title: 'No',
                                const: 'no'
                            },
                            {
                                title: "I'm not sure",
                                const: 'not-sure'
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'pregnancy'
                            },
                            summary: {
                                title:
                                    'l10nt:q-applicant-pregnancy.meta.summary.title{?lng,context,ns}'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-pregnancy':
                            'l10nt:q-applicant-pregnancy.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-pregnancy': 'yes'
                    },
                    {
                        'q-applicant-pregnancy': 'no'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-pregnancy': 'foo'
                    }
                ]
            }
        },
        'p--context-treatment': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p--context-treatment'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p--context-treatment',
                        resources: {
                            'details-context': {
                                description:
                                    '<p class="govuk-body">We\'re going to ask for some details about your treatment</p><p class="govuk-body">We\'ll use these to understand:</p><ul class="govuk-list govuk-list--bullet"><li>if you\'ve told your GP about your injuries</li><li>who has evidence of your injuries</li></ul><p class="govuk-body">We often have to ask your GP or other health service provider for evidence about your injuries and treatment. We will let you know if we need to do this.</p>',
                                'description_someone-else':
                                    '<p class="govuk-body">We\'re going to ask for some details about their treatment.</p><p class="govuk-body">We\'ll use these to understand:</p><ul class="govuk-list govuk-list--bullet"><li>if your GP is aware of the child\'s injuries</li><li>who has evidence of their injuries</li></ul><p class="govuk-body">We often have to ask their GP or other health service provider for evidence about the child’s injuries and treatment. We will let you know if we need to do this.</p>',
                                title: 'Your treatment',
                                'title_someone-else': "The child's treatment"
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'details-context': {
                        title: 'l10nt:details-context.title{?lng,context,ns}',
                        description: 'l10nt:details-context.description{?lng,context,ns}'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p-applicant-treatment-for-physical-injuries': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-treatment-for-physical-injuries'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-treatment-for-physical-injuries',
                        resources: {
                            'q-applicant-treatment-for-physical-injuries': {
                                error: {
                                    required:
                                        'Describe what treatment you have received for your physical injuries',
                                    'required_someone-else':
                                        'Describe what treatment they have received for their physical injuries'
                                },
                                title:
                                    'What treatment are you receiving for your physical injuries?',
                                'title_someone-else':
                                    'What treatment are they receiving for their physical injuries?'
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-treatment-for-physical-injuries'],
                properties: {
                    'q-applicant-treatment-for-physical-injuries': {
                        type: 'string',
                        title:
                            'l10nt:q-applicant-treatment-for-physical-injuries.title{?lng,context,ns}',
                        maxLength: 500,
                        errorMessage: {
                            maxLength: 'Description must be 500 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'treatment'
                            },
                            summary: {
                                title: 'Treatment for physical injuries'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-treatment-for-physical-injuries':
                            'l10nt:q-applicant-treatment-for-physical-injuries.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-treatment-for-physical-injuries': 'Some treatment'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-treatment-for-physical-injuries': 12345
                    }
                ]
            }
        },
        'p-applicant-medical-help': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-medical-help'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-medical-help',
                        resources: {
                            'q-applicant-medical-help': {
                                error: {
                                    required:
                                        'Select yes if you got other medical help for your injuries',
                                    'required_someone-else':
                                        'Select yes if they got other medical help for their injuries'
                                },
                                title: 'Did you get other medical help for your injuries?',
                                'title_someone-else':
                                    'Did they get other medical help for their injuries?',
                                meta: {
                                    summary: {
                                        title: 'Did you get other medical help?',
                                        'title_someone-else': 'Did they get other medical help?'
                                    }
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-medical-help'],
                additionalProperties: false,
                properties: {
                    'q-applicant-medical-help': {
                        type: 'boolean',
                        title: 'l10nt:q-applicant-medical-help.title{?lng,context,ns}',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'treatment'
                            },
                            summary: {
                                title:
                                    'l10nt:q-applicant-medical-help.meta.summary.title{?lng,context,ns}'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-medical-help':
                            'l10nt:q-applicant-medical-help.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-medical-help': true
                    },
                    {
                        'q-applicant-medical-help': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-medical-help': 'foo'
                    }
                ]
            }
        },
        'p-applicant-treatment-address': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-treatment-address'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-treatment-address',
                        resources: {
                            title: 'Where did you have treatment?',
                            'title_someone-else': 'Where did they have treatment?'
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                allOf: [
                    {
                        title: 'l10nt:title{?lng,context,ns}',
                        meta: {
                            compositeId: 'applicant-treatment-address',
                            classifications: {
                                theme: 'treatment'
                            }
                        },
                        required: [
                            'q-applicant-treatment-building-and-street',
                            'q-applicant-treatment-town-or-city',
                            'q-applicant-treatment-building-and-street2'
                        ],
                        propertyNames: {
                            enum: [
                                'q-applicant-treatment-building-and-street',
                                'q-applicant-treatment-building-and-street2',
                                'q-applicant-treatment-town-or-city',
                                'q-applicant-treatment-county',
                                'q-applicant-treatment-postcode'
                            ]
                        },
                        allOf: [
                            {
                                properties: {
                                    'q-applicant-treatment-building-and-street': {
                                        type: 'string',
                                        title: 'Name of place',
                                        maxLength: 60,
                                        errorMessage: {
                                            maxLength: 'Place name must be less than 60 characters'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'treatment'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'q-applicant-treatment-building-and-street2': {
                                        type: 'string',
                                        title: 'Address line 1',
                                        maxLength: 60,
                                        errorMessage: {
                                            maxLength:
                                                'Building and street must be less than 60 characters'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'treatment'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'q-applicant-treatment-town-or-city': {
                                        type: 'string',
                                        title: 'Town or city',
                                        maxLength: 32,
                                        errorMessage: {
                                            maxLength: 'Town or city must be 32 characters or less'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'treatment'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'q-applicant-treatment-county': {
                                        type: 'string',
                                        title: 'County (optional)',
                                        maxLength: 32,
                                        errorMessage: {
                                            maxLength: 'County must be 32 characters or less'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'treatment'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                properties: {
                                    'q-applicant-treatment-postcode': {
                                        type: 'string',
                                        title: 'Postcode (optional)',
                                        maxLength: 10,
                                        errorMessage: {
                                            maxLength: 'Postcode must be 10 characters or less'
                                        },
                                        meta: {
                                            classifications: {
                                                theme: 'treatment'
                                            }
                                        }
                                    }
                                }
                            }
                        ],
                        errorMessage: {
                            required: {
                                'q-applicant-treatment-building-and-street':
                                    'Enter the name of the place',
                                'q-applicant-treatment-building-and-street2':
                                    'Enter the building and street',
                                'q-applicant-treatment-town-or-city': 'Enter the town or city'
                            }
                        }
                    }
                ],
                examples: [
                    {
                        'q-applicant-treatment-building-and-street': '1 Foo Lane',
                        'q-applicant-treatment-building-and-street2': 'Flat 2/3',
                        'q-applicant-treatment-town-or-city': 'FooCity',
                        'q-applicant-treatment-county': 'FooCounty',
                        'q-applicant-treatment-postcode': 'G1 1XX'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-treatment-building-and-street': 12345,
                        'q-applicant-treatment-building-and-street2': 'Flat 2/3',
                        'q-applicant-treatment-town-or-city': 'FooCity',
                        'q-applicant-treatment-county': 'FooCounty',
                        'q-applicant-treatment-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-treatment-building-and-street': '1 Foo Lane',
                        'q-applicant-treatment-building-and-street2': 12345,
                        'q-applicant-treatment-town-or-city': 'FooCity',
                        'q-applicant-treatment-county': 'FooCounty',
                        'q-applicant-treatment-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-treatment-building-and-street': '1 Foo Lane',
                        'q-applicant-treatment-building-and-street2': 'Flat 2/3',
                        'q-applicant-treatment-town-or-city': 12345,
                        'q-applicant-treatment-county': 'FooCounty',
                        'q-applicant-treatment-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-treatment-building-and-street': '1 Foo Lane',
                        'q-applicant-treatment-building-and-street2': 'Flat 2/3',
                        'q-applicant-treatment-town-or-city': 'FooCity',
                        'q-applicant-treatment-county': 12345,
                        'q-applicant-treatment-postcode': 'G1 1XX'
                    },
                    {
                        'q-applicant-treatment-building-and-street': '1 Foo Lane',
                        'q-applicant-treatment-building-and-street2': 'Flat 2/3',
                        'q-applicant-treatment-town-or-city': 'FooCity',
                        'q-applicant-treatment-county': 'FooCounty',
                        'q-applicant-treatment-postcode': 12345
                    }
                ]
            }
        },
        'p-applicant-unable-to-work-duration': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-unable-to-work-duration'],
                additionalProperties: false,
                properties: {
                    'q-applicant-unable-to-work-duration': {
                        type: 'boolean',
                        title: 'Has this been for more than 28 weeks?',
                        description:
                            'This can be a single period of time or cover several periods of time since the crime.',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'impact'
                            },
                            summary: {
                                title: 'Has this been for more than 28 weeks?'
                            }
                        }
                    },
                    'details-work-duration': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding the timeframe of 28 weeks",html: "<p class=\'govuk-body\'>28 weeks is more than six months.</p><p class=\'govuk-body\'>We cannot make a payment for the first 28 weeks of any loss of earnings suffered.</p>"})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-unable-to-work-duration':
                            'Select yes if you have been unable to work for more than 28 weeks'
                    }
                },
                examples: [
                    {
                        'q-applicant-unable-to-work-duration': true
                    },
                    {
                        'q-applicant-unable-to-work-duration': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-unable-to-work-duration': 'foo'
                    }
                ]
            }
        },
        'p-applicant-job-when-crime-happened': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-job-when-crime-happened'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-job-when-crime-happened',
                        resources: {
                            'q-applicant-job-when-crime-happened': {
                                title: 'Did you have a job when the crime happened?',
                                'title_someone-else':
                                    'Did the child have a job when the crime happened?',
                                error: {
                                    required: 'Select yes if you had a job when the crime happened',
                                    'required_someone-else':
                                        'Select yes if the child had a job when the crime happened'
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-job-when-crime-happened'],
                additionalProperties: false,
                properties: {
                    'q-applicant-job-when-crime-happened': {
                        type: 'boolean',
                        title: 'l10nt:q-applicant-job-when-crime-happened.title{?lng,context,ns}',
                        description:
                            'This can be a full-time, part-time, freelance, seasonal or self-employed job. We may ask for evidence of this later.',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'impact'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-job-when-crime-happened':
                            'l10nt:q-applicant-job-when-crime-happened.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-job-when-crime-happened': true
                    },
                    {
                        'q-applicant-job-when-crime-happened': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-job-when-crime-happened': 'foo'
                    }
                ]
            }
        },
        'p-applicant-work-details-option': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-work-details-option'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-work-details-option',
                        resources: {
                            'q-applicant-work-details-option': {
                                title: 'Tell us why you did not have a job at this time',
                                'title_someone-else': 'Tell us why the child did not have a job',
                                value: {
                                    searching:
                                        'I did not have a job but I had been in regular work for at least 3 years before the crime',
                                    'searching_someone-else': 'Searching for a job'
                                },
                                error: {
                                    required: 'Select the option that applies to you',
                                    'required_someone-else':
                                        'Select the option that applies to them'
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-work-details-option'],
                additionalProperties: false,
                properties: {
                    'q-applicant-work-details-option': {
                        title: 'l10nt:q-applicant-work-details-option.title{?lng,context,ns}',
                        description: 'Select all that apply.',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'At school, college or university',
                                    const: 'education'
                                },
                                {
                                    title:
                                        'l10nt:q-applicant-work-details-option.value.searching{?lng,context,ns}',
                                    const: 'searching'
                                },
                                {
                                    title: 'Caring for someone',
                                    const: 'care'
                                },
                                {
                                    title: 'Other',
                                    const: 'other'
                                }
                            ]
                        },
                        meta: {
                            classifications: {
                                theme: 'impact'
                            },
                            summary: {
                                title: 'Reason for not having a job'
                            }
                        }
                    },
                    'q-applicant-work-details-other': {
                        type: 'string',
                        title: 'Other reason for not having a job',
                        maxLength: 100,
                        errorMessage: {
                            maxLength: 'Other details must be 100 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'impact'
                            }
                        }
                    }
                },
                allOf: [
                    {
                        $ref:
                            '#/definitions/if-other-then-q-applicant-work-details-other-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-q-applicant-work-details-other-is-required': {
                        if: {
                            properties: {
                                'q-applicant-work-details-option': {
                                    const: 'other'
                                }
                            },
                            required: ['q-applicant-work-details-option']
                        },
                        then: {
                            required: ['q-applicant-work-details-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-work-details-option',
                                    'q-applicant-work-details-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-work-details-other': 'Enter other details'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-work-details-option':
                            'l10nt:q-applicant-work-details-option.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-work-details-option': ['care']
                    },
                    {
                        'q-applicant-work-details-option': ['other'],
                        'q-applicant-work-details-other': 'a string'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-work-details-option': 1234
                    },
                    {
                        'q-applicant-work-details-option': 'other'
                    },
                    {
                        'q-applicant-work-details-option': 'other',
                        'q-applicant-work-details-other': 1234
                    }
                ]
            }
        },
        'p-applicant-expenses': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-expenses'],
                additionalProperties: false,
                properties: {
                    'q-applicant-expenses': {
                        title: 'What expenses have you had?',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'Buying or repairing physical aids',
                                    const: 'aids'
                                },
                                {
                                    title: 'Alterations to my home',
                                    const: 'alterations'
                                },
                                {
                                    title: 'Home care',
                                    const: 'home-care'
                                },
                                {
                                    title: "NHS treatment I've paid for",
                                    const: 'treatment',
                                    description:
                                        'Or treatment from the state health service in another country'
                                },
                                {
                                    title: 'I have not had these expenses',
                                    const: 'no-expenses'
                                }
                            ]
                        },
                        meta: {
                            classifications: {
                                theme: 'special-expenses'
                            }
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-q-applicant-expenses-max-one-item'
                    }
                ],
                definitions: {
                    'if-other-then-q-applicant-expenses-max-one-item': {
                        if: {
                            properties: {
                                'q-applicant-expenses': {
                                    contains: {
                                        const: 'no-expenses'
                                    }
                                }
                            },
                            required: ['q-applicant-expenses']
                        },
                        then: {
                            required: ['q-applicant-expenses'],
                            properties: {
                                'q-applicant-expenses': {
                                    maxItems: 1,
                                    errorMessage: {
                                        maxItems:
                                            'Select any expenses you’ve had or select ‘I have not had these expenses’'
                                    }
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-expenses': 'Select expenses from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-expenses': ['home-care']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-expenses': 'not-an-array'
                    },
                    {
                        'q-applicant-expenses': ['not-a-key']
                    }
                ]
            }
        },
        'p--context-money': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'money-context': {
                        title: 'Your money',
                        description:
                            '<p class="govuk-body">We\'re going to ask if you\'ve lost money as a result of the crime.</p><p class="govuk-body">This will help us decide if you\'ll get a payment for expenses or loss of earnings.</p>'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p-applicant-pregnancy-loss': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-pregnancy-loss'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-pregnancy-loss',
                        resources: {
                            'q-applicant-pregnancy-loss': {
                                title: 'Did you lose a pregnancy as a result of the crime?',
                                'title_someone-else':
                                    'Did they lose a pregnancy as a result of the crime?',
                                error: {
                                    required:
                                        'Select yes if you lost a pregnancy as a result of the crime',
                                    'required_someone-else':
                                        'Select yes if they lost a pregnancy as a result of the crime'
                                },
                                meta: {
                                    summary: {
                                        title: 'Did you lose a pregnancy?',
                                        'title_someone-else': 'Did they lose a pregnancy?'
                                    }
                                }
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-pregnancy-loss'],
                additionalProperties: false,
                properties: {
                    'q-applicant-pregnancy-loss': {
                        type: 'string',
                        title: 'l10nt:q-applicant-pregnancy-loss.title{?lng,context,ns}',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: 'yes'
                            },
                            {
                                title: 'No',
                                const: 'no'
                            },
                            {
                                title: "I'm not sure",
                                const: 'not-sure'
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'pregnancy'
                            },
                            summary: {
                                title:
                                    'l10nt:q-applicant-pregnancy-loss.meta.summary.title{?lng,context,ns}'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-pregnancy-loss':
                            'l10nt:q-applicant-pregnancy-loss.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-pregnancy-loss': 'yes'
                    },
                    {
                        'q-applicant-pregnancy-loss': 'no'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-pregnancy-loss': 'foo'
                    }
                ]
            }
        },
        'p-applicant-select-non-sa-infections': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-physical-injuries'],
                additionalProperties: false,
                properties: {
                    'q-applicant-physical-injuries': {
                        title: 'What infection?',
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    title: 'HIV',
                                    const: 'phyinj-141'
                                },
                                {
                                    title: 'Hepatitis B',
                                    const: 'phyinj-142'
                                },
                                {
                                    title: 'Hepatitis C',
                                    const: 'phyinj-143'
                                },
                                {
                                    title: 'Other infection',
                                    const: 'phyinj-149'
                                }
                            ]
                        },
                        meta: {
                            classifications: {
                                theme: 'injuries'
                            }
                        }
                    },
                    'q-applicant-infections-other': {
                        type: 'string',
                        title: 'Other infection',
                        maxLength: 499,
                        errorMessage: {
                            maxLength: 'Other infections must be 499 characters or fewer'
                        },
                        meta: {
                            classifications: {
                                theme: 'injuries'
                            }
                        }
                    }
                },
                allOf: [
                    {
                        $ref: '#/definitions/if-other-then-other-textbox-is-required'
                    }
                ],
                definitions: {
                    'if-other-then-other-textbox-is-required': {
                        if: {
                            properties: {
                                'q-applicant-physical-injuries': {
                                    contains: {
                                        const: 'phyinj-149'
                                    }
                                }
                            },
                            required: ['q-applicant-physical-injuries']
                        },
                        then: {
                            required: ['q-applicant-infections-other'],
                            propertyNames: {
                                enum: [
                                    'q-applicant-physical-injuries',
                                    'q-applicant-infections-other'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-applicant-infections-other': 'Enter other infection'
                                }
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-physical-injuries': 'Select an infection from the list'
                    }
                },
                examples: [
                    {
                        'q-applicant-physical-injuries': ['phyinj-141']
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-physical-injuries': 'not-an-array'
                    },
                    {
                        'q-applicant-physical-injuries': ['not-a-key']
                    }
                ]
            }
        },
        'p-applicant-fatal-claim': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-fatal-claim'],
                additionalProperties: false,
                properties: {
                    'q-applicant-fatal-claim': {
                        type: 'boolean',
                        title: 'Are you applying because someone died from their injuries?',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'about-application'
                            },
                            summary: {
                                title: 'Are you applying because someone died?'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-fatal-claim':
                            'Select yes if you are applying for someone who died from their injuries'
                    }
                },
                examples: [
                    {
                        'q-applicant-fatal-claim': true
                    },
                    {
                        'q-applicant-fatal-claim': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-fatal-claim': 'foo'
                    }
                ]
            }
        },
        'p-applicant-incident-type': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-incident-type'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-incident-type',
                        resources: {
                            'q-applicant-incident-type': {
                                error: {
                                    required: 'Select what led to your injuries',
                                    'required_someone-else': 'Select what led to their injuries'
                                },
                                title: 'What led to your injuries?',
                                'title_someone-else': "What led to the child's injuries?"
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-incident-type'],
                additionalProperties: false,
                properties: {
                    'q-applicant-incident-type': {
                        title: 'l10nt:q-applicant-incident-type.title{?lng,context,ns}',
                        type: 'string',
                        oneOf: [
                            {
                                title: 'Physical assault',
                                const: 'ASST'
                            },
                            {
                                title: 'Assault with a weapon',
                                const: 'WEAP'
                            },
                            {
                                title: 'Sexual assault or abuse',
                                const: 'SEX'
                            },
                            {
                                title: 'Domestic or family violence',
                                const: 'FMLY'
                            },
                            {
                                title: 'Arson',
                                const: 'ARSN'
                            },
                            {
                                title: 'Poisoning',
                                const: 'PSNG'
                            },
                            {
                                title: 'Animal attack',
                                const: 'ANIMAL'
                            },
                            {
                                title: 'Vehicle attack',
                                const: 'VEHICLE'
                            },
                            {
                                title: 'Witnessing an incident',
                                const: 'SECV'
                            },
                            {
                                title: 'Other',
                                const: 'OTHER'
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'crime'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-incident-type':
                            'l10nt:q-applicant-incident-type.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-incident-type': 'ANIMAL'
                    }
                ],
                invalidExamples: [
                    {},
                    {
                        'q-applicant-incident-type': 'ABCD'
                    },
                    {
                        'q-applicant-incident-type': ''
                    },
                    {
                        'q-applicant-incident-type': 123
                    },
                    {
                        'q-applicant-incident-type': []
                    },
                    {
                        'q-applicant-incident-type': true
                    }
                ]
            }
        },
        'p-applicant-provide-additional-information': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-provide-additional-information'],
                additionalProperties: false,
                properties: {
                    'q-applicant-provide-additional-information': {
                        type: 'boolean',
                        title: 'Would you like to add any information to this claim?',
                        description:
                            'This may include details of additional crime reference numbers, locations, dates and/or offenders.',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'additional-info'
                            },
                            summary: {
                                title: 'Would you like to add any information?'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-provide-additional-information':
                            'Select yes if you would like to add any information to your claim'
                    }
                },
                examples: [
                    {
                        'q-applicant-provide-additional-information': true
                    },
                    {
                        'q-applicant-provide-additional-information': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-provide-additional-information': 'foo'
                    }
                ]
            }
        },
        'p-applicant-additional-information': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-additional-information'],
                properties: {
                    'q-applicant-additional-information': {
                        type: 'string',
                        title: 'Enter additional information',
                        description:
                            'You can provide any extra information, including additional crime reference numbers, details of additional crimes, locations, dates and/or offenders here.',
                        maxLength: 1000,
                        errorMessage: {
                            maxLength: 'Additional information must be 1000 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'additional-info'
                            },
                            summary: {
                                title: 'Additional information'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-additional-information':
                            'Describe what additional information you want to provide'
                    }
                },
                examples: [
                    {
                        'q-applicant-additional-information': 'Some info'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-additional-information': 12345
                    }
                ]
            }
        },
        'p-applicant-describe-incident': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-describe-incident'],
                additionalProperties: false,
                properties: {
                    'q-applicant-describe-incident': {
                        type: 'boolean',
                        title: 'Do you want to briefly describe the crime in your own words?',
                        description:
                            'The police will send us a report of the crime. Providing an additional description is optional.',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'crime'
                            },
                            summary: {
                                title: 'Would you like to describe the crime?'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-describe-incident':
                            'Select yes if you would like to briefly describe the crime'
                    }
                },
                examples: [
                    {
                        'q-applicant-describe-incident': true
                    },
                    {
                        'q-applicant-describe-incident': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-describe-incident': 'foo'
                    }
                ]
            }
        },
        'p-applicant-incident-description': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-incident-description'],
                properties: {
                    'q-applicant-incident-description': {
                        type: 'string',
                        title: 'Briefly describe the crime',
                        description:
                            'You can add details that may not be included in the crime report.',
                        maxLength: 1000,
                        errorMessage: {
                            maxLength: 'Description must be 1000 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'crime'
                            },
                            summary: {
                                title: 'Brief description of the crime'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-incident-description': 'Enter a brief description of the crime'
                    }
                },
                examples: [
                    {
                        'q-applicant-incident-description': 'Some description'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-incident-description': 12345
                    }
                ]
            }
        },
        'p-applicant-has-crime-reference-number': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-has-crime-reference-number'],
                additionalProperties: false,
                properties: {
                    'q-applicant-has-crime-reference-number': {
                        type: 'boolean',
                        title: 'Do you have a crime reference number?',
                        description:
                            'This is the number the police gave the crime when it was reported. We need this to get information about the crime from them. You will need to add this later in the application.',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'about-application'
                            }
                        }
                    },
                    'crn-info': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "I do not know the crime reference number",html: \'<p class="govuk-body">If you do not have your crime reference number, call 101 to speak to your local police station. They can help you get this.</p>\'})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-has-crime-reference-number':
                            'Select yes if you know the crime reference number'
                    }
                },
                examples: [
                    {
                        'q-applicant-has-crime-reference-number': true
                    },
                    {
                        'q-applicant-has-crime-reference-number': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-has-crime-reference-number': 'foo'
                    }
                ]
            }
        },
        'p--context-additional-info': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'applicant-additional-info': {
                        title: 'Additional information',
                        description:
                            '<p class="govuk-body">We’re going to ask you if you want to provide any more details about this claim</p><p class="govuk-body">This can be information that did not fit the questions you have been asked, such as:</p><ul class="govuk-list govuk-list--bullet"><li>crime reference numbers</li><li>offender names</li><li>locations</li></ul><p class="govuk-body">This helps us get the information we need to make a decision about this claim.</p>{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "If you need help or support",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml + \'<p class="govuk-body">You can <a class="govuk-link" href="https://www.victimandwitnessinformation.org.uk/">get practical or emotional support</a> after a crime.</p><p class="govuk-body">There is different practical or emotional support <a class="govuk-link" href="https://www.mygov.scot/victim-witness-support/">if you live in Scotland</a>.</p>\'})}}'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        system: {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['case-reference'],
                additionalProperties: false,
                properties: {
                    'case-reference': {
                        type: 'string',
                        pattern: '^[0-9]{2}\\\\[0-9]{6}$',
                        errorMessage: {
                            pattern: 'Invalid case reference'
                        }
                    }
                },
                errorMessage: {
                    required: 'Case reference is required'
                },
                examples: [
                    {
                        'case-reference': '11\\123456'
                    }
                ],
                invalidExamples: [
                    {
                        'case-reference': 12345
                    }
                ]
            }
        },
        owner: {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['id', 'isAuthenticated'],
                properties: {
                    id: {
                        type: 'string'
                    },
                    isAuthenticated: {
                        type: 'boolean'
                    }
                },
                errorMessage: {
                    required: {
                        id: 'Owner id is required',
                        isAuthenticated: 'isAuthenticated is required'
                    }
                },
                examples: [
                    {
                        id: 'urn:fdc:gov.uk:2022:56P4CMsGh_02YOlWpd8PAOI-2sVlB2nsNU7mcLZYhYw=',
                        isAuthenticated: true
                    }
                ],
                invalidExamples: [
                    {
                        id: 12345,
                        isAuthenticated: 'foobar'
                    }
                ]
            }
        },
        'p--context-crime-impact': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p--context-crime-impact'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p--context-crime-impact',
                        resources: {
                            'context-crime-impact': {
                                description:
                                    "<p class='govuk-body'>We’re going to ask you questions about:</p><ul class='govuk-list govuk-list--bullet'><li>how your daily life has been impacted by your injuries</li><li>how long the effects of your injuries are likely to last</li><li>your ability to work now and in future</li></ul><p class='govuk-body'>The answers you give help build an understanding of how your injuries have affected you.</p><p class='govuk-body'>In sending this application, you will be considered for compensation for loss of earnings and special expenses.</p><h2 class='govuk-heading-m'>Loss of earnings</h2><p class='govuk-body'>If the medical evidence shows the injuries result in very limited or no capacity to work, you may get a loss of earnings payment.</p> <h2 class='govuk-heading-m'>Special expenses</h2> <p class='govuk-body'>If you cannot work for more than 28 weeks or are likely to lose earnings because of how severe the injuries are, or are incapacitated to a similar extent, you may receive a special expenses payment.</p><p class='govuk-body'>Both of these payment types are to compensate for any financial losses you have because of your injuries.</p>",
                                'description_someone-else':
                                    "<p class='govuk-body'>We’re going to ask you questions about:</p><ul class='govuk-list govuk-list--bullet'><li>how the child’s daily life has been impacted by their injuries</li><li>how long the effects of their injuries are likely to last</li><li>their ability to work now and in future</li></ul><p class='govuk-body'>The answers you give help build an understanding of how their injuries have affected them.</p><p class='govuk-body'>In sending this application, the child will be considered for compensation for loss of earnings and special expenses.</p><h2 class='govuk-heading-m'>Loss of earnings</h2><p class='govuk-body'>If the medical evidence shows the injuries result in very limited or no capacity to work, they may get a loss of earnings payment.</p> <h2 class='govuk-heading-m'>Special expenses</h2> <p class='govuk-body'>If the child cannot work for more than 28 weeks or is likely to lose earnings because of how severe the injuries are, or is incapacitated to a similar extent, they may receive a special expenses payment.</p><p class='govuk-body'>Both of these payment types are to compensate for any financial losses they have because of their injuries.</p>"
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'context-crime-impact': {
                        title: 'The impact the injuries have had',
                        description: 'l10nt:context-crime-impact.description{?lng,context,ns}'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p-mainapplicant-parent': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-mainapplicant-parent'],
                additionalProperties: false,
                properties: {
                    'q-mainapplicant-parent': {
                        type: 'boolean',
                        title: "Are you the child's parent?",
                        description:
                            'This means you have parental responsibility for the child as their birth, step or adoptive parent.',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'about-application'
                            }
                        }
                    },
                    'can-i-apply-for-child': {
                        description:
                            "{% from \"components/details/macro.njk\" import govukDetails %}{{ govukDetails({summaryText: \"Can I apply for the child?\",html: \"<p class='govuk-body'>You need to prove you have parental responsibility for the child to apply.</p><p class='govuk-body'>To prove this, you'll need relevant documents your name is on, such as:</p><ul class='govuk-list govuk-list--bullet'><li>the child's full birth certificate</li><li>adoption documents</li><li>a parental responsibility agreement</li><li>a court order</li></ul><p class='govuk-body'>If you're still unsure about parental responsibility and what it means, you can find out more <a target='_blank' href='https://www.gov.uk/parental-rights-responsibilities/who-has-parental-responsibility'>on the UK Government website(opens in new tab)</a>.</p>\"})}}"
                    }
                },
                errorMessage: {
                    required: {
                        'q-mainapplicant-parent': "Select yes if you are the child's parent"
                    }
                },
                examples: [
                    {
                        'q-mainapplicant-parent': true
                    },
                    {
                        'q-mainapplicant-parent': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-mainapplicant-parent': 'foo'
                    }
                ]
            }
        },
        'p--context-authority': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'authority-to-apply': {
                        title:
                            'You need to send proof you have parental responsibility for the child',
                        description:
                            '<p class="govuk-body">We need proof so we know you have the right to apply on the child\'s behalf.</p><p class="govuk-body">This proof can be:</p><ul class="govuk-list govuk-list--bullet"><li>the child\'s full birth certificate</li><li>adoption documents</li><li>a parental responsibility agreement</li><li>a court order</li></ul><p class="govuk-body">You can:</p><ul class="govuk-list govuk-list--bullet"><li>take or scan a photo and send it via email</li><li>send a photocopy of this to us via post</li></ul><p class="govuk-body">If your name or the child\'s name has changed, you\'ll have to show proof of this change.</p><p class="govuk-body">We\'ll tell you how to send this at the end of the application.</p>'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p-mainapplicant-context-details': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'details-context': {
                        title: 'Your details',
                        description:
                            '<p class="govuk-body">We\'re going to ask for some details about you.</p><p class="govuk-body">We\'ll use these to contact you about this application.</p>'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p-mainapplicant-confirmation-method': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                propertyNames: {
                    enum: [
                        'q-mainapplicant-confirmation-method',
                        'q-mainapplicant-enter-your-email-address',
                        'q-mainapplicant-enter-your-telephone-number'
                    ]
                },
                properties: {
                    'q-mainapplicant-confirmation-method': {
                        title: "How should we tell you we've got the application?",
                        type: 'string',
                        oneOf: [
                            {
                                title: 'Email',
                                const: 'email'
                            },
                            {
                                title: 'Text message',
                                const: 'text'
                            },
                            {
                                title: "I don't have an email address or UK mobile phone number",
                                const: 'none'
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'main-applicant-details'
                            },
                            summary: {
                                title: 'Confirmation method'
                            }
                        }
                    },
                    'q-mainapplicant-enter-your-email-address': {
                        type: 'string',
                        title: 'Email address',
                        maxLength: 50,
                        format: 'email',
                        errorMessage: {
                            maxLength: 'Email address must be 50 characters or less',
                            format:
                                'Enter an email address in the correct format, like name@example.com'
                        },
                        meta: {
                            classifications: {
                                theme: 'main-applicant-details'
                            }
                        }
                    },
                    'q-mainapplicant-enter-your-telephone-number': {
                        type: 'string',
                        title: 'UK mobile phone number',
                        maxLength: 20,
                        format: 'mobile-uk',
                        errorMessage: {
                            format:
                                'Enter a UK mobile phone number, like 07700 900 982 or +44 7700 900 982',
                            maxLength: 'Telephone number must be 20 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'main-applicant-details'
                            }
                        }
                    }
                },
                required: ['q-mainapplicant-confirmation-method'],
                allOf: [
                    {
                        $ref:
                            '#/definitions/if-email-then-q-mainapplicant-enter-your-email-address-is-required'
                    },
                    {
                        $ref:
                            '#/definitions/if-text-then-q-mainapplicant-enter-your-telephone-number-is-required'
                    },
                    {
                        $ref: '#/definitions/if-none-then-phone-and-email-explicitly-not-required'
                    }
                ],
                definitions: {
                    'if-email-then-q-mainapplicant-enter-your-email-address-is-required': {
                        if: {
                            properties: {
                                'q-mainapplicant-confirmation-method': {
                                    const: 'email'
                                }
                            },
                            required: ['q-mainapplicant-confirmation-method']
                        },
                        then: {
                            required: ['q-mainapplicant-enter-your-email-address'],
                            propertyNames: {
                                enum: [
                                    'q-mainapplicant-confirmation-method',
                                    'q-mainapplicant-enter-your-email-address'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-mainapplicant-enter-your-email-address':
                                        'Enter an email address'
                                }
                            }
                        }
                    },
                    'if-text-then-q-mainapplicant-enter-your-telephone-number-is-required': {
                        if: {
                            properties: {
                                'q-mainapplicant-confirmation-method': {
                                    const: 'text'
                                }
                            },
                            required: ['q-mainapplicant-confirmation-method']
                        },
                        then: {
                            required: ['q-mainapplicant-enter-your-telephone-number'],
                            propertyNames: {
                                enum: [
                                    'q-mainapplicant-confirmation-method',
                                    'q-mainapplicant-enter-your-telephone-number'
                                ]
                            },
                            errorMessage: {
                                required: {
                                    'q-mainapplicant-enter-your-telephone-number':
                                        'Enter a UK mobile phone number'
                                }
                            }
                        }
                    },
                    'if-none-then-phone-and-email-explicitly-not-required': {
                        if: {
                            properties: {
                                'q-mainapplicant-confirmation-method': {
                                    const: 'none'
                                }
                            },
                            required: ['q-mainapplicant-confirmation-method']
                        },
                        then: {
                            additionalProperties: false,
                            properties: {
                                'q-mainapplicant-confirmation-method': {
                                    const: 'none'
                                }
                            },
                            required: ['q-mainapplicant-confirmation-method']
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-mainapplicant-confirmation-method':
                            'Select how you want to get your confirmation message'
                    }
                },
                examples: [
                    {
                        'q-mainapplicant-confirmation-method': 'none'
                    },
                    {
                        'q-mainapplicant-confirmation-method': 'email',
                        'q-mainapplicant-enter-your-email-address': 'foo@bar.com'
                    },
                    {
                        'q-mainapplicant-confirmation-method': 'text',
                        'q-mainapplicant-enter-your-telephone-number': '07701 234567'
                    }
                ],
                invalidExamples: [
                    {
                        'q-mainapplicant-confirmation-method': 'none',
                        'q-mainapplicant-enter-your-email-address': 'foo@bar.com'
                    },
                    {
                        'q-mainapplicant-confirmation-method': 'none',
                        'q-mainapplicant-enter-your-telephone-number': '07701 234567'
                    },
                    {
                        'q-mainapplicant-confirmation-method': 'email'
                    },
                    {
                        'q-mainapplicant-confirmation-method': 'text'
                    },
                    {
                        'q-mainapplicant-confirmation-method': 'email',
                        'q-mainapplicant-enter-your-telephone-number': '07701 234567'
                    },
                    {
                        'q-mainapplicant-confirmation-method': 'text',
                        'q-mainapplicant-enter-your-email-address': 'foo@bar.com'
                    },
                    {
                        'q-mainapplicant-confirmation-method': 'email',
                        'q-mainapplicant-enter-your-email-address': 'not an email address'
                    },
                    {
                        'q-mainapplicant-confirmation-method': 'text',
                        'q-mainapplicant-enter-your-telephone-number':
                            'not a UK mobile phone number'
                    },
                    {
                        'q-mainapplicant-confirmation-method': 10
                    },
                    {
                        'q-mainapplicant-confirmation-method': false
                    },
                    {
                        'q-mainapplicant-confirmation-method': true,
                        'q-mainapplicant-enter-your-email-address': true
                    },
                    {
                        'q-mainapplicant-confirmation-method': 'none',
                        'q-mainapplicant-enter-your-email-address': ['something']
                    },
                    {
                        'q-mainapplicant-confirmation-method': 'none',
                        'q-mainapplicant-enter-your-email-address': 123
                    },
                    {
                        'q-mainapplicant-confirmation-method': 'text',
                        'q-mainapplicant-enter-your-email-address': true
                    },
                    {
                        'q-mainapplicant-confirmation-method': 'text',
                        'q-mainapplicant-enter-your-telephone-number': 123
                    },
                    {
                        'q-mainapplicant-confirmation-method': 'email',
                        'q-mainapplicant-enter-your-telephone-number': false
                    }
                ]
            }
        },
        'p-mainapplicant-enter-your-name': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                title: 'Enter your name',
                type: 'object',
                required: [
                    'q-mainapplicant-title',
                    'q-mainapplicant-first-name',
                    'q-mainapplicant-last-name'
                ],
                additionalProperties: false,
                properties: {
                    'q-mainapplicant-title': {
                        title: 'Title',
                        type: 'string',
                        maxLength: 6,
                        errorMessage: {
                            maxLength: 'Title must be 6 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'main-applicant-details'
                            }
                        }
                    },
                    'q-mainapplicant-first-name': {
                        title: 'First name',
                        type: 'string',
                        maxLength: 70,
                        errorMessage: {
                            maxLength: 'First name must be 70 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'main-applicant-details'
                            }
                        }
                    },
                    'q-mainapplicant-last-name': {
                        title: 'Last name',
                        type: 'string',
                        maxLength: 70,
                        errorMessage: {
                            maxLength: 'Last name must be 70 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'main-applicant-details'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-mainapplicant-title': 'Enter your title',
                        'q-mainapplicant-first-name': 'Enter your first name',
                        'q-mainapplicant-last-name': 'Enter your last name'
                    }
                },
                examples: [
                    {
                        'q-mainapplicant-title': 'Mr',
                        'q-mainapplicant-first-name': 'Foo',
                        'q-mainapplicant-last-name': 'Bar'
                    }
                ],
                invalidExamples: [
                    {
                        'q-mainapplicant-title': 12345,
                        'q-mainapplicant-first-name': 'Foo',
                        'q-mainapplicant-last-name': 'Bar'
                    },
                    {
                        'q-mainapplicant-title': 'Mr',
                        'q-mainapplicant-first-name': 12345,
                        'q-mainapplicant-last-name': 'Bar'
                    },
                    {
                        'q-mainapplicant-title': 'Mr',
                        'q-mainapplicant-first-name': 'Foo',
                        'q-mainapplicant-last-name': 12345
                    }
                ]
            }
        },
        'p-mainapplicant-enter-your-address': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                title: 'Enter your address',
                required: ['q-mainapplicant-building-and-street', 'q-mainapplicant-town-or-city'],
                additionalProperties: false,
                properties: {
                    'q-mainapplicant-building-and-street': {
                        type: 'string',
                        title: 'Building and street',
                        maxLength: 60,
                        errorMessage: {
                            maxLength: 'First line of address must be less than 60 characters'
                        },
                        meta: {
                            classifications: {
                                theme: 'main-applicant-details'
                            }
                        }
                    },
                    'q-mainapplicant-building-and-street-2': {
                        type: 'string',
                        title: 'Building and street line 2',
                        maxLength: 60,
                        errorMessage: {
                            maxLength: 'Second line of address must be less than 60 characters'
                        },
                        meta: {
                            classifications: {
                                theme: 'main-applicant-details'
                            }
                        }
                    },
                    'q-mainapplicant-town-or-city': {
                        type: 'string',
                        title: 'Town or city',
                        maxLength: 32,
                        errorMessage: {
                            maxLength: 'Town or city must be 32 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'main-applicant-details'
                            }
                        }
                    },
                    'q-mainapplicant-county': {
                        type: 'string',
                        title: 'County (optional)',
                        maxLength: 32,
                        errorMessage: {
                            maxLength: 'County must be 32 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'main-applicant-details'
                            }
                        }
                    },
                    'q-mainapplicant-postcode': {
                        type: 'string',
                        title: 'Postcode (optional)',
                        maxLength: 10,
                        errorMessage: {
                            maxLength: 'Postcode must be 10 characters or less'
                        },
                        meta: {
                            classifications: {
                                theme: 'main-applicant-details'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-mainapplicant-building-and-street':
                            'Enter the building and street where you live',
                        'q-mainapplicant-town-or-city': 'Enter the town or city where you live'
                    }
                },
                examples: [
                    {
                        'q-mainapplicant-building-and-street': '1 Foo Lane',
                        'q-mainapplicant-building-and-street-2': 'Flat 2/3',
                        'q-mainapplicant-town-or-city': 'FooCity',
                        'q-mainapplicant-county': 'FooCounty',
                        'q-mainapplicant-postcode': 'G1 1XX'
                    }
                ],
                invalidExamples: [
                    {
                        'q-mainapplicant-building-and-street': 12345,
                        'q-mainapplicant-building-and-street-2': 'Flat 2/3',
                        'q-mainapplicant-town-or-city': 'FooCity',
                        'q-mainapplicant-county': 'FooCounty',
                        'q-mainapplicant-postcode': 'G1 1XX'
                    },
                    {
                        'q-mainapplicant-building-and-street': '1 Foo Lane',
                        'q-mainapplicant-building-and-street-2': 12345,
                        'q-mainapplicant-town-or-city': 'FooCity',
                        'q-mainapplicant-county': 'FooCounty',
                        'q-mainapplicant-postcode': 'G1 1XX'
                    },
                    {
                        'q-mainapplicant-building-and-street': '1 Foo Lane',
                        'q-mainapplicant-building-and-street-2': 'Flat 2/3',
                        'q-mainapplicant-town-or-city': 12345,
                        'q-mainapplicant-county': 'FooCounty',
                        'q-mainapplicant-postcode': 'G1 1XX'
                    },
                    {
                        'q-mainapplicant-building-and-street': '1 Foo Lane',
                        'q-mainapplicant-building-and-street-2': 'Flat 2/3',
                        'q-mainapplicant-town-or-city': 'FooCity',
                        'q-mainapplicant-county': 12345,
                        'q-mainapplicant-postcode': 'G1 1XX'
                    },
                    {
                        'q-mainapplicant-building-and-street': '1 Foo Lane',
                        'q-mainapplicant-building-and-street-2': 'Flat 2/3',
                        'q-mainapplicant-town-or-city': 'FooCity',
                        'q-mainapplicant-county': 'FooCounty',
                        'q-mainapplicant-postcode': 12345
                    }
                ]
            }
        },
        'p-mainapplicant-enter-your-email-address': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'q-mainapplicant-enter-your-email-address': {
                        type: 'string',
                        title: 'Enter your email address',
                        description:
                            'We may use this to contact you if we need to clarify something in your application (optional).',
                        maxLength: 50,
                        format: 'email',
                        errorMessage: {
                            maxLength: 'Email address must be 50 characters or less',
                            format: 'Enter your email address, for example john.smith@email.com'
                        },
                        meta: {
                            classifications: {
                                theme: 'main-applicant-details'
                            }
                        }
                    }
                },
                examples: [
                    {
                        'q-mainapplicant-enter-your-email-address': 'foo@domain.com'
                    },
                    {}
                ],
                invalidExamples: [
                    {
                        'q-mainapplicant-enter-your-email-address': 12345
                    }
                ]
            }
        },
        'p-mainapplicant-enter-your-telephone-number': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'q-mainapplicant-enter-your-telephone-number': {
                        type: 'string',
                        title: 'Enter your telephone number',
                        description:
                            'We may use this to contact you if we need to clarify something in this application (optional).',
                        maxLength: 20,
                        pattern: '^[\\+\\d][\\d \\(\\)\\+\\-\\#]{7,19}$',
                        errorMessage: {
                            maxLength: 'Telephone number must be 20 characters or less',
                            pattern:
                                'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 0808 157 0192'
                        },
                        meta: {
                            classifications: {
                                theme: 'main-applicant-details'
                            },
                            summary: {
                                title: 'Telephone number'
                            }
                        }
                    }
                },
                examples: [
                    {
                        'q-mainapplicant-enter-your-telephone-number': '01632 960 001'
                    },
                    {}
                ],
                invalidExamples: [
                    {
                        'q-mainapplicant-enter-your-telephone-number': 12345
                    }
                ]
            }
        },
        'p-mainapplicant-relationship': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-mainapplicant-relationship'],
                additionalProperties: false,
                properties: {
                    'q-mainapplicant-relationship': {
                        type: 'string',
                        title: 'What is your relationship to the child?',
                        description: 'For example, you’re their mother, father, grandparent etc.',
                        meta: {
                            classifications: {
                                theme: 'main-applicant-details'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-mainapplicant-relationship': 'Enter your relationship with the child'
                    }
                },
                examples: [
                    {
                        'q-mainapplicant-relationship': 'mother'
                    }
                ],
                invalidExamples: [
                    {
                        'q-mainapplicant-relationship': true
                    },
                    {
                        'q-mainapplicant-relationship': 123
                    },
                    {
                        'q-mainapplicant-relationship': ['father']
                    }
                ]
            }
        },
        'p-mainapplicant-shared-responsibility': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-mainapplicant-shared-responsibility'],
                additionalProperties: false,
                properties: {
                    'q-mainapplicant-shared-responsibility': {
                        type: 'boolean',
                        title:
                            'Do you share parental responsibility for the child with another person?',
                        description:
                            'This means you share this with another person named as their birth, step or adoptive parent. Or, someone named on a special guardianship order.',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'main-applicant-details'
                            },
                            summary: {
                                title: 'Do you share parental responsibility?'
                            }
                        }
                    },
                    'mainapplicant-shared-responsibility': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding shared parental responsibility",html: \'<p class="govuk-body">There are a wide range of situations where a person holds parental responsibility for a child. You may or may not hold parental responsibility for the child and not know.</p><p class="govuk-body">Find out if you have parental responsibility and what this means <a target="_blank" href="https://www.gov.uk/parental-rights-responsibilities/who-has-parental-responsibility" target="_blank">on the UK Government website(opens in new tab)</a>.</p>\'})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q-mainapplicant-shared-responsibility':
                            'Select yes if you share parental responsibility for the child with another person'
                    }
                },
                examples: [
                    {
                        'q-mainapplicant-shared-responsibility': true
                    },
                    {
                        'q-mainapplicant-shared-responsibility': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-mainapplicant-shared-responsibility': 'foo'
                    }
                ]
            }
        },
        'p-mainapplicant-shared-responsibility-name': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-mainapplicant-shared-responsibility-name'],
                additionalProperties: false,
                properties: {
                    'q-mainapplicant-shared-responsibility-name': {
                        type: 'string',
                        title: 'What is their full name?',
                        description:
                            'We will never contact this person without your consent unless there is an exceptional situation where we have to.',
                        meta: {
                            classifications: {
                                theme: 'main-applicant-details'
                            }
                        }
                    },
                    'mainapplicant-shared-responsibility-name': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "I share parental rights with more than one person",html: \'<p class="govuk-body">You can add any additional names of shared parental rights holders at the end of this application.</p><p class="govuk-body">Find out if you share parental responsibility with another person <a target="_blank" href="https://www.gov.uk/parental-rights-responsibilities/who-has-parental-responsibility" target="_blank">on the UK Government website(opens in new tab)</a>.</p>\'})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q-mainapplicant-shared-responsibility-name': 'Enter their full name'
                    }
                },
                examples: [
                    {
                        'q-mainapplicant-shared-responsibility-name': 'Mr Foo Bar'
                    }
                ],
                invalidExamples: [
                    {
                        'q-mainapplicant-shared-responsibility-name': 123
                    },
                    {
                        'q-mainapplicant-shared-responsibility-name': true
                    },
                    {
                        'q-mainapplicant-shared-responsibility-name': ['Mr Foo Bar']
                    }
                ]
            }
        },
        'p-mainapplicant-care-order': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-mainapplicant-care-order'],
                additionalProperties: false,
                properties: {
                    'q-mainapplicant-care-order': {
                        type: 'boolean',
                        title:
                            'Is there a care, supervision or other local authority order in place for the child?',
                        description: 'This includes an interim care order.',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'main-applicant-details'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-mainapplicant-care-order':
                            'Select yes if there is a care, supervision or other local authority order in place for the child'
                    }
                },
                examples: [
                    {
                        'q-mainapplicant-care-order': true
                    },
                    {
                        'q-mainapplicant-care-order': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-mainapplicant-care-order': 'foo'
                    }
                ]
            }
        },
        'p-mainapplicant-care-order-authority': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-mainapplicant-care-order-authority'],
                additionalProperties: false,
                properties: {
                    'q-mainapplicant-care-order-authority': {
                        type: 'string',
                        title: 'What local authority is this with?',
                        meta: {
                            classifications: {
                                theme: 'main-applicant-details'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-mainapplicant-care-order-authority':
                            'Enter the local authority this is with'
                    }
                },
                examples: [
                    {
                        'q-mainapplicant-care-order-authority': 'local authority'
                    }
                ],
                invalidExamples: [
                    {
                        'q-mainapplicant-care-order-authority': 123
                    },
                    {
                        'q-mainapplicant-care-order-authority': true
                    },
                    {
                        'q-mainapplicant-care-order-authority': ['local authority']
                    }
                ]
            }
        },
        'p--context-pregnancy': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p--context-pregnancy'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p--context-pregnancy',
                        resources: {
                            'pregnancy-context': {
                                description:
                                    '<p class="govuk-body">We need to ask questions about pregnancy related to the crime. These questions may be difficult to answer or may not be relevant to you.</p><p class="govuk-body">By answering them, it ensures you are considered for all correct compensation from us. This helps us better understand the case and if we need to ask for more evidence from you.</p><h2 class="govuk-heading-m">Help and support</h2><p class="govuk-body">The following links open in a new tab.</p><p class="govuk-body">You can get practical and emotional support after a crime. Visit <a href="https://www.victimandwitnessinformation.org.uk/" target="_blank">Victim and Witness information</a> if you’re in England and Wales. Or <a href="https://www.mygov.scot/victim-witness-support/" target="_blank">support as a victim or witness of crime</a> in Scotland.</p>{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "If you need help or support with the application",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml + \'<p class="govuk-body">You can <a class="govuk-link" href="https://www.victimandwitnessinformation.org.uk/">get practical or emotional support</a> after a crime.</p><p class="govuk-body">There is different practical or emotional support <a class="govuk-link" href="https://www.mygov.scot/victim-witness-support/">if you live in Scotland</a>.</p>\'})}}',
                                'description_someone-else':
                                    '<p class="govuk-body">We need to ask questions about pregnancy related to the crime. These questions may be difficult to answer or may not be relevant to the child.</p><p class="govuk-body">By answering them, it ensures the child is considered for all correct compensation from us. This helps us better understand the case and if we need to ask for more evidence from you.</p><h2 class="govuk-heading-m">Help and support</h2><p class="govuk-body">The following links open in a new tab.</p><p class="govuk-body">You can get practical and emotional support after a crime. Visit <a href="https://www.victimandwitnessinformation.org.uk/" target="_blank">Victim and Witness information</a> if you’re in England and Wales. Or <a href="https://www.mygov.scot/victim-witness-support/" target="_blank">support as a victim or witness of crime</a> in Scotland.</p>{% set templateHtml %}{% include \'contact.njk\' %}{% endset %}{{ govukDetails({summaryText: "If you need help or support with the application",html: \'<p class="govuk-body">You can contact us for help with your application.</p>\' + templateHtml + \'<p class="govuk-body">You can <a class="govuk-link" href="https://www.victimandwitnessinformation.org.uk/">get practical or emotional support</a> after a crime.</p><p class="govuk-body">There is different practical or emotional support <a class="govuk-link" href="https://www.mygov.scot/victim-witness-support/">if you live in Scotland</a>.</p>\'})}}'
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'pregnancy-context': {
                        title: 'Pregnancy',
                        description: 'l10nt:pregnancy-context.description{?lng,context,ns}'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p-applicant-unable-to-work': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-unable-to-work-duration'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-unable-to-work-duration',
                        resources: {
                            'q-applicant-unable-to-work': {
                                title:
                                    'Are you incapable of working or do you have very limited capacity to work due to your injuries?',
                                'title_someone-else':
                                    'Are they incapable of working or do they have very limited capacity to work due to their injuries?',
                                description:
                                    'Very limited capacity means you are not capable of undertaking paid work for more than a few hours each week.',
                                'description_someone-else':
                                    'Very limited capacity means they are not capable of undertaking paid work for more than a few hours each week.'
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-unable-to-work'],
                additionalProperties: false,
                properties: {
                    'q-applicant-unable-to-work': {
                        type: 'boolean',
                        title: 'l10nt:q-applicant-unable-to-work.title{?lng,context,ns}',
                        description:
                            'l10nt:q-applicant-unable-to-work.description{?lng,context,ns}',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'impact'
                            },
                            summary: {
                                title: 'Has this been for more than 28 weeks?'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-unable-to-work':
                            'Select yes if they are incapable of working or have very limited capacity to work due to their injuries'
                    }
                },
                examples: [
                    {
                        'q-applicant-unable-to-work': true
                    },
                    {
                        'q-applicant-unable-to-work': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-unable-to-work': 'foo'
                    }
                ]
            }
        },
        'p-applicant-se-treatment': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-se-treatment'],
                additionalProperties: false,
                properties: {
                    'q-applicant-se-treatment': {
                        type: 'boolean',
                        title:
                            'Have you paid for any costs relating to treatments from the NHS or other state health service because of the injuries?',
                        description:
                            'For example, paying for costs towards certain treatments. Or paying towards other related costs such as prescriptions, dental fees, opticians and travel.',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'special_expenses'
                            },
                            summary: {
                                title: 'NHS or other state health service treatment'
                            }
                        }
                    },
                    'help-se-treatment': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with the costs of NHS and state health service treatments",html: \'<p class="govuk-body">Not all treatments provided by the NHS or other state health services are free.</p><p class="govuk-body">You can find out more about the <a href="https://www.nhs.uk/nhs-services/help-with-health-costs/when-you-need-to-pay-towards-nhs-care/" target="_blank">cost of NHS treatments (opens in new tab)</a> and <a href="https://www.nhsinform.scot/care-support-and-rights/health-rights/access/help-with-health-costs" target="_blank">cost of NHS Scotland treatments (opens in new tab)</a>.</p>\'})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-se-treatment':
                            'Select yes if you paid for any costs relating to treatments from the NHS or other state health service because of the injuries'
                    }
                },
                examples: [
                    {
                        'q-applicant-se-treatment': true
                    },
                    {
                        'q-applicant-se-treatment': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-se-treatment': 'foo'
                    }
                ]
            }
        },
        'p-applicant-se-home-care': {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'p-applicant-se-home-care'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'p-applicant-se-home-care',
                        resources: {
                            'q-applicant-se-home-care': {
                                title:
                                    'Have you required care or supervision because of your injuries?',
                                'title_someone-else':
                                    'Have they required care or supervision because of their injuries?',
                                error: {
                                    required:
                                        'Select yes if you required care or supervision because of your injuries',
                                    'required_someone-else':
                                        'Select yes if they required care or supervision because of their injuries'
                                }
                            },
                            'help-understanding-care': {
                                description:
                                    '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding care and supervision",html: \'<h2 class="govuk-heading-s">Care</h2><p class="govuk-body">This means you cannot do daily tasks yourself. For example, care may include but is not limited to.</p><ul class="govuk-list govuk-list--bullet"><li>preparing meals</li><li>help to eat</li><li>help going to the bathroom</li><li>taking medication</li><li>administering medical treatments</li></ul><h2 class="govuk-heading-s">Supervision</h2><p class="govuk-body">This means you pose a substantial danger to yourself or others without supervision.</p>\'})}}',
                                'description_someone-else':
                                    '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding care and supervision",html: \'<h2 class="govuk-heading-s">Care</h2><p class="govuk-body">This means they cannot do daily tasks themselves. For example, care for the victim may include but is not limited to.</p><ul class="govuk-list govuk-list--bullet"><li>preparing meals</li><li>helping them to eat</li><li>helping them go to the bathroom</li><li>taking medication</li><li>administering other medical treatments</li></ul><h2 class="govuk-heading-s">Supervision</h2><p class="govuk-body">This means they pose a substantial danger to themselves or others without supervision.</p>\'})}}'
                            }
                        }
                    }
                ]
            },
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-se-home-care'],
                additionalProperties: false,
                properties: {
                    'q-applicant-se-home-care': {
                        type: 'boolean',
                        title: 'l10nt:q-applicant-se-home-care.title{?lng,context,ns}',
                        description:
                            'This can be care or supervision provided by a family member or other provider.',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: ' special-expenses'
                            },
                            summary: {
                                title: 'Care or supervision'
                            }
                        }
                    },
                    'help-understanding-care': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding care and supervision",html: \'<h2 class="govuk-heading-s">Care</h2><p class="govuk-body">This means they cannot do daily tasks themselves. For example, care for the victim may include but is not limited to.</p><ul class="govuk-list govuk-list--bullet"><li>preparing meals</li><li>helping them to eat</li><li>helping them go to the bathroom</li><li>taking medication</li><li>administering other medical treatments</li></ul><h2 class="govuk-heading-s">Supervision</h2><p class="govuk-body">This means they pose a substantial danger to themselves or others without supervision.</p>\'})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-se-home-care':
                            'l10nt:q-applicant-se-home-care.error.required{?lng,context,ns}'
                    }
                },
                examples: [
                    {
                        'q-applicant-se-home-care': true
                    },
                    {
                        'q-applicant-se-home-care': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-se-home-care': 'foo'
                    }
                ]
            }
        },
        'p-applicant-se-home-changes': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-se-home-changes'],
                additionalProperties: false,
                properties: {
                    'q-applicant-se-home-changes': {
                        type: 'boolean',
                        title: 'Have you paid for any changes to the home because of the injuries?',
                        description:
                            'This may be costs for changes to both the inside and outside of the home to improve independence or ability to get around.',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: ' special-expenses'
                            },
                            summary: {
                                title: 'Changes to the home'
                            }
                        }
                    },
                    'help-se-home-changes': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with changes to the home",html: "<p class=\'govuk-body\'>Changes to the home may include but are not limited to:</p><ul class=\'govuk-list govuk-list--bullet\'><li>building a ramp</li><li>installing a stair lift</li></ul><p class=\'govuk-body\'>This payment does not apply to the cost of buying a new home because of the injuries.</p>"})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-se-home-changes':
                            'Select yes if you paid for any changes to the home because of the injuries'
                    }
                },
                examples: [
                    {
                        'q-applicant-se-home-changes': true
                    },
                    {
                        'q-applicant-se-home-changes': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-se-home-changes': 'foo'
                    }
                ]
            }
        },
        'p-applicant-se-aids': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-se-aids'],
                additionalProperties: false,
                properties: {
                    'q-applicant-se-aids': {
                        type: 'boolean',
                        title:
                            'Have you paid to replace or repair physical aids because of the crime?',
                        description:
                            'These may have been damaged or you had to replace them because of the crime.',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: ' special-expenses'
                            },
                            summary: {
                                title: 'Physical aids'
                            }
                        }
                    },
                    'help-se-aids': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with physical aids",html: \'<p class="govuk-body">This applies to the cost of replacing physical aids used by the child before they were injured. These may include but are not limited to:</p><ul class="govuk-list govuk-list--bullet"><li>walking stick</li><li>spectacles</li><li>dentures</li></ul>\'})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-se-aids':
                            'Select yes if you paid to replace or repair physical aids because of the crime'
                    }
                },
                examples: [
                    {
                        'q-applicant-se-aids': true
                    },
                    {
                        'q-applicant-se-aids': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-se-aids': 'foo'
                    }
                ]
            }
        },
        'p-applicant-se-equipment': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-se-equipment'],
                additionalProperties: false,
                properties: {
                    'q-applicant-se-equipment': {
                        type: 'boolean',
                        title: 'Have you paid for any special equipment because of the injuries?',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: ' special-expenses'
                            },
                            summary: {
                                title: 'Special equipment'
                            }
                        }
                    },
                    'help-se-equipment': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help with special equipment",html: \'<p class="govuk-body">For example, special equipment may include but is not limited to:</p><ul class="govuk-list govuk-list--bullet"><li>walking aids</li><li>wheelchairs</li><li>kitchen implements</li><li>specially-adapted vehicles</li></ul>\'})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-se-equipment':
                            'Select yes if you paid for any special equipment because of the injuries'
                    }
                },
                examples: [
                    {
                        'q-applicant-se-equipment': true
                    },
                    {
                        'q-applicant-se-equipment': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-se-equipment': 'foo'
                    }
                ]
            }
        },
        'p-applicant-se-other': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-se-other'],
                additionalProperties: false,
                properties: {
                    'q-applicant-se-other': {
                        type: 'boolean',
                        title:
                            'Have you paid for anything else or are you likely to pay for any of the expenses already mentioned in future?',
                        description:
                            'Add more information about this at the end of the application.',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: ' special-expenses'
                            },
                            summary: {
                                title: 'Any other expenses or future expenses'
                            }
                        }
                    },
                    'help-understanding-expenses': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding your current and future expenses",html: "<p class=\'govuk-body\'>You may have expenses, now or in future, due to the injuries suffered.</p><ul class=\'govuk-list govuk-list--bullet\'><li>NHS or other state health services treatments</li><li>care or supervision</li><li>changes to your home</li><li>special equipment</li><li>replacing or repairing physical aids</li><li>costs of administering their affairs if they lack mental capacity to do so</li><li>fees to the Court of Protection, Public Guardian or Sheriff Court</li></ul>"})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-se-other':
                            'Select yes if you paid for anything else not already asked about'
                    }
                },
                examples: [
                    {
                        'q-applicant-se-other': true
                    },
                    {
                        'q-applicant-se-other': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-se-other': 'foo'
                    }
                ]
            }
        },
        'p--context-special-expenses': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                properties: {
                    'se-context': {
                        title: 'Special expenses',
                        description:
                            '<p class="govuk-body">We’re going to ask you about specific payments you may have had to make, or will make, because of the injuries caused by the crime.</p><p class="govuk-body">We can only consider certain expenses – known as “special expenses” – and will ask you questions about these.</p><p class="govuk-body">We’ll consider this application for special expenses if the victim has experienced one of the following for more than 28 weeks due to their injuries:</p><ul class="govuk-list govuk-list--bullet"><li>lost earnings</li><li>lost earning capacity</li><li>or been incapacitated to a similar extent</li></ul><p class="govuk-body">The 28 weeks can be a single period of time or cover several periods of time since the crime. Any special expenses payment will include payment for the first 28 weeks from when they were injured.</p><h2 class="govuk-heading-m">Providing evidence of expenses</h2><p class="govuk-body">We may ask you to provide evidence:</p><ul class="govuk-list govuk-list--bullet"> <li>of any expenses incurred or expected</li><li>that the products or services are not available free of charge</li><li>that they were needed as a result of the injuries</li></ul>'
                    }
                },
                examples: [{}],
                invalidExamples: [
                    {
                        foo: 'bar'
                    }
                ]
            }
        },
        'p-applicant-over-16': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-over-16'],
                additionalProperties: false,
                properties: {
                    'q-applicant-over-16': {
                        type: 'boolean',
                        title: 'Was the child 16 or over at the time of the crime?',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'impact'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-over-16':
                            'Select yes if the child over 16 at the time of the crime'
                    }
                },
                examples: [
                    {
                        'q-applicant-over-16': true
                    },
                    {
                        'q-applicant-over-16': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-over-16': 'foo'
                    }
                ]
            }
        },
        'p-applicant-affected-daily-capacity': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-affected-daily-capacity'],
                additionalProperties: false,
                properties: {
                    'q-applicant-affected-daily-capacity': {
                        type: 'boolean',
                        title:
                            'Has their capacity to do day-to-day activities been affected by their injuries?',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'impact'
                            },
                            summary: {
                                title: 'Is their capacity for day-to-day activities affected?'
                            }
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-affected-daily-capacity':
                            'Select yes if their capacity to do day-to-day activities been affected by the crime'
                    }
                },
                examples: [
                    {
                        'q-applicant-affected-daily-capacity': true
                    },
                    {
                        'q-applicant-affected-daily-capacity': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-affected-daily-capacity': 'foo'
                    }
                ]
            }
        },
        'p-applicant-affect-duration': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-affect-duration'],
                additionalProperties: false,
                properties: {
                    'q-applicant-affect-duration': {
                        type: 'boolean',
                        title: 'Has this lasted for more than 28 weeks?',
                        description:
                            'This can be a single period of time or cover several periods of time since the crime.',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: true
                            },
                            {
                                title: 'No',
                                const: false
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'impact'
                            }
                        }
                    },
                    'help-affect-duration': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding the timeframe of 28 weeks",html: \'<p class="govuk-body">28 weeks is more than six months.</p><p class="govuk-body">We cannot make a payment for the first 28 weeks of any loss of earnings suffered.</p>\'})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-affect-duration':
                            'Select yes if you had to buy or pay for the repair of physical aids'
                    }
                },
                examples: [
                    {
                        'q-applicant-affect-duration': true
                    },
                    {
                        'q-applicant-affect-duration': false
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-affect-duration': 'foo'
                    }
                ]
            }
        },
        'p-applicant-affect-future-duration': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-affect-future-duration'],
                additionalProperties: false,
                properties: {
                    'q-applicant-affect-future-duration': {
                        type: 'string',
                        title: 'Are their injuries likely to affect them for more than 28 weeks?',
                        description:
                            'This can be a single period of time or cover several periods of time since the crime.',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: 'yes'
                            },
                            {
                                title: 'No',
                                const: 'no'
                            },
                            {
                                title: 'I do not know',
                                const: 'dont-know'
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'impact'
                            }
                        }
                    },
                    'help-affect-future-duration': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding the timeframe of 28 weeks",html: \'<p class="govuk-body">28 weeks is more than six months.</p>\'})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-affect-future-duration':
                            'Select yes if you had to buy or pay for the repair of physical aids'
                    }
                },
                examples: [
                    {
                        'q-applicant-affect-future-duration': 'yes'
                    },
                    {
                        'q-applicant-affect-future-duration': 'no'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-affect-future-duration': 'foo'
                    }
                ]
            }
        },
        'p-applicant-future-work': {
            schema: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                required: ['q-applicant-future-work'],
                additionalProperties: false,
                properties: {
                    'q-applicant-future-work': {
                        type: 'string',
                        title:
                            'Has the child’s ability to work in future been affected by their injuries?',
                        oneOf: [
                            {
                                title: 'Yes',
                                const: 'yes'
                            },
                            {
                                title: 'No',
                                const: 'no'
                            },
                            {
                                title: 'I do not know',
                                const: 'dont-know'
                            }
                        ],
                        meta: {
                            classifications: {
                                theme: 'impact'
                            },
                            summary: {
                                title: 'Is their ability to work in future affected?'
                            }
                        }
                    },
                    'help-future-work': {
                        description:
                            '{% from "components/details/macro.njk" import govukDetails %}{{ govukDetails({summaryText: "Help understanding the ability to work in future",html: \'<p class="govuk-body">They must have no capacity or very limited capacity to work because of the injury. This must be for longer than 28 weeks.</p><p class="govuk-body">We cannot make a payment for the first 28 weeks of any loss of earnings suffered.</p>\'})}}'
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-future-work':
                            'Select yes if you had to buy or pay for the repair of physical aids'
                    }
                },
                examples: [
                    {
                        'q-applicant-future-work': 'yes'
                    },
                    {
                        'q-applicant-future-work': 'no'
                    }
                ],
                invalidExamples: [
                    {
                        'q-applicant-future-work': 'foo'
                    }
                ]
            }
        }
    },
    routes: {
        initial: 'p-applicant-fatal-claim',
        referrer: 'https://www.gov.uk/claim-compensation-criminal-injury/make-claim',
        summary: [
            'p-applicant-declaration',
            'p-mainapplicant-declaration-under-12',
            'p-mainapplicant-declaration-12-and-over'
        ],
        confirmation: 'p--confirmation',
        states: {
            'p-applicant-declaration': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--confirmation'
                        }
                    ]
                }
            },
            'p-mainapplicant-declaration-12-and-over': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--confirmation'
                        }
                    ]
                }
            },
            'p-mainapplicant-declaration-under-12': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--confirmation'
                        }
                    ]
                }
            },
            'p-applicant-british-citizen-or-eu-national': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--transition',
                            cond: [
                                '==',
                                '$.answers.p-applicant-british-citizen-or-eu-national.q-applicant-british-citizen-or-eu-national',
                                false
                            ]
                        },
                        {
                            target: 'p-mainapplicant-parent',
                            cond: [
                                '==',
                                '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                                'someone-else'
                            ]
                        },
                        {
                            target: 'p--context-applicant-details'
                        }
                    ]
                }
            },
            'p-applicant-are-you-18-or-over': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--transition',
                            cond: [
                                'and',
                                [
                                    '==',
                                    '$.answers.p-applicant-are-you-18-or-over.q-applicant-are-you-18-or-over',
                                    false
                                ],
                                [
                                    '==',
                                    '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                                    'myself'
                                ]
                            ]
                        },
                        {
                            target: 'p-applicant-british-citizen-or-eu-national'
                        }
                    ]
                }
            },
            'p-applicant-who-are-you-applying-for': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-are-you-18-or-over'
                        }
                    ]
                }
            },
            'p--before-you-continue': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-incident-type'
                        }
                    ]
                }
            },
            'p-applicant-incident-type': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-did-the-crime-happen-once-or-over-time'
                        }
                    ]
                }
            },
            'p--was-the-crime-reported-to-police': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-you-cannot-get-compensation',
                            cond: [
                                '==',
                                '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                                false
                            ]
                        },
                        {
                            target: 'p-applicant-has-crime-reference-number',
                            cond: [
                                '==',
                                '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                                true
                            ]
                        }
                    ]
                }
            },
            'p--when-was-the-crime-reported-to-police': {
                on: {
                    ANSWER: [
                        {
                            target:
                                'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police',
                            cond: [
                                'dateDifferenceGreaterThanTwoDays',
                                '$.answers.p--when-was-the-crime-reported-to-police.q--when-was-the-crime-reported-to-police',
                                '$.answers.p-applicant-when-did-the-crime-happen.q-applicant-when-did-the-crime-happen'
                            ]
                        },
                        {
                            target:
                                'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police',
                            cond: [
                                'dateDifferenceGreaterThanTwoDays',
                                '$.answers.p--when-was-the-crime-reported-to-police.q--when-was-the-crime-reported-to-police',
                                '$.answers.p-applicant-when-did-the-crime-stop.q-applicant-when-did-the-crime-stop'
                            ]
                        },
                        {
                            target: 'p--which-police-force-is-investigating-the-crime'
                        }
                    ]
                }
            },
            'p--whats-the-crime-reference-number': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-describe-incident'
                        }
                    ]
                }
            },
            'p-applicant-did-the-crime-happen-once-or-over-time': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-when-did-the-crime-happen',
                            cond: [
                                '==',
                                '$.answers.p-applicant-did-the-crime-happen-once-or-over-time.q-applicant-did-the-crime-happen-once-or-over-time',
                                'once'
                            ]
                        },
                        {
                            target: 'p-applicant-when-did-the-crime-start',
                            cond: [
                                '==',
                                '$.answers.p-applicant-did-the-crime-happen-once-or-over-time.q-applicant-did-the-crime-happen-once-or-over-time',
                                'over-a-period-of-time'
                            ]
                        }
                    ]
                }
            },
            'p-applicant-when-did-the-crime-happen': {
                on: {
                    ANSWER: [
                        {
                            target:
                                'p-applicant-select-reasons-for-the-delay-in-making-your-application',
                            cond: [
                                'dateExceedsTwoYearsFromNow',
                                '$.answers.p-applicant-when-did-the-crime-happen.q-applicant-when-did-the-crime-happen'
                            ]
                        },
                        {
                            target: 'p-applicant-where-did-the-crime-happen'
                        }
                    ]
                }
            },
            'p-applicant-when-did-the-crime-start': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-when-did-the-crime-stop'
                        }
                    ]
                }
            },
            'p-applicant-when-did-the-crime-stop': {
                on: {
                    ANSWER: [
                        {
                            target:
                                'p-applicant-select-reasons-for-the-delay-in-making-your-application',
                            cond: [
                                'dateExceedsTwoYearsFromNow',
                                '$.answers.p-applicant-when-did-the-crime-stop.q-applicant-when-did-the-crime-stop'
                            ]
                        },
                        {
                            target: 'p-applicant-where-did-the-crime-happen'
                        }
                    ]
                }
            },
            'p-applicant-select-reasons-for-the-delay-in-making-your-application': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-where-did-the-crime-happen'
                        }
                    ]
                }
            },
            'p-applicant-where-did-the-crime-happen': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-where-in-england-did-it-happen',
                            cond: [
                                '==',
                                '$.answers.p-applicant-where-did-the-crime-happen.q-applicant-where-did-the-crime-happen',
                                'england'
                            ]
                        },
                        {
                            target: 'p-applicant-where-in-scotland-did-it-happen',
                            cond: [
                                '==',
                                '$.answers.p-applicant-where-did-the-crime-happen.q-applicant-where-did-the-crime-happen',
                                'scotland'
                            ]
                        },
                        {
                            target: 'p-applicant-where-in-wales-did-it-happen',
                            cond: [
                                '==',
                                '$.answers.p-applicant-where-did-the-crime-happen.q-applicant-where-did-the-crime-happen',
                                'wales'
                            ]
                        },
                        {
                            target: 'p--you-need-to-contact-us',
                            cond: [
                                '==',
                                '$.answers.p-applicant-where-did-the-crime-happen.q-applicant-where-did-the-crime-happen',
                                'somewhere-else'
                            ]
                        }
                    ]
                }
            },
            'p-applicant-where-in-england-did-it-happen': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-describe-incident',
                            cond: [
                                '==',
                                '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                                false
                            ]
                        },
                        {
                            target: 'p--when-was-the-crime-reported-to-police',
                            cond: [
                                '==',
                                '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                                true
                            ]
                        }
                    ]
                }
            },
            'p-applicant-where-in-scotland-did-it-happen': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-describe-incident',
                            cond: [
                                '==',
                                '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                                false
                            ]
                        },
                        {
                            target: 'p--when-was-the-crime-reported-to-police',
                            cond: [
                                '==',
                                '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                                true
                            ]
                        }
                    ]
                }
            },
            'p-applicant-where-in-wales-did-it-happen': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-describe-incident',
                            cond: [
                                '==',
                                '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                                false
                            ]
                        },
                        {
                            target: 'p--when-was-the-crime-reported-to-police',
                            cond: [
                                '==',
                                '$.answers.p--was-the-crime-reported-to-police.q--was-the-crime-reported-to-police',
                                true
                            ]
                        }
                    ]
                }
            },
            'p--you-need-to-contact-us': {
                type: 'final'
            },
            'p--which-police-force-is-investigating-the-crime': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--whats-the-crime-reference-number'
                        }
                    ]
                }
            },
            'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--which-police-force-is-investigating-the-crime'
                        }
                    ]
                }
            },
            'p-offender-do-you-know-the-name-of-the-offender': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-physical-injuries',
                            cond: [
                                '==',
                                '$.answers.p-offender-do-you-know-the-name-of-the-offender.q-offender-do-you-know-the-name-of-the-offender',
                                false
                            ]
                        },
                        {
                            target: 'p-offender-enter-offenders-name',
                            cond: [
                                '==',
                                '$.answers.p-offender-do-you-know-the-name-of-the-offender.q-offender-do-you-know-the-name-of-the-offender',
                                true
                            ]
                        }
                    ]
                }
            },
            'p-offender-enter-offenders-name': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-offender-do-you-have-contact-with-offender'
                        }
                    ]
                }
            },
            'p-offender-do-you-have-contact-with-offender': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-physical-injuries',
                            cond: [
                                '==',
                                '$.answers.p-offender-do-you-have-contact-with-offender.q-offender-do-you-have-contact-with-offender',
                                false
                            ]
                        },
                        {
                            target: 'p-offender-describe-contact-with-offender',
                            cond: [
                                '==',
                                '$.answers.p-offender-do-you-have-contact-with-offender.q-offender-do-you-have-contact-with-offender',
                                true
                            ]
                        }
                    ]
                }
            },
            'p-offender-describe-contact-with-offender': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-physical-injuries'
                        }
                    ]
                }
            },
            'p-applicant-have-you-applied-to-us-before': {
                on: {
                    ANSWER: [
                        {
                            target:
                                'p-applicant-have-you-applied-for-or-received-any-other-compensation'
                        }
                    ]
                }
            },
            'p-applicant-have-you-applied-for-or-received-any-other-compensation': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-who-did-you-apply-to',
                            cond: [
                                '==',
                                '$.answers.p-applicant-have-you-applied-for-or-received-any-other-compensation.q-applicant-have-you-applied-for-or-received-any-other-compensation',
                                true
                            ]
                        },
                        {
                            target:
                                'p-applicant-applied-for-other-compensation-briefly-explain-why-not',
                            cond: [
                                '==',
                                '$.answers.p-applicant-have-you-applied-for-or-received-any-other-compensation.q-applicant-have-you-applied-for-or-received-any-other-compensation',
                                false
                            ]
                        }
                    ]
                }
            },
            'p-applicant-applied-for-other-compensation-briefly-explain-why-not': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-additional-info'
                        }
                    ]
                }
            },
            'p-applicant-who-did-you-apply-to': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-has-a-decision-been-made'
                        }
                    ]
                }
            },
            'p-applicant-has-a-decision-been-made': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-how-much-was-award',
                            cond: [
                                '==',
                                '$.answers.p-applicant-has-a-decision-been-made.q-applicant-has-a-decision-been-made',
                                true
                            ]
                        },
                        {
                            target: 'p-applicant-when-will-you-find-out',
                            cond: [
                                '==',
                                '$.answers.p-applicant-has-a-decision-been-made.q-applicant-has-a-decision-been-made',
                                false
                            ]
                        }
                    ]
                }
            },
            'p-applicant-when-will-you-find-out': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-additional-info'
                        }
                    ]
                }
            },
            'p-applicant-how-much-was-award': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-additional-info'
                        }
                    ]
                }
            },
            'p--context-applicant-details': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-enter-your-name',
                            cond: [
                                '==',
                                '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                                'someone-else'
                            ]
                        },
                        {
                            target: 'p-applicant-confirmation-method'
                        }
                    ]
                }
            },
            'p-applicant-enter-your-name': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-have-you-been-known-by-any-other-names'
                        }
                    ]
                }
            },
            'p-applicant-have-you-been-known-by-any-other-names': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-enter-your-date-of-birth',
                            cond: [
                                '==',
                                '$.answers.p-applicant-have-you-been-known-by-any-other-names.q-applicant-have-you-been-known-by-any-other-names',
                                false
                            ]
                        },
                        {
                            target: 'p-applicant-what-other-names-have-you-used',
                            cond: [
                                '==',
                                '$.answers.p-applicant-have-you-been-known-by-any-other-names.q-applicant-have-you-been-known-by-any-other-names',
                                true
                            ]
                        }
                    ]
                }
            },
            'p-applicant-what-other-names-have-you-used': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-enter-your-date-of-birth'
                        }
                    ]
                }
            },
            'p-applicant-enter-your-date-of-birth': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--transition',
                            cond: [
                                'and',
                                [
                                    'dateLessThanEighteenYearsAgo',
                                    '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth'
                                ],
                                [
                                    '==',
                                    '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                                    'myself'
                                ]
                            ]
                        },
                        {
                            target: 'p-applicant-enter-your-address'
                        }
                    ]
                }
            },
            'p-applicant-enter-your-email-address': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--before-you-continue'
                        }
                    ]
                }
            },
            'p-applicant-enter-your-address': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--before-you-continue',
                            cond: [
                                '==',
                                '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                                'someone-else'
                            ]
                        },
                        {
                            target: 'p-applicant-enter-your-telephone-number',
                            cond: [
                                '==',
                                '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method',
                                'email'
                            ]
                        },
                        {
                            target: 'p-applicant-enter-your-email-address',
                            cond: [
                                '==',
                                '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method',
                                'text'
                            ]
                        }
                    ]
                }
            },
            'p-applicant-enter-your-telephone-number': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--before-you-continue'
                        }
                    ]
                }
            },
            'p--check-your-answers': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-declaration',
                            cond: [
                                '==',
                                '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                                'myself'
                            ]
                        },
                        {
                            target: 'p-mainapplicant-declaration-under-12',
                            cond: [
                                'and',
                                [
                                    '==',
                                    '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                                    'someone-else'
                                ],
                                [
                                    'dateCompare',
                                    '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth',
                                    '<',
                                    '-12',
                                    'years'
                                ]
                            ]
                        },
                        {
                            target: 'p-mainapplicant-declaration-12-and-over'
                        }
                    ]
                }
            },
            'p--confirmation': {
                type: 'final'
            },
            'p--context-offender': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-offender-do-you-know-the-name-of-the-offender'
                        }
                    ]
                }
            },
            'p-applicant-you-cannot-get-compensation': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-who-are-you-applying-for'
                        }
                    ]
                }
            },
            'p-applicant-confirmation-method': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--transition-no-phone-or-email',
                            cond: [
                                '==',
                                '$.answers.p-applicant-confirmation-method.q-applicant-confirmation-method',
                                'none'
                            ]
                        },
                        {
                            target: 'p-applicant-enter-your-name'
                        }
                    ]
                }
            },
            'p--context-compensation': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-have-you-applied-to-us-before'
                        }
                    ]
                }
            },
            'p--transition': {
                type: 'final'
            },
            'p--transition-no-phone-or-email': {
                type: 'final'
            },
            'p-applicant-are-you-claiming-for-physical-injuries': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-infections',
                            cond: [
                                '==',
                                '$.answers.p-applicant-are-you-claiming-for-physical-injuries.q-applicant-are-you-claiming-for-physical-injuries',
                                false
                            ]
                        },
                        {
                            target: 'p-applicant-physical-injuries',
                            cond: [
                                '==',
                                '$.answers.p-applicant-are-you-claiming-for-physical-injuries.q-applicant-are-you-claiming-for-physical-injuries',
                                true
                            ]
                        }
                    ]
                }
            },
            'p--context-dmi-details': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-do-you-have-disabling-mental-injury'
                        }
                    ]
                }
            },
            'p-applicant-do-you-have-disabling-mental-injury': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-crime-impact',
                            cond: [
                                '==',
                                '$.answers.p-applicant-do-you-have-disabling-mental-injury.q-applicant-do-you-have-disabling-mental-injury',
                                false
                            ]
                        },
                        {
                            target: 'p-applicant-mental-injury-duration',
                            cond: [
                                '==',
                                '$.answers.p-applicant-do-you-have-disabling-mental-injury.q-applicant-do-you-have-disabling-mental-injury',
                                true
                            ]
                        }
                    ]
                }
            },
            'p-applicant-mental-injury-duration': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-crime-impact'
                        }
                    ]
                }
            },
            'p-applicant-select-treatments': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-has-your-treatment-finished-dmi'
                        }
                    ]
                }
            },
            'p-applicant-has-your-treatment-finished-dmi': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-are-you-registered-with-gp'
                        }
                    ]
                }
            },
            'p-applicant-affect-on-daily-life-dmi': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-special-expenses'
                        }
                    ]
                }
            },
            'p--context-treatment': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-treatment-for-physical-injuries',
                            cond: [
                                '==',
                                '$.answers.p-applicant-are-you-claiming-for-physical-injuries.q-applicant-are-you-claiming-for-physical-injuries',
                                true
                            ]
                        },
                        {
                            target: 'p-applicant-select-treatments',
                            cond: [
                                '==',
                                '$.answers.p-applicant-do-you-have-disabling-mental-injury.q-applicant-do-you-have-disabling-mental-injury',
                                true
                            ]
                        },
                        {
                            target: 'p-applicant-are-you-registered-with-gp'
                        }
                    ]
                }
            },
            'p-applicant-are-you-registered-with-gp': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-have-you-seen-a-gp'
                        }
                    ]
                }
            },
            'p-applicant-have-you-seen-a-gp': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-gp-enter-your-address',
                            cond: [
                                'or',
                                [
                                    '==',
                                    '$.answers.p-applicant-are-you-registered-with-gp.q-applicant-are-you-registered-with-gp',
                                    true
                                ],
                                [
                                    '==',
                                    '$.answers.p-applicant-have-you-seen-a-gp.q-applicant-have-you-seen-a-gp',
                                    true
                                ]
                            ]
                        },
                        {
                            target: 'p-applicant-medical-help'
                        }
                    ]
                }
            },
            'p-applicant-dentist-visited': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-dentist-address',
                            cond: [
                                '==',
                                '$.answers.p-applicant-dentist-visited.q-applicant-dentist-visited',
                                true
                            ]
                        },
                        {
                            target: 'p-applicant-medical-help',
                            cond: [
                                '==',
                                '$.answers.p-applicant-have-you-seen-a-gp.q-applicant-have-you-seen-a-gp',
                                false
                            ]
                        },
                        {
                            target: 'p--context-compensation'
                        }
                    ]
                }
            },
            'p-applicant-dentist-address': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-medical-help',
                            cond: [
                                '==',
                                '$.answers.p-applicant-have-you-seen-a-gp.q-applicant-have-you-seen-a-gp',
                                false
                            ]
                        },
                        {
                            target: 'p--context-compensation'
                        }
                    ]
                }
            },
            'p-gp-enter-your-address': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-dentist-visited',
                            cond: [
                                'includes',
                                '$.answers.p-applicant-physical-injuries.q-applicant-physical-injuries',
                                'upper'
                            ]
                        },
                        {
                            target: 'p-applicant-medical-help',
                            cond: [
                                '==',
                                '$.answers.p-applicant-have-you-seen-a-gp.q-applicant-have-you-seen-a-gp',
                                false
                            ]
                        },
                        {
                            target: 'p--context-compensation'
                        }
                    ]
                }
            },
            'p-applicant-physical-injuries': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-infections'
                        }
                    ]
                }
            },
            'p--context-physical-injuries': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-are-you-claiming-for-physical-injuries'
                        }
                    ]
                }
            },
            'p-applicant-infections': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-select-infections',
                            cond: [
                                'and',
                                [
                                    '==',
                                    '$.answers.p-applicant-infections.q-applicant-infections',
                                    'yes'
                                ],
                                [
                                    '==',
                                    '$.answers.p-applicant-incident-type.q-applicant-incident-type',
                                    'SEX'
                                ]
                            ]
                        },
                        {
                            target: 'p-applicant-select-non-sa-infections',
                            cond: [
                                '==',
                                '$.answers.p-applicant-infections.q-applicant-infections',
                                'yes'
                            ]
                        },
                        {
                            target: 'p--context-pregnancy',
                            cond: [
                                'and',
                                [
                                    '!=',
                                    '$.answers.p-applicant-infections.q-applicant-infections',
                                    'yes'
                                ],
                                [
                                    'dateCompare',
                                    '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth',
                                    '>',
                                    '-7',
                                    'years'
                                ]
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-select-infections': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-pregnancy',
                            cond: [
                                'dateCompare',
                                '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth',
                                '>',
                                '-7',
                                'years'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-pregnancy': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-pregnancy-loss'
                        }
                    ]
                }
            },
            'p-applicant-treatment-for-physical-injuries': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-select-treatments',
                            cond: [
                                '==',
                                '$.answers.p-applicant-do-you-have-disabling-mental-injury.q-applicant-do-you-have-disabling-mental-injury',
                                true
                            ]
                        },
                        {
                            target: 'p-applicant-has-your-treatment-finished-dmi'
                        }
                    ]
                }
            },
            'p-applicant-medical-help': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-treatment-address',
                            cond: [
                                '==',
                                '$.answers.p-applicant-medical-help.q-applicant-medical-help',
                                true
                            ]
                        },
                        {
                            target: 'p--context-compensation'
                        }
                    ]
                }
            },
            'p-applicant-treatment-address': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-compensation'
                        }
                    ]
                }
            },
            'p--context-money': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-unable-to-work-duration'
                        }
                    ]
                }
            },
            'p-applicant-unable-to-work-duration': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-future-work',
                            cond: [
                                '==',
                                '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                                'someone-else'
                            ]
                        },
                        {
                            target: 'p-applicant-affect-on-daily-life-dmi'
                        }
                    ]
                }
            },
            'p-applicant-job-when-crime-happened': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-unable-to-work',
                            cond: [
                                '==',
                                '$.answers.p-applicant-job-when-crime-happened.q-applicant-job-when-crime-happened',
                                true
                            ]
                        },
                        {
                            target: 'p-applicant-work-details-option'
                        }
                    ]
                }
            },
            'p-applicant-work-details-option': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-affected-daily-capacity',
                            cond: [
                                '==',
                                '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                                'someone-else'
                            ]
                        },
                        {
                            target: 'p-applicant-unable-to-work'
                        }
                    ]
                }
            },
            'p-applicant-expenses': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-compensation'
                        }
                    ]
                }
            },
            'p-applicant-pregnancy-loss': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-select-non-sa-infections': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-pregnancy',
                            cond: [
                                'dateCompare',
                                '$.answers.p-applicant-enter-your-date-of-birth.q-applicant-enter-your-date-of-birth',
                                '>',
                                '-7',
                                'years'
                            ]
                        },
                        {
                            target: 'p--context-dmi-details'
                        }
                    ]
                }
            },
            'p-applicant-fatal-claim': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--transition',
                            cond: [
                                '==',
                                '$.answers.p-applicant-fatal-claim.q-applicant-fatal-claim',
                                true
                            ]
                        },
                        {
                            target: 'p--was-the-crime-reported-to-police',
                            cond: [
                                '==',
                                '$.answers.p-applicant-fatal-claim.q-applicant-fatal-claim',
                                false
                            ]
                        }
                    ]
                }
            },
            'p-applicant-provide-additional-information': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-additional-information',
                            cond: [
                                '==',
                                '$.answers.p-applicant-provide-additional-information.q-applicant-provide-additional-information',
                                true
                            ]
                        },
                        {
                            target: 'p--check-your-answers',
                            cond: [
                                '==',
                                '$.answers.p-applicant-provide-additional-information.q-applicant-provide-additional-information',
                                false
                            ]
                        }
                    ]
                }
            },
            'p-applicant-additional-information': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--check-your-answers'
                        }
                    ]
                }
            },
            'p-applicant-describe-incident': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-incident-description',
                            cond: [
                                '==',
                                '$.answers.p-applicant-describe-incident.q-applicant-describe-incident',
                                true
                            ]
                        },
                        {
                            target: 'p--context-offender',
                            cond: [
                                '==',
                                '$.answers.p-applicant-describe-incident.q-applicant-describe-incident',
                                false
                            ]
                        }
                    ]
                }
            },
            'p-applicant-incident-description': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-offender'
                        }
                    ]
                }
            },
            'p-applicant-has-crime-reference-number': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-who-are-you-applying-for'
                        }
                    ]
                }
            },
            'p--context-additional-info': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-provide-additional-information'
                        }
                    ]
                }
            },
            system: {
                type: 'final'
            },
            owner: {
                type: 'final'
            },
            'p--context-crime-impact': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-over-16',
                            cond: [
                                '==',
                                '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                                'someone-else'
                            ]
                        },
                        {
                            target: 'p-applicant-job-when-crime-happened'
                        }
                    ]
                }
            },
            'p-mainapplicant-parent': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--transition',
                            cond: [
                                '==',
                                '$.answers.p-mainapplicant-parent.q-mainapplicant-parent',
                                false
                            ]
                        },
                        {
                            target: 'p--context-authority'
                        }
                    ]
                }
            },
            'p--context-authority': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-mainapplicant-context-details'
                        }
                    ]
                }
            },
            'p-mainapplicant-context-details': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-mainapplicant-confirmation-method'
                        }
                    ]
                }
            },
            'p-mainapplicant-confirmation-method': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--transition-no-phone-or-email',
                            cond: [
                                '==',
                                '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method',
                                'none'
                            ]
                        },
                        {
                            target: 'p-mainapplicant-enter-your-name'
                        }
                    ]
                }
            },
            'p-mainapplicant-enter-your-name': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-mainapplicant-enter-your-address'
                        }
                    ]
                }
            },
            'p-mainapplicant-enter-your-address': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-mainapplicant-enter-your-telephone-number',
                            cond: [
                                '==',
                                '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method',
                                'email'
                            ]
                        },
                        {
                            target: 'p-mainapplicant-enter-your-email-address',
                            cond: [
                                '==',
                                '$.answers.p-mainapplicant-confirmation-method.q-mainapplicant-confirmation-method',
                                'text'
                            ]
                        }
                    ]
                }
            },
            'p-mainapplicant-enter-your-email-address': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-mainapplicant-relationship'
                        }
                    ]
                }
            },
            'p-mainapplicant-enter-your-telephone-number': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-mainapplicant-relationship'
                        }
                    ]
                }
            },
            'p-mainapplicant-relationship': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-mainapplicant-shared-responsibility'
                        }
                    ]
                }
            },
            'p-mainapplicant-shared-responsibility': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-mainapplicant-shared-responsibility-name',
                            cond: [
                                '==',
                                '$.answers.p-mainapplicant-shared-responsibility.q-mainapplicant-shared-responsibility',
                                true
                            ]
                        },
                        {
                            target: 'p-mainapplicant-care-order'
                        }
                    ]
                }
            },
            'p-mainapplicant-shared-responsibility-name': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-mainapplicant-care-order'
                        }
                    ]
                }
            },
            'p-mainapplicant-care-order': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-mainapplicant-care-order-authority',
                            cond: [
                                '==',
                                '$.answers.p-mainapplicant-care-order.q-mainapplicant-care-order',
                                true
                            ]
                        },
                        {
                            target: 'p--context-applicant-details'
                        }
                    ]
                }
            },
            'p-mainapplicant-care-order-authority': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-applicant-details'
                        }
                    ]
                }
            },
            'p--context-pregnancy': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-pregnancy',
                            cond: [
                                '==',
                                '$.answers.p-applicant-incident-type.q-applicant-incident-type',
                                'SEX'
                            ]
                        },
                        {
                            target: 'p-applicant-pregnancy-loss'
                        }
                    ]
                }
            },
            'p-applicant-unable-to-work': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-unable-to-work-duration',
                            cond: [
                                '==',
                                '$.answers.p-applicant-unable-to-work.q-applicant-unable-to-work',
                                true
                            ]
                        },
                        {
                            target: 'p-applicant-future-work',
                            cond: [
                                'and',
                                [
                                    '==',
                                    '$.answers.p-applicant-unable-to-work.q-applicant-unable-to-work',
                                    false
                                ],
                                [
                                    '==',
                                    '$.answers.p-applicant-who-are-you-applying-for.q-applicant-who-are-you-applying-for',
                                    'someone-else'
                                ]
                            ]
                        },
                        {
                            target: 'p--context-treatment'
                        }
                    ]
                }
            },
            'p-applicant-se-treatment': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-se-home-care'
                        }
                    ]
                }
            },
            'p-applicant-se-home-care': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-se-home-changes'
                        }
                    ]
                }
            },
            'p-applicant-se-home-changes': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-se-equipment'
                        }
                    ]
                }
            },
            'p-applicant-se-aids': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-se-other'
                        }
                    ]
                }
            },
            'p-applicant-se-equipment': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-se-aids'
                        }
                    ]
                }
            },
            'p-applicant-se-other': {
                on: {
                    ANSWER: [
                        {
                            target: 'p--context-treatment'
                        }
                    ]
                }
            },
            'p--context-special-expenses': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-se-treatment'
                        }
                    ]
                }
            },
            'p-applicant-over-16': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-affected-daily-capacity',
                            cond: ['==', '$.answers.p-applicant-over-16.q-applicant-over-16', false]
                        },
                        {
                            target: 'p-applicant-job-when-crime-happened'
                        }
                    ]
                }
            },
            'p-applicant-affected-daily-capacity': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-affect-duration',
                            cond: [
                                '==',
                                '$.answers.p-applicant-affected-daily-capacity.q-applicant-affected-daily-capacity',
                                true
                            ]
                        },
                        {
                            target: 'p-applicant-future-work'
                        }
                    ]
                }
            },
            'p-applicant-affect-duration': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-affect-future-duration',
                            cond: [
                                '==',
                                '$.answers.p-applicant-affect-duration.q-applicant-affect-duration',
                                false
                            ]
                        },
                        {
                            target: 'p-applicant-future-work'
                        }
                    ]
                }
            },
            'p-applicant-affect-future-duration': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-future-work'
                        }
                    ]
                }
            },
            'p-applicant-future-work': {
                on: {
                    ANSWER: [
                        {
                            target: 'p-applicant-affect-on-daily-life-dmi'
                        }
                    ]
                }
            }
        }
    },
    answers: {},
    onSubmit: {
        id: 'task0',
        type: 'sequential',
        data: [
            {
                id: 'task1',
                type: 'generateReferenceNumber',
                data: {
                    questionnaire: '$.questionnaireDef',
                    logger: '$.logger'
                }
            },
            {
                id: 'task2',
                type: 'transformAndUpload',
                data: {
                    questionnaireDef: '$.questionnaireDef',
                    logger: '$.logger'
                }
            },
            {
                id: 'task3',
                type: 'sendSubmissionMessageToSQS',
                data: {
                    questionnaire: '$.questionnaireDef',
                    logger: '$.logger'
                }
            },
            {
                id: 'task4',
                type: 'sendNotifyMessageToSQS',
                data: {
                    questionnaire: '$.questionnaireDef',
                    logger: '$.logger'
                }
            }
        ]
    },
    progress: ['p-applicant-fatal-claim'],
    taxonomies: {
        theme: {
            l10n: {
                vars: {
                    lng: 'en',
                    context: {
                        $data:
                            '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                    },
                    ns: 'theme'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'theme',
                        resources: {
                            applicant_details: {
                                title: 'Your details',
                                'title_someone-else': 'Victim details'
                            },
                            injuries: {
                                title: 'Your injuries',
                                'title_someone-else': "The child's injuries"
                            },
                            mental_health: {
                                title: 'Your mental health',
                                'title_someone-else': "The child's mental health"
                            },
                            treatment: {
                                title: 'Your treatment',
                                'title_someone-else': "The child's treatment"
                            }
                        }
                    }
                ]
            },
            taxa: {
                'about-application': {
                    title: 'About your application'
                },
                'applicant-details': {
                    title: 'l10nt:applicant_details.title{?lng,context,ns}'
                },
                crime: {
                    title: 'About the crime'
                },
                offender: {
                    title: 'About the offender'
                },
                injuries: {
                    title: 'l10nt:injuries.title{?lng,context,ns}'
                },
                pregnancy: {
                    title: 'Pregnancy'
                },
                'mental-health': {
                    title: 'l10nt:mental_health.title{?lng,context,ns}'
                },
                impact: {
                    title: 'The impact the injuries have had'
                },
                'special-expenses': {
                    title: 'Special expenses'
                },
                treatment: {
                    title: 'l10nt:treatment.title{?lng,context,ns}'
                },
                'other-compensation': {
                    title: 'Other compensation'
                },
                'additional-info': {
                    title: 'Additional information'
                },
                main_applicant_details: {
                    title: 'Your details'
                },
                default: {
                    title: 'Other Information'
                }
            }
        }
    },
    meta: {
        questionnaireDocumentVersion: '5.0.0',
        onComplete: {
            tasks: {
                sendEmail: {
                    type: 'sendEmail',
                    l10n: {
                        vars: {
                            lng: 'en',
                            context: {
                                $data:
                                    '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                            },
                            ns: 'notification-confirmation'
                        },
                        translations: [
                            {
                                language: 'en',
                                namespace: 'notification-confirmation',
                                resources: {
                                    templateId: '0a8224c3-9600-4d14-9491-72609dc1dece',
                                    'templateId_someone-else':
                                        'b4b08849-c56f-4e82-9f8a-14ab2a50f607',
                                    emailAddress:
                                        '||/answers/p-applicant-confirmation-method/q-applicant-enter-your-email-address||',
                                    'emailAddress_someone-else':
                                        '||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-email-address||'
                                }
                            }
                        ]
                    },
                    data: {
                        templateId: 'l10nt:templateId{?lng,context,ns}',
                        emailAddress: 'l10nt:emailAddress{?lng,context,ns}',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                },
                sendSms: {
                    type: 'sendSms',
                    l10n: {
                        vars: {
                            lng: 'en',
                            context: {
                                $data:
                                    '/answers/p-applicant-who-are-you-applying-for/q-applicant-who-are-you-applying-for'
                            },
                            ns: 'notification-confirmation'
                        },
                        translations: [
                            {
                                language: 'en',
                                namespace: 'notification-confirmation',
                                resources: {
                                    templateId: '0905cf29-054a-4650-9044-a58768fd9381',
                                    'templateId_someone-else':
                                        'c2f8f580-3214-4144-bab1-1bbb30863deb',
                                    phoneNumber:
                                        '||/answers/p-applicant-confirmation-method/q-applicant-enter-your-telephone-number||',
                                    'phoneNumber_someone-else':
                                        '||/answers/p-mainapplicant-confirmation-method/q-mainapplicant-enter-your-telephone-number||'
                                }
                            }
                        ]
                    },
                    data: {
                        templateId: 'l10nt:templateId{?lng,context,ns}',
                        phoneNumber: 'l10nt:phoneNumber{?lng,context,ns}',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    }
                }
            }
        },
        attributes: {
            'q-applicant-physical-injuries': {
                title: 'What was injured?'
            }
        }
    }
};

module.exports = Object.freeze(validQTemplate);
