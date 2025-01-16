const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space',
    screenshotOnRunFailure: false,
    experimentalRunAllSpecs: true,
    reporter: 'cypress-mochawesome-reporter',

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
