describe('usage/storage', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/usage/storage/',);
    cy.url().should('eq', 'http://localhost:8080/usage/storage/',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/usage/storage/',);
    cy.title().should('eq', 'Storage | Usage | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.visit('http://localhost:8080/usage/storage/',);
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Storage',);
  },);
  it('link to self exists', () => {
    cy.visit('http://localhost:8080/usage/storage/',);
    cy.get('header nav a[href="/usage/storage/"]',)
      .invoke('text',)
      .should('eq', 'Storage',);
  },);
  it('breadcrumbs exists', () => {
    cy.visit('http://localhost:8080/usage/storage/',);
    cy.get('nav.breadcrumbs a[href="/"]',)
      .invoke('text',)
      .should('eq', 'Home',);
    cy.get('nav.breadcrumbs a[href="/usage/"]',)
      .invoke('text',)
      .should('eq', 'Usage & Examples',);
    cy.get('nav.breadcrumbs li:last-of-type',)
      .invoke('text',)
      .should('eq', 'Storage',);
  },);
  it('Copy right updated for the current year.', () => {
    cy.visit('http://localhost:8080/',);
    cy.get('footer span',)
      .invoke('text',)
      .should(
        'eq',
        `©2020-${ new Date().getFullYear() } Björn Büttner and contributors.`,
      );
  },);
},);
