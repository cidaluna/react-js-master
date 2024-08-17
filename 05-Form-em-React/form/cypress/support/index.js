// cypress/support/index.js

// Importa comandos personalizados aqui
import './commands';

// Configuração global ou hooks podem ser adicionados aqui
// Por exemplo, você pode adicionar um hook global de beforeEach

beforeEach(() => {
  // Código a ser executado antes de cada teste
  cy.log('Executando antes de cada teste');
  // Limpa o localStorage antes de cada teste
  cy.clearLocalStorage();
});

// Adicionar mais configuração global ou hooks conforme necessário
