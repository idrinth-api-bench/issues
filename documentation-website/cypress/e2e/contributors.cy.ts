import {
  BASE_URL,
  page,
} from '../fixtures/constants.ts';

describe('contributors', () => {
  beforeEach('Navigate to page', () => {
    cy.visit(page.contributors,);
  },);
  it('can be visited', () => {
    cy.url().should('eq', BASE_URL + page.contributors,);
  },);
  it('title matches', () => {
    cy.title()
      .should('eq', 'Contributors | Contributing | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Contributors',);
  },);
  it('link to self exists', () => {
    cy.get('header nav a[href="/contributing/contributors/"]',)
      .invoke('text',)
      .should('eq', 'Contributors',);
  },);
  it('breadcrumbs exists', () => {
    cy.get('nav.breadcrumbs a[href="/"]',)
      .invoke('text',)
      .should('eq', 'Home',);
    cy.get('nav.breadcrumbs a[href="/contributing/"]',)
      .invoke('text',)
      .should('eq', 'Contributing',);
    cy.get('nav.breadcrumbs li:last-of-type',)
      .invoke('text',)
      .should('eq', 'Contributors',);
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
