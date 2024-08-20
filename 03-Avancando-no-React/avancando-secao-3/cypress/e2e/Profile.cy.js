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

    it('Show avatar image', () => {
        // Act 
        cy.get('.avatar').click();
        // Assert
        cy.get('.avatar').should('be.visible');
    });

    it('Show info username', () => {
        // Act 
        cy.get('.profile p').click();
        // Assert
        cy.get('.profile').contains('p', 'Username: Lin', { matchCase: false }); // use matchCase to ignore case sensitivity
    });

});