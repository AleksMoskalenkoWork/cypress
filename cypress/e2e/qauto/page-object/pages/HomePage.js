class HomePage {
  openPage() {
    cy.visit('/');
  }

  openSignInModal() {
    cy.get('header').find('button').contains('Sign In').click();
    cy.get('app-signin-modal').should('be.visible');
  }

  openSignUpModal() {
    cy.get('button').contains('Sign up').should('be.visible').click();
    cy.get('app-signup-modal').should('be.visible');
  }
}

export default new HomePage();
