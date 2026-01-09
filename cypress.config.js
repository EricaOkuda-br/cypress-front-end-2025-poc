import { createRequire } from "node:module";
import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";

const require = createRequire(import.meta.url);
const envConfig = require("./cypress/config/env.js");

export default defineConfig({
  e2e: {
    env: envConfig.env,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",

    setupNodeEvents(on, config) {
      allureCypress(on, config);
      return config;
    },
  },
});