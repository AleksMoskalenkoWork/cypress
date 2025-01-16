const brand = require('../helpers/brand');
const model = require('../helpers/model');
const testUserData = require('../helpers/testUserData');
const RemoveCarModal = require('../page-object/components/RemoveCarModal');
const SidebarPanelComponent = require('../page-object/components/SidebarPanelComponent');
const AddCarFormGroup = require('../page-object/forms/AddCarFormGroup');
const EditCarFormGroup = require('../page-object/forms/EditCarFormGroup');
const LoginFormGroup = require('../page-object/forms/LoginFormGroup');
const GaragePage = require('../page-object/pages/GaragePage');
const HomePage = require('../page-object/pages/HomePage');

describe('add car to garage', () => {
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
  context('add Ford to garage', () => {
    // -- Start: Cypress Tests --
    it('add Ford Focus', () => {
      // Write your test case one here
      GaragePage.openAddCarModal();
      AddCarFormGroup.selectBrand(brand.Ford);
      AddCarFormGroup.selectModel(model.Ford.Focus);
      AddCarFormGroup.typeMileage(50);
      AddCarFormGroup.addButtonClick();
    });
  });
});
