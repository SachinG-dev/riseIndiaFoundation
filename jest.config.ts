const { defaults } = require("jest-config");

module.exports = {
  ...defaults,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    ".(css|less|scss|sass)$": "identity-obj-proxy",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/contexts/(.*)$": "<rootDir>/src/contexts/$1",
    "^@/styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@/types": "<rootDir>/src/types.d.ts",
    "^@/utils/(.*)$": "<rootDir>/src/utils/$1",
  },
  moduleDirectories: ["node_modules", "<rootDir>"],
  testEnvironment: "jest-environment-jsdom",
};
