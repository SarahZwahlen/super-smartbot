import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

module.exports = [
    {
        languageOptions: {},
        files: ['**/*.js', '**/*.ts'],
        plugins: {
            // prettier: prettier
            // @typescript-eslint: @typescript-eslint
        },
        // extends: [
        //     'eslint:recommended',
        //     'plugin:@typescript-eslint/eslint-recommended',
        //     'plugin:@typescript-eslint/recommended',
        //     'prettier'
        // ],
        rules: {
            'no-console': 1

            // 'prettier/prettier': 2
        }
    },
    eslintPluginPrettierRecommended
];
