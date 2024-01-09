describe('license', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/license', );
    cy.title().should('eq', 'License | @idrinth/api-bench',);
  },);
},);
