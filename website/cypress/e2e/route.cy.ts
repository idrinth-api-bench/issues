describe('usage/route', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/usage/route',);
  },);
  it('title matches', () => {
    cy.title().should('eq', 'Route | Usage | @idrinth/api-bench',);
  },);
},);
