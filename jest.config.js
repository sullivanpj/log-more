/** @format */

module.exports = {
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "clover", "text-summary"],
  setupFilesAfterEnv: ["./jest.setup.js"],
  testMatch: ["<rootDir>/src/**/*.test.{tsx,ts}"],
  testPathIgnorePatterns: ["<rootDir>/types/"],
  moduleNameMapper: {
    "log-more": "<rootDir>/src/index.ts",
  },
};
