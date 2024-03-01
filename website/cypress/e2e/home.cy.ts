import {
  BASE_URL,
  page,
} from '../fixtures/constants.ts';

describe('home', () => {
  beforeEach('Navigate to page', () => {
    cy.visit(page.home,);
  },);
  it('can be visited', () => {
    cy.url().should('eq', BASE_URL + page.home,);
  },);
  it('title matches', () => {
    cy.title().should('eq', 'Home | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'What does this project do?',);
  },);
  it('link to self exists', () => {
    cy.get('header nav a[href="/"]',)
      .invoke('text',)
      .should('eq', 'Home',);
  },);
  it('breadcrumbs exists', () => {
    cy.get('nav.breadcrumbs li:last-of-type',)
      .invoke('text',)
      .should('eq', 'Home',);
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
