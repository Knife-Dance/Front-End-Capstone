const {defaults} = require('jest-config');
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  "moduleNameMapper": { "\\.(s?css|jpg|png|svg)$": '<rootDir>/css.js'},
  "resolver": undefined
}