describe('imprint', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/imprint',);
    cy.url().should('eq', 'http://localhost:8080/imprint',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/imprint',);
    cy.title().should('eq', 'Imprint | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.visit('http://localhost:8080/imprint',);
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Imprint',);
  },);
},);
