describe('contributing', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/contributing',);
    cy.url().should('eq', 'http://localhost:8080/contributing',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/contributing',);
    cy.title().should('eq', 'Contributing | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.visit('http://localhost:8080/contributing',);
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Contributing',);
  },);
},);
