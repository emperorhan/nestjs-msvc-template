const { pathsToModuleNameMapper } = require("ts-jest/utils");
const {
    compilerOptions: { paths },
} = require("./tsconfig.json");
const sharedConfig = require("../../jest.config.js");

module.exports = {
    ...sharedConfig,
    moduleNameMapper: pathsToModuleNameMapper(paths, {
        prefix: "<rootDir>/src",
    }),
};
