const openLoginModal = () => {
  cy.get('header').find('button').contains('Sign In').click();
  cy.get('app-signin-modal').should('be.visible');
};

module.exports = openLoginModal;
