describe('usage/logging', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/usage/logging/',);
    cy.url().should('eq', 'http://localhost:8080/usage/logging/',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/usage/logging/',);
    cy.title().should('eq', 'Logging | Usage | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.visit('http://localhost:8080/usage/logging/',);
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Logging',);
  },);
  it('link to self exists', () => {
    cy.visit('http://localhost:8080/usage/logging/',);
    cy.get('header nav a[href="/usage/logging/"]',)
      .invoke('text',)
      .should('eq', 'Logging',);
  },);
  it('breadcrumbs exists', () => {
    cy.visit('http://localhost:8080/usage/logging/',);
    cy.get('nav.breadcrumbs a[href="/"]',)
      .invoke('text',)
      .should('eq', 'Home',);
    cy.get('nav.breadcrumbs a[href="/usage/"]',)
      .invoke('text',)
      .should('eq', 'Usage & Examples',);
    cy.get('nav.breadcrumbs li:last-of-type',)
      .invoke('text',)
      .should('eq', 'Logging',);
  },);
},);
