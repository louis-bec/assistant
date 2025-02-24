module.exports = {
  testMatch: ['**/src/tests/**/*.test.js'],
  testTimeout: 30000,
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  preset: 'jest-puppeteer',
};