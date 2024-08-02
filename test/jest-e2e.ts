import { pathsToModuleNameMapper, JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '..',
  testEnvironment: 'node',
  testRegex: '.e2e-spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  setupFiles: ['<rootDir>/test/jest-env-vars.ts'],
  moduleNameMapper: pathsToModuleNameMapper(
    {
      'src/*': ['src/*'],
    },
    {
      prefix: '<rootDir>',
    },
  ),
  globalSetup: './test/setup.ts',
  globalTeardown: './test/teardown.ts',
  modulePathIgnorePatterns: ['dist', 'cdk', '.aws-sam'],
};

export default config;
