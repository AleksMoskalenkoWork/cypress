const openRegistrationModal = () => {
  cy.get('button').contains('Sign up').should('be.visible').click();
  cy.get('app-signup-modal').should('be.visible');
};

module.exports = openRegistrationModal;
