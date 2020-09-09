describe('/', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.injectAxe();
  });

  it('should not have a11y errors', () => {
    cy.checkA11y();
  });
});
