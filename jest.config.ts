import { pathsToModuleNameMapper, JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/../test/jest-env-vars.ts'],
  moduleNameMapper: pathsToModuleNameMapper(
    {
      'src/*': ['../src/*'],
    },
    {
      prefix: '<rootDir>',
    },
  ),
};

export default jestConfig;
