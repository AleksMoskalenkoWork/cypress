class SidebarPanelComponent {
  get garageNavigateButton() {
    return cy
      .get('.sidebar')
      .find('a')
      .contains('Garage')
      .should('have.attr', 'href', '/panel/garage');
  }

  get fuelExpensesNavigateButton() {
    return cy
      .get('.sidebar')
      .find('a')
      .contains('Fuel expenses')
      .should('have.attr', 'href', '/panel/expenses');
  }

  get instructionsNavigateButton() {
    return cy
      .get('.sidebar')
      .find('a')
      .contains('Instructions')
      .should('have.attr', 'href', '/panel/instructions');
  }

  get profileNavigateButton() {
    return cy
      .get('.sidebar')
      .find('a')
      .contains('Profile')
      .should('have.attr', 'href', '/panel/profile');
  }

  get settingsNavigateButton() {
    return cy
      .get('.sidebar')
      .find('a')
      .contains('Settings')
      .should('have.attr', 'href', '/panel/settings');
  }

  get logOutNavigateButton() {
    return cy.get('.sidebar').find('a').contains('Log out');
  }

  garageNavigateButtonClick() {
    this.garageNavigateButton.click();
  }

  fuelExpensesNavigateButtonClick() {
    this.fuelExpensesNavigateButton.click();
  }

  instructionsNavigateButtonClick() {
    this.instructionsNavigateButton.click();
  }

  profileNavigateButtonClick() {
    this.profileNavigateButton.click();
  }

  settingsNavigateButtonClick() {
    this.settingsNavigateButton.click();
  }

  logOutNavigateButtonClick() {
    this.logOutNavigateButton.click();
  }
}

module.exports = new SidebarPanelComponent();
