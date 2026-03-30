const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      GITHUB_TOKEN: 'SEU_TOKEN_AQUI',
    },
  },

  viewportWidth: 1920,
  viewportHeight: 1080,
});