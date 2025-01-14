const brand = require('../helpers/brand');
const model = require('../helpers/model');
const testUserData = require('../helpers/testUserData');
const SidebarPanelComponent = require('../page-object/components/SidebarPanelComponent');
const AddCarFormGroup = require('../page-object/forms/AddCarFormGroup');
const AddExpenseFormGroup = require('../page-object/forms/AddExpenseFormGroup');
const LoginFormGroup = require('../page-object/forms/LoginFormGroup');
const FuelExpensesPage = require('../page-object/pages/FuelExpensesPage');
const GaragePage = require('../page-object/pages/GaragePage');
const HomePage = require('../page-object/pages/HomePage');

describe('fuel expense', () => {
  before(() => {
    // runs once before all tests
  });
  beforeEach(() => {
    // runs before every it() test block
    cy.intercept('POST', '/api/auth/signin').as('signin');
    HomePage.openPage();
    HomePage.openSignInModal();
    LoginFormGroup.successfulLogin(testUserData);
  });
  afterEach(() => {
    // runs after every it() test block
  });
  after(() => {
    // runs once after all tests
    SidebarPanelComponent.garageNavigateButtonClick();
    GaragePage.deleteAllCarsFromList();
  });
  context('add fuel expense', () => {
    // -- Start: Cypress Tests --
    it('add fuel expense from garage page', () => {
      // Write your test case one here
      GaragePage.openAddCarModal();
      AddCarFormGroup.selectBrand(brand.Ford);
      AddCarFormGroup.selectModel(model.Ford.Focus);
      AddCarFormGroup.typeMileage(50);
      AddCarFormGroup.addButtonClick();
      GaragePage.openAddFuelExpenseModal();
      AddExpenseFormGroup.addExpenseMileageFieldValue(70);
      AddExpenseFormGroup.addExpenseLitersFieldValue(20);
      AddExpenseFormGroup.addExpenseTotalCostValue(100);
      AddExpenseFormGroup.addButtonClick();
      // cy.pause();
    });
    it('add fuel expense from fuel expenses page', () => {
      // Write your test case two here
      GaragePage.openAddCarModal();
      AddCarFormGroup.selectBrand(brand.Ford);
      AddCarFormGroup.selectModel(model.Ford.Focus);
      AddCarFormGroup.typeMileage(50);
      AddCarFormGroup.addButtonClick();
      SidebarPanelComponent.fuelExpensesNavigateButtonClick();
      FuelExpensesPage.openAddAnExpenseModal();
      AddExpenseFormGroup.addExpenseMileageFieldValue(70);
      AddExpenseFormGroup.addExpenseLitersFieldValue(20);
      AddExpenseFormGroup.addExpenseTotalCostValue(100);
      AddExpenseFormGroup.addButtonClick();
    });
  });
});
