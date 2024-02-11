import {
  BASE_URL,
  page,
} from '../fixtures/constants.ts';

describe('usage/quick-start', () => {
  beforeEach('Navigate to page', () => {
    cy.visit(page.quickStart,);
  },);
  it('can be visited', () => {
    cy.url().should('eq', BASE_URL + page.quickStart,);
  },);
  it('title matches', () => {
    cy.title().should('eq', 'Quick Start | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.get('h1',)
      .invoke('text',)
      .should('eq', '@idrinth/api-bench quick start',);
  },);
  it('link to self exists', () => {
    cy.get('header nav a[href="/quick-start/"]',)
      .invoke('text',)
      .should('eq', 'Quick Start',);
  },);
  it('breadcrumbs exists', () => {
    cy.get('nav.breadcrumbs a[href="/"]',)
      .invoke('text',)
      .should('eq', 'Home',);
    cy.get('nav.breadcrumbs li:last-of-type',)
      .invoke('text',)
      .should('eq', 'Quick Start',);
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
