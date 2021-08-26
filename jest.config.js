const { pathsToModuleNameMapper } = require("ts-jest/utils");

module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    globals: {
        "ts-jest": {
            tsconfig: "<rootDir>/tsconfig.json",
            diagnostics: false,
        },
    },
    roots: ["<rootDir>/"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testRegex: "./packages/.*\\.(test|spec)?\\.(ts|ts)$",
    transform: {
        "^.+\\.(t|j)s$": "ts-jest",
    },
    coverageDirectory: "./coverage",
    clearMocks: true,
    maxWorkers: 1,
};
