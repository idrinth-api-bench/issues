describe('usage/autowiring', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/usage/autowiring/',);
    cy.url().should('eq', 'http://localhost:8080/usage/autowiring/',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/usage/autowiring/',);
    cy.title().should('eq', 'Autowiring | Usage | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.visit('http://localhost:8080/usage/autowiring/',);
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Autowiring Route Parameters',);
  },);
  it('link to self exists', () => {
    cy.visit('http://localhost:8080/usage/autowiring/',);
    cy.get('header nav a[href="/usage/autowiring/"]',)
      .invoke('text',)
      .should('eq', 'Autowiring',);
  },);
  it('breadcrumbs exists', () => {
    cy.visit('http://localhost:8080/usage/autowiring/',);
    cy.get('nav.breadcrumbs a[href="/"]',)
      .invoke('text',)
      .should('eq', 'Home',);
    cy.get('nav.breadcrumbs a[href="/usage/"]',)
      .invoke('text',)
      .should('eq', 'Usage',);
    cy.get('nav.breadcrumbs a[href="/usage/autowiring/"]',)
      .invoke('text',)
      .should('eq', 'Autowiring',);
  },);
},);
