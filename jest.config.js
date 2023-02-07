const { resolve } = require('path');
const root = resolve(__dirname);
module.exports = {
    rootDir: root,
    displayName: 'root-tests',
    testMatch: ['<rootDir>/src/**/*.test.ts'],
    testEnvironment: 'node',
    clearMocks: true,
    preset: 'ts-jest',
    moduleNameMapper: {
        '@src/(.*)': '<rootDir>/src/$1',
        '@test/(.*)': '<rootDir>/test/$1',
        '@Api/(.*)': '<rootDir>/src/Api/$1',
        '@Application/(.*)': '<rootDir>/src/Application/$1',
        '@Contracts/(.*)': '<rootDir>/src/Contracts/$1',
        '@Domain/(.*)': '<rootDir>/src/Domain/$1',
        '@Infrastructure/(.*)': '<rootDir>/src/Infrastructure/$1',
    }
};