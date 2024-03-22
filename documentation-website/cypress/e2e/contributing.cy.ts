import {
  BASE_URL,
  page,
} from '../fixtures/constants.ts';

describe('contributing', () => {
  beforeEach('Navigate to page', () => {
    cy.visit(page.contributing,);
  },);
  it('can be visited', () => {
    cy.url().should('eq', BASE_URL + page.contributing,);
  },);
  it('title matches', () => {
    cy.title().should('eq', 'Contributing | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Contributing',);
  },);
  it('link to self exists', () => {
    cy.get('header nav a[href="/contributing/"]',)
      .invoke('text',)
      .should('eq', 'Contributing',);
  },);
  it('breadcrumbs exists', () => {
    cy.get('nav.breadcrumbs a[href="/"]',)
      .invoke('text',)
      .should('eq', 'Home',);
    cy.get('nav.breadcrumbs li:last-of-type',)
      .invoke('text',)
      .should('eq', 'Contributing',);
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
