import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '48y7pw',
  video: false,
  reporter: "junit",
  reporterOptions: {
    mochaFile: "coverage/test-output-cypress-[hash].xml",
  },
  env: {
    API_URL: "https://local.api.keoghs.co.uk",
    OKTA_DOMAIN: "keoghs.oktapreview.com",
    OKTA_CLIENTID: "0oa481do94e7PdN2y1d7",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://local.keoghs-react-sample.co.uk",
  },
});
