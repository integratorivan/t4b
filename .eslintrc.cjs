module.exports = {
  extends: ['@cyber-walrus'],
  plugins: ['@reatom'],
  rules: {
      '@typescript-eslint/no-misused-promises': 'off',
      'no-void': 'off',
      'filenames/match-regex': 'off',
  },
  settings: {
      atomPostfix: 'Atom',
  },
};
