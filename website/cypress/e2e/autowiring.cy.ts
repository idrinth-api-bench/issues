describe('usage/autowiring', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/usage/autowiring', );
  },);
  it('title matches', () => {
    cy.title().should('eq', 'Autowiring | Usage | @idrinth/api-bench',);
  },);
},);
