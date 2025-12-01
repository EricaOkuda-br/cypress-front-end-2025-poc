const { defineConfig } = require("cypress");
import { allureCypress } from "allure-cypress/reporter";
const envConfig = require('./cypress/config/env.js');

module.exports = defineConfig({
  e2e: {
   
    env: envConfig.env,

    setupNodeEvents(on, config) {
      allureCypress(on, config);
      return config;
    }
  },
});