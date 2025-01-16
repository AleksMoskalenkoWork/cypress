class EditCarFormGroup {
  get removeCarButton() {
    return cy.get('button').contains('Remove car');
  }

  removeCarButtonClick() {
    this.removeCarButton.click();
  }
}

module.exports = new EditCarFormGroup();
