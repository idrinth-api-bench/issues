describe('usage/middlewares', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/usage/middlewares',);
    cy.url().should('eq', 'http://localhost:8080/usage/middlewares',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/usage/middlewares',);
    cy.title().should('eq', 'Middlewares | Usage | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.visit('http://localhost:8080/usage/middlewares',);
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Middlewares',);
  },);
},);
