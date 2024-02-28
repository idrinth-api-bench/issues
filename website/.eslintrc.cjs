module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "plugin:react-hooks/recommended",
    "plugin:react/recommended", // new line
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'node_modules',
    'src/routes.tsx',
  ],
  plugins: ["react-refresh", "react" ], // added react
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
