class ProfilePage {
  get profileNameField() {
    return cy.get('.profile_name').should('be.visible');
  }
}

export default new ProfilePage();
