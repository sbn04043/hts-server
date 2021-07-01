module.exports = {
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    'max-len': ['error', { code: 150, ignoreRemplateLiterals: true }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    'import/prefer-default-export': 'off',
    '@typesciprt-eslint/no-misused-promises': 'off',
    'no-await-in-loop': 'off',
  },
};
