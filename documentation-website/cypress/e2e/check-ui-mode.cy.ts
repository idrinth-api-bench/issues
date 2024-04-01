import {
  BASE_URL,
} from '../fixtures/constants.ts';

describe('UI Mode Test', () => {
  it('Toggles UI Mode', () => {
    cy.visit(BASE_URL,);
    cy.window().then((win,) => {
      const prefersDarkMode = win.matchMedia(
        '(prefers-color-scheme: dark)',).matches;
      if (prefersDarkMode) {
        cy.get('html',).should('have.class', 'dark-mode',);
        cy.get('.dark-mode-icon',).click();
        cy.get('html',).should('not.have.class', 'dark-mode',);
      } else {
        cy.get('html',).should('not.have.class', 'dark-mode',);
        cy.get('.dark-mode-icon',).click();
        cy.get('html',).should('have.class', 'dark-mode',);
      }
    },);
  },);
},);
