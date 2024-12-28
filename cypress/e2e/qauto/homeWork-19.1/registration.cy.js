const login = require('../helpers/login');
const openLoginModal = require('../helpers/modal/login/open-login-modal');
const clickRegistrationButton = require('../helpers/modal/registration/click-registration-button');
const FormGroup = require('../helpers/modal/registration/form-group');
const openRegistrationModal = require('../helpers/modal/registration/open-registration-modal');
const preLogin = require('../helpers/pre-login');

describe('registration modal errors', () => {
  before(() => {
    // runs once before all tests
  });
  beforeEach(() => {
    // runs before every it() test block
    preLogin();
    cy.intercept('POST', '/api/auth/signin').as('signin');
  });
  afterEach(() => {
    // runs after every it() test block
  });
  after(() => {
    // runs once after all tests
  });
  context('errors', () => {
    // -- Start: Cypress Tests --
    it('comparison border color red for all empty input', () => {
      // Write your test case one here
      openRegistrationModal();
      FormGroup.comparisonBorderColor();
    });

    it('comparison for all empty field error text value', () => {
      // Write your test case here
      openRegistrationModal();
      FormGroup.comparisonEmptyFieldError();
    });

    it('comparison for all wrong field error text value', () => {
      // Write your test case here
      openRegistrationModal();
      FormGroup.comparisonWrongDataErrors();
    });

    it('comparison for all wrong length field error text value', () => {
      // Write your test case here
      openRegistrationModal();
      FormGroup.comparisonWrongLengthErrors();
    });

    it('successful registration', () => {
      // Write your test case here
      openRegistrationModal();
      FormGroup.successfulRegistration();
      clickRegistrationButton();
    });

    it('successful login', () => {
      // Write your test case here
      openLoginModal();
      login();
    });
  });
});
