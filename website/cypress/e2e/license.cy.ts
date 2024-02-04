describe('license', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/license/',);
    cy.url().should('eq', 'http://localhost:8080/license/',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/license/',);
    cy.title().should('eq', 'License | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.visit('http://localhost:8080/license/',);
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'MIT License',);
  },);
  it('link to self exists', () => {
    cy.visit('http://localhost:8080/license/',);
    cy.get('footer a[href="/license/"]',)
      .invoke('text',)
      .should('eq', 'License',);
  },);
  it('breadcrumbs exists', () => {
    cy.visit('http://localhost:8080/license/',);
    cy.get('nav.breadcrumbs a[href="/"]',)
      .invoke('text',)
      .should('eq', 'Home',);
    cy.get('nav.breadcrumbs li:last-of-type',)
      .invoke('text',)
      .should('eq', 'License',);
  },);
},);
