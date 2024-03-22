module.exports = {
  env: {
    node: true,
    es2020: true
  },
  ignorePatterns: [
    '.eslintrc.cjs',
    'node_modules',
  ],
  plugins: [
    "fastify-security-rules",
  ],
  rules: {
    "fastify-security-rules/detect-bind-on-all-ifaces": 2,
  },
};
