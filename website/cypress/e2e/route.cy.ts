describe('usage/route', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/usage/route',);
    cy.title().should('eq', 'Route | Usage | @idrinth/api-bench',);
  },);
},);
