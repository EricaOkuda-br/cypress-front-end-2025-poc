import { createRequire } from "node:module";
import os from "node:os";
import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";

const require = createRequire(import.meta.url);
const envConfig = require("./cypress/config/env.js");

export default defineConfig({
  e2e: {
    env: envConfig.env,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",

    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
        categories: [
          {
            name: "Passed tests",
            matchedStatuses: ["passed", "failed", "broken"],
          },
        ],
        environmentInfo: {
          Browser: "Electron",
          URL: config.env.BASE_URL || "https://www.saucedemo.com/",
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
        },
      });
      return config;
    },
  },
});
