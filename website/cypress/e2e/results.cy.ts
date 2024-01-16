describe('usage/results', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/usage/results/',);
    cy.url().should('eq', 'http://localhost:8080/usage/results/',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/usage/results/',);
    cy.title().should('eq', 'Results | Usage | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.visit('http://localhost:8080/usage/results/',);
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Results',);
  },);
  it('link to self exists', () => {
    cy.visit('http://localhost:8080/usage/results/',);
    cy.get('header nav a[href="/usage/results/"]',)
      .invoke('text',)
      .should('eq', 'Results',);
  },);
  it('breadcrumbs exists', () => {
    cy.visit('http://localhost:8080/usage/results',);
    cy.get('nav.breadcrumbs a[href="/"]',)
      .invoke('text',)
      .should('eq', 'Home',);
    cy.get('nav.breadcrumbs a[href="/usage/"]',)
      .invoke('text',)
      .should('eq', 'Usage',);
    cy.get('nav.breadcrumbs a[href="/usage/results/"]',)
      .invoke('text',)
      .should('eq', 'Results',);
  },);
},);
