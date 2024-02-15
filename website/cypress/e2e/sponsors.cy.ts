import {
  BASE_URL,
  page,
} from '../fixtures/constants.ts';

describe('contributing/sponsors', () => {
  beforeEach('Navigate to page', () => {
    cy.visit(page.sponsors,);
  },);
  it('can be visited', () => {
    cy.url().should('eq', BASE_URL + page.sponsors,);
  },);
  it('title matches', () => {
    cy.title().should('eq', 'Sponsors | Contributing | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Sponsors',);
  },);
  it('link to self exists', () => {
    cy.get('nav a[href="/contributing/sponsors/"]',)
      .invoke('text',)
      .should('eq', 'Sponsors',);
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
