
# e2e-santa project

Jenkins password
6a31f861b80240c9b0679ac777830121

C:\Users\═шъшЄр\.jenkins\secrets\initialAdminPassword




const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  projectId: "h5f2nk",
  video: false,
  viewportWidth: 1366,
  viewportHeight: 768,
  e2e: {
    //baseUrl: "https://staging.lpitko.ru",
    baseUrl: "https://santa-secret.ru/",
    testIsolation: false,
    setupNodeEvents(on, config) {
      on("file:preprocessor", webpackPreprocessor);
      allureWriter(on, config);
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    env: {
      allureReuseAfterSpec: true,
    },
  },
});