module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'plugin:svelte/recommended',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'node_modules',
  ],
  plugins: [
    'svelte'
  ],
  parserOptions: {
    extraFileExtensions: ['.svelte'],
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ]
};
