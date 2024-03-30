import {
  BASE_URL,
  page,
} from '../fixtures/constants.ts';

describe('home', () => {
  beforeEach('Navigate to page', () => {
    cy.visit(page['code-of-conduct'],);
  },);
  it('can be visited', () => {
    cy.url().should('eq', BASE_URL + page['code-of-conduct'],);
  },);
  it('title matches', () => {
    cy.title().should('eq', 'Code of Conduct | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Contributor Covenant  Code of Conduct',);
  },);
  it('link to self exists', () => {
    cy.get('footer a[href="/code-of-conduct/"]',)
      .invoke('text',)
      .should('eq', 'Code of Conduct',);
  },);
  it('breadcrumbs exists', () => {
    cy.get('nav.breadcrumbs a[href="/"]',)
      .invoke('text',)
      .should('eq', 'Home',);
    cy.get('nav.breadcrumbs li:last-of-type',)
      .invoke('text',)
      .should('eq', 'Code of Conduct',);
  },);
  it('Copy right updated for the current year.', () => {
    cy.get('footer span',)
      .invoke('text',)
      .should(
        'eq',
        `©2020-${ new Date().getFullYear() } Björn Büttner and contributors.`,
      );
  },);
},);
