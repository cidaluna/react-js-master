// cypress/support/commands.js

// Comando personalizado para login (exemplo)
Cypress.Commands.add('login', (username, password) => {
    cy.visit('/login');
    cy.get('input[name=username]').type(username);
    cy.get('input[name=password]').type(password);
    cy.get('button[type=submit]').click();
  });
  
  // Adicione mais comandos personalizados conforme necessário
  