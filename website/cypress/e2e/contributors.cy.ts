describe('contributors', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/contributing/contributors/',);
    cy.url().should('eq', 'http://localhost:8080/contributing/contributors/',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/contributing/contributors/',);
    cy.title()
      .should('eq', 'Contributors | Contributing | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.visit('http://localhost:8080/contributing/contributors/',);
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Contributors',);
  },);
  it('link to self exists', () => {
    cy.visit('http://localhost:8080/contributing/contributors/',);
    cy.get('header nav a[href="/contributing/contributors/"]',)
      .invoke('text',)
      .should('eq', 'Contributors',);
  },);
  it('breadcrumbs exists', () => {
    cy.visit('http://localhost:8080/contributing/contributors/',);
    cy.get('nav.breadcrumbs a[href="/"]',)
      .invoke('text',)
      .should('eq', 'Home',);
    cy.get('nav.breadcrumbs a[href="/contributing/"]',)
      .invoke('text',)
      .should('eq', 'Contributing',);
    cy.get('nav.breadcrumbs li:last-of-type',)
      .invoke('text',)
      .should('eq', 'Contributors',);
  },);
},);
