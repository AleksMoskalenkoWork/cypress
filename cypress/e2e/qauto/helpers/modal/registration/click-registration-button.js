const clickRegistrationButton = () => {
  cy.get('.modal-footer')
    .find('button')
    .should('have.attr', 'type', 'button')
    .and('be.visible')
    .contains('Register')
    .click();
};

module.exports = clickRegistrationButton;
