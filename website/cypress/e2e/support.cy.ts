import {
  BASE_URL,
  page,
} from '../fixtures/constants.ts';

describe('support', () => {
  beforeEach('Navigate to page', () => {
    cy.visit(page.support,);
  },);
  it('can be visited', () => {
    cy.url().should('eq', BASE_URL + page.support,);
  },);
  it('title matches', () => {
    cy.title().should('eq', 'Support | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Support',);
  },);
  it('link to self exists', () => {
    cy.get('footer a[href="/support/"]',)
      .invoke('text',)
      .should('eq', 'Support',);
  },);
  it('breadcrumbs exists', () => {
    cy.get('nav.breadcrumbs a[href="/"]',)
      .invoke('text',)
      .should('eq', 'Home',);
    cy.get('nav.breadcrumbs li:last-of-type',)
      .invoke('text',)
      .should('eq', 'Support',);
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
