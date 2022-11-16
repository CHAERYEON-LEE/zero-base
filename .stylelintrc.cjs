module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'declaration-colon-newline-after': 'always-multi-line',
    'property-no-unknown': [
      true,
      {
        ingnoreProperties: ['content-visibility'],
      },
    ],
  },
  ignoreFiles: [
    'build/**',
    'coverage/**',
    'dist/**',
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
  ],
};
