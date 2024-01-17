describe('usage/route', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/usage/route/',);
    cy.url().should('eq', 'http://localhost:8080/usage/route/',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/usage/routes/',);
    cy.title().should('eq', 'Routes | Usage | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.visit('http://localhost:8080/usage/routes/',);
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Routes',);
  },);
  it('link to self exists', () => {
    cy.visit('http://localhost:8080/usage/routes/',);
    cy.get('header nav a[href="/usage/routes/"]',)
      .invoke('text',)
      .should('eq', 'Routes',);
  },);
  it('breadcrumbs exists', () => {
    cy.visit('http://localhost:8080/usage/routes',);
    cy.get('nav.breadcrumbs a[href="/"]',)
      .invoke('text',)
      .should('eq', 'Home',);
    cy.get('nav.breadcrumbs a[href="/usage/"]',)
      .invoke('text',)
      .should('eq', 'Usage & Examples',);
    cy.get('nav.breadcrumbs a[href="/usage/routes/"]',)
      .invoke('text',)
      .should('eq', 'Routes',);
  },);
},);
