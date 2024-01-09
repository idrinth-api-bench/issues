describe('usage/autowiring', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/usage/autowiring',);
    cy.url().should('eq', 'http://localhost:8080/usage/autowiring',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/usage/autowiring',);
    cy.title().should('eq', 'Autowiring | Usage | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.visit('http://localhost:8080/usage/autowiring',);
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Autowiring Route Parameters',);
  },);
},);
