describe('My Tests', () => {
    const MYAPP = 'http://localhost:5173';

    beforeEach(() => {
        // Arrange
        cy.visit(MYAPP).as('openReactApp');
    });

    const IMAGEURL = 'https://i.imgur.com/1bX5QH6.jpg';
        
    it('Status code 200 when request image', () => {
      // Act and Assert
      cy.request({
        method: 'GET',
        url: IMAGEURL,
        }).then(({ status }) => {
        expect(status).to.eq(200);
        });
    });

    it('Shows avatar image', () => {
        // Act and Assert
        cy.get('.avatar').should('be.visible')
          .should('have.attr', 'alt', 'Test image'); // Verifica se o atributo alt está presente com o valor informado
    });

    it('Shows info username', () => {
        // Act and Assert
        cy.get('.profile p')
          .should('contain.text', 'Username: Lin', { matchCase: false }) // use matchCase to ignore case sensitivity
          .and('be.visible');
    });

});