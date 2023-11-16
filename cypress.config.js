const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://boards.greenhouse.io/testlio/jobs/5474274?source=LinkedIn#app'
  },
});
