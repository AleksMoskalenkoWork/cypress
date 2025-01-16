class RemoveCarModal {
  get removeButton() {
    return cy.get('button').contains('Remove');
  }

  get cancelButton() {
    return cy.get('button').contains('Cancel');
  }

  removeButtonClick() {
    this.removeButton.click();
  }
}

module.exports = new RemoveCarModal();
