import {
  BASEURL,
  page,
} from './constants.ts'



describe('license', () => {
  beforeEach(`navigate to page`, () => { cy.visit(`/${page.license}`,); });
  it('can be visited', () => {
    cy.visit(`/${page.license}`,);
    cy.url().should('eq', BASEURL + page.license,);
  },);
  it('title matches', () => {
    cy.title().should('eq', 'License | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'MIT License',);
  },);
  it('link to self exists', () => {
    cy.get('footer a[href="/license/"]',)
      .invoke('text',)
      .should('eq', 'License',);
  },);
  it('breadcrumbs exists', () => {
    cy.get('nav.breadcrumbs a[href="/"]',)
      .invoke('text',)
      .should('eq', 'Home',);
    cy.get('nav.breadcrumbs li:last-of-type',)
      .invoke('text',)
      .should('eq', 'License',);
  },);
  it('Copy right updated for the current year.', () => {
    cy.get('footer span',)
      .invoke('text',)
      .should(
        'eq',
        `©2020-${new Date().getFullYear()} Björn Büttner and contributors.`,
      );
  },);
},);
