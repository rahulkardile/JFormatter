module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["<rootDir>/src/tests"],
    transform: {
      "^.+\\.ts$": "ts-jest",
    },
    moduleFileExtensions: ["ts", "js", "json"],
    collectCoverage: true,
    coverageDirectory: "coverage",
    testMatch: ["**/*.test.ts"],
  };
  