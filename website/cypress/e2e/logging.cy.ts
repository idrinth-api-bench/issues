describe('usage/logging', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/usage/logging',);
    cy.title().should('eq', 'Logging | Usage | @idrinth/api-bench',);
  },);
},);
