describe('usage', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/usage',);
    cy.title().should('eq', 'Usage | @idrinth/api-bench',);
  },);
},);
