describe('contributing/sponsors', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/contributing/sponsors/',);
    cy.url().should('eq', 'http://localhost:8080/contributing/sponsors/',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/contributing/sponsors/',);
    cy.title().should('eq', 'Sponsors | Contributing | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.visit('http://localhost:8080/contributing/sponsors/',);
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Sponsors',);
  },);
  it('link to self exists', () => {
    cy.visit('http://localhost:8080/contributing/sponsors/',);
    cy.get('nav a[href="/contributing/sponsors/"]',)
      .invoke('text',)
      .should('eq', 'Sponsors',);
  },);
},);
