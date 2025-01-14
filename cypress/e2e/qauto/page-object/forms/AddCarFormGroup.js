class AddCarFormGroup {
  get brandField() {
    return cy.get('#addCarBrand');
  }

  get modelField() {
    return cy.get('#addCarModel');
  }

  get mileageField() {
    return cy.get('#addCarMileage');
  }

  get addButton() {
    return cy
      .get('button')
      .parent('.modal-footer')
      .contains('Add')
      .should('be.visible');
  }

  get cancelButton() {
    return cy
      .get('button')
      .parent('.modal-footer')
      .contains('Cancel')
      .should('be.visible');
  }

  selectBrand(brand) {
    this.brandField.select(brand);
  }
  selectModel(model) {
    this.modelField.select(model);
  }
  typeMileage(number) {
    this.mileageField.type(number);
  }
  addButtonClick() {
    this.addButton.click();
  }
  cancelButtonClick() {
    this.cancelButton.click();
  }
}

module.exports = new AddCarFormGroup();
