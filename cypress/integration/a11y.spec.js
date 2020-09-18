describe('/', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.wait(500);
    cy.injectAxe();
  });

  it('should not have a11y errors', () => {
    cy.checkA11y();
  });
});

describe('/blog', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/blog');
    cy.wait(500);
    cy.injectAxe();
  });

  it('should not have a11y errors', () => {
    cy.checkA11y();
  });
});

describe('/[post]', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/blog/cypress-axe-part-one');
    cy.wait(500);
    cy.injectAxe();
  });

  it('should not have a11y errors', () => {
    cy.checkA11y();
  });
});

describe('/projects', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/projects');
    cy.wait(500);
    cy.injectAxe();
  });

  it('should not have a11y errors', () => {
    cy.checkA11y();
  });
});
