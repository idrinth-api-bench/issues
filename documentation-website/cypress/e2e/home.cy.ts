import {
  BASE_URL,
  page,
  flakeTimeout,
  multiple,
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
    cy.get('header div a[href="/"]',)
      .find('img',)
      .should('exist',);
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
  it('Cookie consent form', () => {
    cy.get('div.cookie-consent', flakeTimeout,)
      .should('not.exist',);
    cy.get('form.cookie-consent', flakeTimeout,)
      .as('form',);
    cy.get('ul#consent-choices', flakeTimeout,)
      .as('choices',);
    cy.get('@choices',)
      .should('exist',);
    cy.get('@choices',)
      .find('li.service',)
      .then(
        (li,) => {
          cy.wrap(li,)
            .get('input',)
            .as('input',)
            .should('exist',)
            .should('not.be.checked',);
          cy.get('@input',)
            .click(multiple,)
            .should('be.checked',);
          cy.get('@input',)
            .click(multiple,)
            .should('not.be.checked',);
            },);
    cy.get('@choices',)
      .contains('Matomo tracking',)
      .should('exist',);
    cy.get('@choices',)
      .contains('YouTube',)
      .should('exist',);
  },);
  it('cookie consent accept', () => {
    cy.get('button.cookie-consent-accept-button',)
      .as('accept',)
      .contains('Accept',)
      .should('exist',);
    cy.get('@accept',)
      .click();
    cy.get('div.cookie-consent',)
      .should('not.exist',);
  },);
  it('cookie consent decline', () => {
    cy.get('button.cookie-consent-custom-button',)
      .as('custom',)
      .contains('As above',)
      .should('exist',);
    cy.get('@custom',)
      .click();
    cy.get('div.cookie-consent',)
      .should('not.exist',);
  },);
  it('cookie consent custom', () => {
    cy.get('button.cookie-consent-decline-button',)
      .as('decline',)
      .contains('Decline',)
      .should('exist',);
    cy.get('@decline',)
      .click();
    cy.get('div.cookie-consent',)
      .should('not.exist',);
  },);
},);
