class FuelExpensesPage {
  get AddAnExpenseButton() {
    return cy.get('button').contains('Add an expense');
  }

  get carSelectDropdown() {
    return cy.get('#carSelectDropdown');
  }

  openAddAnExpenseModal() {
    this.AddAnExpenseButton.click();
  }

  selectCarForAddExpense() {}
}
module.exports = new FuelExpensesPage();
