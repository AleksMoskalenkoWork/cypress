import RemoveCarModal from '../components/RemoveCarModal';
import EditCarFormGroup from '../forms/EditCarFormGroup';

class GaragePage {
  get addCarButton() {
    return cy.get('button').contains('Add car');
  }

  get editCarIcon() {
    return cy.get('.car_edit');
  }

  get getCarList() {
    return cy.get('.car-list li');
  }

  get getAddFuelExpenseButton() {
    return cy.get('.car_add-expense');
  }

  openAddCarModal() {
    this.addCarButton.click();
  }

  openEditCarModal() {
    this.editCarIcon.click();
  }

  openAddFuelExpenseModal() {
    this.getAddFuelExpenseButton.click();
  }

  deleteAllCarsFromList() {
    this.getCarList.each(($el) => {
      cy.wrap($el)
        .find('.car_edit')
        .click()
        .then(() => {
          EditCarFormGroup.removeCarButtonClick();
          RemoveCarModal.removeButtonClick();
        });
    });
  }
}

export default new GaragePage();
