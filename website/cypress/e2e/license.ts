describe('license', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/license', );
  },);
  it('title matches', () => {
    cy.title().should('eq', 'License | @idrinth/api-bench',);
  },);
},);
