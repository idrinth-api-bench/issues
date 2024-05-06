import 'cypress-axe';
import {
  page,
  PAGE_LOAD_WAIT_MS,
  SINGLE_VALUE_LENGTH,
  UI_MODE,
  UI_MODE_CLASSES,
} from '../fixtures/constants.ts';

const setMode = ({
  mode,
  doc,
},) => {
  if (
    mode === 'dark'
    && doc.querySelector(`html.${ UI_MODE_CLASSES.dark }`,)
  ) {
    return;
  }
  if (
    mode === 'light'
    && doc.querySelector(`html.${ UI_MODE_CLASSES.light }`,)
  ) {
    return;
  }
  cy.get('.theme-toggle-btn',)
    .click();
};

const testPageAccessibility = ({
  route,
  mode,
},) => {
  // set to false to fail the test if there are any violations
  const skipFailures = true;
  cy.wait(PAGE_LOAD_WAIT_MS,);
  cy.get('.cookie-consent-accept-button',)
    .click();
  cy.injectAxe();
  cy.checkA11y('', {}, (violations,) => {
    const singleViolation = violations.length === SINGLE_VALUE_LENGTH;
    cy.task(
      'log',
      `${ violations.length } accessibility violation${
        singleViolation ? '' : 's'
      } ${ singleViolation ? 'was' : 'were' } detected`,
    );
    const violationData = violations.map(
      ({
        id,
        impact,
        description,
        nodes,
        helpUrl,
      },) => ({
        id,
        impact,
        description,
        nodes: nodes.map((n,) => n.html,),
        helpUrl,
      }),
    );
    cy.task('writeFile', {
      fileName: `${
        route.replace(/\//gu, '',)
      }--accessibility--${ mode.toUpperCase() }.json`,
      content: JSON.stringify(violationData,),
    },);
    // uncomment to log the issues to the console
    // cy.task('log', violationData,);
  }, skipFailures,);
};

describe('accessibility', () => {
  Object.values(page,)
    .forEach((route,) => {
      it(`${ route } should be accessible - DARK MODE`, () => {
        const mode = UI_MODE.dark;
        cy.visit(route,);

        cy.document()
          .then((doc,) => {
            setMode({
              mode,
              doc,
            },);

            testPageAccessibility({
              route,
              mode,
            },);
          },);
      },);

      it(`${ route } should be accessible - LIGHT MODE`, () => {
        const mode = UI_MODE.light;
        cy.visit(route,);

        cy.document()
          .then((doc,) => {
            setMode({
              mode,
              doc,
            },);
            testPageAccessibility({
              route,
              mode,
            },);
          },);
      },);
    },);
},);
