// cypress.config.mjs
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      // Implementar ouvintes de eventos do Node aqui, se necessário
    },
    specPattern: "cypress/e2e/**/*.cy.js", // padrao para encontrar arquivos de teste
    supportFile: "cypress/support/index.js",
    // browser: 'chrome', // definindo o navegador padrão aqui (opcional) rodar npx cypress open
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
