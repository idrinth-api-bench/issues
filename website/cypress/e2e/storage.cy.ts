describe('usage/storage', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/usage/storage',);
    cy.title().should('eq', 'Storage | Usage | @idrinth/api-bench',);
  },);
},);
