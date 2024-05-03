import {
  flakeTimeout,
  multiple,
  page,
} from '../fixtures/constants.ts';

describe('cookie-consent', () => {
  beforeEach('Navigate to page', () => {
    cy.visit(page.home,);
  },);
  it('Cookie consent form displays', () => {
    cy.get('.cookie-consent', flakeTimeout,)
      .should('exist',);
  },);
  it('Cookie consent form', () => {
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
        },
      );
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
