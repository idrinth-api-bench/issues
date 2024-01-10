describe('support', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/support',);
    cy.url().should('eq', 'http://localhost:8080/support',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/support',);
    cy.title().should('eq', 'Support',);
  },);
  it('h1 matches', () => {
    cy.visit('http://localhost:8080/support',);
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Support',);
  },);
},);
