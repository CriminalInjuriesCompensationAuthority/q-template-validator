'use strict';

const js = require('@eslint/js');
const globals = require('globals');
const prettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = [
    {
        ignores: ['**/coverage/**', '**/stuff/**', '**/dist/**'],
    },
    js.configs.recommended,
    {
        files: ['**/*.{js,cjs}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'commonjs',
            globals: globals.node,
        },
        rules: {
            curly: ['error', 'all'],
            strict: ['error', 'safe'],
        },
    },
    prettierRecommended,
];
