describe('ListWrapper Component', () => {
    beforeEach(() => {
      // Visit the page where ListWrapper is used
      cy.visit('http://localhost:5173'); // Substitua pelo caminho correto para a página que renderiza ListWrapper
    });

    const mockItems = [
        {
          id: 1,
          name: "Javascript",
        },
        {
          id: 2,
          name: "Java",
        },
        {
          id: 3,
          name: "SQL",
        },
    ];
  
    it('renders list items correctly', () => {
      mockItems.forEach(item => {
        // Verifica se cada elemento do DOM (Document Object Model) existe na página contendo esse name
        cy.contains(item.name).should('exist');
      });
    });
    
    it('get elements and verify if them contain name text', () => {
      mockItems.forEach(item => {
        // Seleciona todos os elementos no DOM que possuem o atributo data-cy="list-item" e verifica
        // se pelo menos um contém o texto do item atual.
        cy.get('[data-cy="list-item"]').should('contain.text', item.name);
      });
    });

  /*
  cy.contains(): Procura por texto diretamente no DOM. É uma forma simples de verificar se um texto 
  específico está visível na página.

  cy.get() com data-cy: Seleciona elementos com base em um seletor. O uso de data-cy é uma prática 
  recomendada porque torna a  seleção de elementos mais robusta e menos sujeita a mudanças no layout
  ou estilo. Depois de selecionar os elementos, você verifica se eles contêm o texto esperado.
  */
});