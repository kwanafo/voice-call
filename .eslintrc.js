module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-explicit-any': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': 'warn',
    'semi': ['warn', 'always'],
    'quotes': ['warn', 'single'],
  },
};
extends: [
  'plugin:@typescript-eslint/recommended',
  'prettier'
],
