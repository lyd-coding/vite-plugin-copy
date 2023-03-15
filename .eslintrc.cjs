const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended",
        "prettier"
    ],
    plugins: [
        "@typescript-eslint",
    ],
    rules: {
        // "prettier/prettier": "error"
        "@typescript-eslint/no-var-requires": "off",
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
    }
})