describe('usage/storage', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/usage/storage',);
    cy.url().should('eq', 'http://localhost:8080/usage/storage',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/usage/storage',);
    cy.title().should('eq', 'Storage | Usage | @idrinth/api-bench',);
  },);
},);
