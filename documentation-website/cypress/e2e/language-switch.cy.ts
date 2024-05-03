import {
  BASE_URL,
  EMPTY_LENGTH,
  page,
  PAGE_LOAD_WAIT_MS,
} from '../fixtures/constants.ts';

describe('language-switch', () => {
  const languageSwitchSelector = 'select[name="language-switch"]';

  beforeEach('Navigate to quick start page', () => {
    cy.visit(page.quickStart,);
  },);

  it('exists and has at least one option', () => {
    cy.get(languageSwitchSelector,).should('exist',);
    cy.get('select[name="language-switch"] option',).should(
      'have.length.greaterThan',
      EMPTY_LENGTH,
    );
  },);

  it('changes language correctly', () => {
    const pageSignature = '@idrinth/api-bench';
    const defaultPageTitle = `Quick Start | ${ pageSignature }`;
    const translatedPageTitle = `Avvio rapido | ${ pageSignature }`;
    const newLanguage = 'it';

    cy.window().then(() => {
      cy.wait(PAGE_LOAD_WAIT_MS,); // wait for the page to load

      cy.title().should('eq', defaultPageTitle,);

      cy.get(languageSwitchSelector,).select(newLanguage,);

      cy.getAllLocalStorage().then((ls,) => {
        expect(ls[BASE_URL].language,).to.eq(newLanguage,);
      },);

      cy.title().should('eq', translatedPageTitle,);
    },);
  },);
},);
