class AddExpenseFormGroup {
  get addExpenseCarField() {
    return cy.get('#addExpenseCar');
  }
  get addExpenseDateField() {
    return cy.get('#addExpenseDate');
  }

  get addExpenseMileageField() {
    return cy.get('#addExpenseMileage');
  }

  get addExpenseLitersField() {
    return cy.get('#addExpenseLiters');
  }

  get addExpenseTotalCostField() {
    return cy.get('#addExpenseTotalCost');
  }

  get cancelButton() {
    return cy.get('button').parent('.modal-footer').contains('Cancel');
  }

  get addButton() {
    return cy.get('button').parent('.modal-footer').contains('Add');
  }

  addExpenseMileageFieldValue(number) {
    this.addExpenseMileageField.clear().type(number);
  }

  addExpenseLitersFieldValue(number) {
    this.addExpenseLitersField.type(number);
  }

  addExpenseTotalCostValue(number) {
    this.addExpenseTotalCostField.type(number);
  }
  cancelButtonClick() {
    this.cancelButton.click();
  }

  addButtonClick() {
    this.addButton.click();
  }
}

module.exports = new AddExpenseFormGroup();
