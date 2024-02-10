describe('support', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/support/',);
    cy.url().should('eq', 'http://localhost:8080/support/',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/support/',);
    cy.title().should('eq', 'Support | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.visit('http://localhost:8080/support/',);
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Support',);
  },);
  it('link to self exists', () => {
    cy.visit('http://localhost:8080/support/',);
    cy.get('footer a[href="/support/"]',)
      .invoke('text',)
      .should('eq', 'Support',);
  },);
  it('breadcrumbs exists', () => {
    cy.visit('http://localhost:8080/support',);
    cy.get('nav.breadcrumbs a[href="/"]',)
      .invoke('text',)
      .should('eq', 'Home',);
    cy.get('nav.breadcrumbs li:last-of-type',)
      .invoke('text',)
      .should('eq', 'Support',);
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
