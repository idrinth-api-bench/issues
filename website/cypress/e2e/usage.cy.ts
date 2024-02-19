import {
  BASE_URL,
  page,
} from '../fixtures/constants.ts';

describe('usage', () => {
  beforeEach('Navigate to page', () => {
    cy.visit(page.usage,);
  },);
  it('can be visited', () => {
    cy.url().should('eq', BASE_URL + page.usage,);
  },);
  it('title matches', () => {
    cy.title().should('eq', 'Usage | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Usage & Examples',);
  },);
  it('link to self exists', () => {
    cy.get('header nav a[href="/usage/"]',)
      .invoke('text',)
      .should('eq', 'Usage & Examples',);
  },);
  it('breadcrumbs exists', () => {
    cy.get('nav.breadcrumbs a[href="/"]',)
      .invoke('text',)
      .should('eq', 'Home',);
    cy.get('nav.breadcrumbs li:last-of-type',)
      .invoke('text',)
      .should('eq', 'Usage & Examples',);
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
