describe('usage', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/usage',);
  },);
  it('title matches', () => {
    cy.title().should('eq', 'Usage | @idrinth/api-bench',);
  },);
},);
