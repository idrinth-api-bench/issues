import {
  BASE_URL,
  page,
} from '../fixtures/constants.ts';

describe('usage/autowiring', () => {
  beforeEach('navigate to page', () => {
    cy.visit(page.autowiring,);
  },);
  it('can be visited', () => {
    cy.url().should('eq', BASE_URL + page.autowiring,);
  },);
  it('title matches', () => {
    cy.title().should('eq', 'Autowiring | Usage | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Autowiring Route Parameters',);
  },);
  it('link to self exists', () => {
    cy.get('header nav a[href="/usage/autowiring/"]',)
      .invoke('text',)
      .should('eq', 'Autowiring',);
  },);
  it('breadcrumbs exists', () => {
    cy.get('nav.breadcrumbs a[href="/"]',)
      .invoke('text',)
      .should('eq', 'Home',);
    cy.get('nav.breadcrumbs a[href="/usage/"]',)
      .invoke('text',)
      .should('eq', 'Usage & Examples',);
    cy.get('nav.breadcrumbs li:last-of-type',)
      .invoke('text',)
      .should('eq', 'Autowiring',);
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
