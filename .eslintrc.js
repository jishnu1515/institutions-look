module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
    plugins: ['react', 'react-hooks'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    ignorePatterns: ['out/**', '.next/**', '.expo/**', 'node_modules/**', 'android/**', 'ios/**'],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/prop-types': 0,
        'no-fallthrough': 'error',
        'react/react-in-jsx-scope': 0,
    },
    env: {
        jest: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
