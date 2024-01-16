describe('usage/middlewares', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/usage/middlewares/',);
    cy.url().should('eq', 'http://localhost:8080/usage/middlewares/',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/usage/middlewares/',);
    cy.title().should('eq', 'Middlewares | Usage | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.visit('http://localhost:8080/usage/middlewares/',);
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Middlewares',);
  },);
  it('link to self exists', () => {
    cy.visit('http://localhost:8080/usage/middlewares/',);
    cy.get('header nav a[href="/usage/middlewares/"]',)
      .invoke('text',)
      .should('eq', 'Middlewares',);
  },);
  it('breadcrumbs exists', () => {
    cy.visit('http://localhost:8080/usage/middlewares',);
    cy.get('nav.breadcrumbs a[href="/"]',)
      .invoke('text',)
      .should('eq', 'Home',);
    cy.get('nav.breadcrumbs a[href="/usage/"]',)
      .invoke('text',)
      .should('eq', 'Usage',);
    cy.get('nav.breadcrumbs a[href="/usage/middlewares/"]',)
      .invoke('text',)
      .should('eq', 'Middlewares',);
  },);
},);
