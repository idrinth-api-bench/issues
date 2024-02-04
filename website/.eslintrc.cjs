module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'node_modules',
    'src/routes.tsx',
  ],
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
