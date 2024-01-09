describe('imprint', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/imprint',);
    cy.title().should('eq', 'Imprint | @idrinth/api-bench',);
  },);
},);
