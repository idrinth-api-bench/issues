describe('home', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/',);
    cy.url().should('eq', 'http://localhost:8080/',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/',);
    cy.title().should('eq', 'Home | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.visit('http://localhost:8080/',);
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'What does this project do?',);
  },);
},);
