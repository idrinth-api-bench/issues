describe('usage/middlewares', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/usage/middlewares',);
  },);
  it('title matches', () => {
    cy.title().should('eq', 'Middlewares | Usage | @idrinth/api-bench',);
  },);
},);
