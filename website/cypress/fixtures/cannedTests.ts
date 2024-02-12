
export function navigateToPage(urlStr: string) {
  beforeEach('Navigate to page', () => {
    cy.visit(urlStr)
  },);
};
