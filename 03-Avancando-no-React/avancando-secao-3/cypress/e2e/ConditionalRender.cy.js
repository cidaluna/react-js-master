describe('My Tests', () => {
    const MYAPP = 'http://localhost:5173';

    beforeEach(() => {
        // Arrange
        cy.visit(MYAPP).as('openReactApp');
    });   

    it('Shows reset button ', () => {
        // Act - verificar se o botao está visível e contém o texto correto, em seguida clicar no botao
        cy.get('.resetBtn')
          .should('be.visible')
          .and('have.text', 'Reset nome');
        
        cy.get('button.resetBtn').click();

          // Assert - verifica o texto do botao após o clique
        cy.get('.nameDisplay')
          .should('be.visible')
          .and('contain.text', 'Cida Luna');
    });

});