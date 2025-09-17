const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Node event listeners
    },
    baseUrl: 'http://localhost:3000'
  }
});