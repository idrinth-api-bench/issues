describe('usage', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/usage/',);
    cy.url().should('eq', 'http://localhost:8080/usage/',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/usage/',);
    cy.title().should('eq', 'Usage | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.visit('http://localhost:8080/usage/',);
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Usage & Examples',);
  },);
  it('link to self exists', () => {
    cy.visit('http://localhost:8080/usage/',);
    cy.get('header nav a[href="/usage/"]',)
      .invoke('text',)
      .should('eq', 'Usage & Examples',);
  },);
  it('breadcrumbs exists', () => {
    cy.visit('http://localhost:8080/usage/',);
    cy.get('nav.breadcrumbs a[href="/"]',)
      .invoke('text',)
      .should('eq', 'Home',);
    cy.get('nav.breadcrumbs a[href="/usage/"]',)
      .invoke('text',)
      .should('eq', 'Usage',);
  },);
},);
