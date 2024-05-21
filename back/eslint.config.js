const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = [
    {
        languageOptions: {},
        files: ['**/*.js', '**/*.ts'],
        plugins: {},
        rules: {
            'no-console': 1
        }
    },
    eslintPluginPrettierRecommended
];
