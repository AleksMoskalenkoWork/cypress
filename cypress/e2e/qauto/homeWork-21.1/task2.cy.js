const api = require('../helpers/api');
const testUserData = require('../helpers/testUserData');
const SidebarPanelComponent = require('../page-object/components/SidebarPanelComponent');
const LoginFormGroup = require('../page-object/forms/LoginFormGroup');
const HomePage = require('../page-object/pages/HomePage');
const { default: ProfilePage } = require('../page-object/pages/ProfilePage');

describe('mock data', () => {
  let fakeData = {
    status: 'ok',
    data: {
      userId: 168069,
      photoFilename: 'default-user.png',
      lastName: 'Polar',
      name: 'Bear',
      dateBirth: '1989-10-30T00:00:00.000Z',
      country: 'Ukraine',
    },
  };

  before(() => {
    // runs once before all tests
    cy.intercept(
      'GET',
      `${api.Users.GetsAuthenticatedUserProfileData}`,
      fakeData
    ).as('MockUserData');
    cy.intercept('POST', '/api/auth/signin').as('signin');
    HomePage.openPage();
    HomePage.openSignInModal();
    LoginFormGroup.successfulLogin(testUserData);
    // cy.request('POST', `${api.Auth.RegistersUsersInTheSystemSignIN}`, {
    //   email: testUserData.correct.currentEmail,
    //   password: testUserData.correct.password,
    //   remember: false,
    // }).then((response) => {
    //   authCookieSid = response.headers['set-cookie'][0].split(';')[0];
    // });
  });
  beforeEach(() => {
    // runs before every it() test block
  });
  afterEach(() => {
    // runs after every it() test block
  });
  after(() => {
    // runs once after all tests
  });
  context('mock data for user profile page', () => {
    // -- Start: Cypress Tests --
    it('intercept api for user profile page and change name and last name', () => {
      // Write your test case one here
      SidebarPanelComponent.profileNavigateButtonClick();
      cy.get('.profile_name')
        .should('be.visible')
        .contains(`${fakeData.data.name} ${fakeData.data.lastName}`);
    });
  });
});
