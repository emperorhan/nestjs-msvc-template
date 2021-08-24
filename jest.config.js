const { pathsToModuleNameMapper } = require("ts-jest/utils");
const {
    compilerOptions: { paths },
} = require("./tsconfig.json");

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
    testRegex: "./src/.*\\.(test|spec)?\\.(ts|ts)$",
    transform: {
        "^.+\\.(t|j)s$": "ts-jest",
    },
    coverageDirectory: "./coverage",
    clearMocks: true,
    moduleNameMapper: pathsToModuleNameMapper(paths, {
        prefix: "<rootDir>/",
    }),
    maxWorkers: 1,
};
