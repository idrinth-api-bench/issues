import {
  BASE_URL,
  page,
} from '../fixtures/constants.ts';

describe('404', () => {
  beforeEach('Navigate to page', () => {
    cy.visit(page.notFound,);
  },);
  it('can be visited', () => {
    cy.url().should('eq', BASE_URL + page.notFound,);
  },);
  it('title matches', () => {
    cy.title().should('eq', '404 NOT FOUND | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.get('h1',)
      .invoke('text',)
      .should('eq', '404 Not Found',);
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
