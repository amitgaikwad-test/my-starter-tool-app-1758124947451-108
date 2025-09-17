import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'http://localhost:3000'
  },
  webServer: {
    command: 'npm start',
    port: 3000
  }
});