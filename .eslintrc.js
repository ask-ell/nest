module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: "./tsconfig.json"
  },
  rules: {
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/no-extraneous-class": "off"
  }
}
