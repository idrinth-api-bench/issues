describe('usage/quick-start', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/quick-start/',);
    cy.url().should('eq', 'http://localhost:8080/quick-start/',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/quick-start/',);
    cy.title().should('eq', 'Quick Start | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.visit('http://localhost:8080/quick-start/',);
    cy.get('h1',)
      .invoke('text',)
      .should('eq', '@idrinth/api-bench quick start',);
  },);
  it('link to self exists', () => {
    cy.visit('http://localhost:8080/quick-start/',);
    cy.get('header nav a[href="/quick-start/"]',)
      .invoke('text',)
      .should('eq', 'Quick Start',);
  },);
  it('breadcrumbs exists', () => {
    cy.visit('http://localhost:8080/usage/autowiring/',);
    cy.get('nav.breadcrumbs a[href="/"]',)
      .invoke('text',)
      .should('eq', 'Home',);
    cy.get('nav.breadcrumbs li:last-of-type',)
      .invoke('text',)
      .should('eq', 'Quick Start',);
  },);
},);
