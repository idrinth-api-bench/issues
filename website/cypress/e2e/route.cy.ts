describe('usage/route', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/usage/route',);
    cy.url().should('eq', 'http://localhost:8080/usage/route',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/usage/route',);
    cy.title().should('eq', 'Route | Usage | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.visit('http://localhost:8080/usage/route',);
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Route',);
  },);
},);
