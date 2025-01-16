const testUserData = require('../helpers/testUserData');
const LoginFormGroup = require('../page-object/forms/LoginFormGroup');
const RegistrationFormGroup = require('../page-object/forms/RegistrationFormGroup');
const HomePage = require('../page-object/pages/HomePage');

describe('trigger and verify registration form group errors for input field', () => {
  before(() => {
    // runs once before all tests
  });
  beforeEach(() => {
    // runs before every it() test block
    HomePage.openPage();
    cy.intercept('POST', '/api/auth/signin').as('signin');
  });
  afterEach(() => {
    // runs after every it() test block
  });
  after(() => {
    // runs once after all tests
  });
  context(
    'trigger errors on input "Name" field in registration form group',
    () => {
      it('trigger empty field error and verify border color value', () => {
        // Write your test case here
        HomePage.openSignUpModal();
        RegistrationFormGroup.triggerErrorForAllEmptyFieldInFormGroup();
        RegistrationFormGroup.verifyBorderColorErrorForEmptyNameField();
      });

      it('trigger empty field error and verify text error value', () => {
        // Write your test case here
        HomePage.openSignUpModal();
        RegistrationFormGroup.triggerErrorForAllEmptyFieldInFormGroup();
        RegistrationFormGroup.verifyErrorTextValueForEmptyNameField();
      });

      it('trigger and verify wrong data error', () => {
        // Write your test case here
        HomePage.openSignUpModal();
        RegistrationFormGroup.triggerWrongDataErrorTextValueForNameField();
        RegistrationFormGroup.verifyWrongDataErrorTextValueForNameField();
      });

      it('trigger and verify wrong length error', () => {
        // Write your test case here
        HomePage.openSignUpModal();
        RegistrationFormGroup.triggerWrongLengthErrorTextValueForNameField();
        RegistrationFormGroup.verifyWrongLengthErrorTextValueForNameField();
      });
    }
  );

  context(
    'trigger errors on input "Last name" field in registration form group',
    () => {
      it('trigger empty field error and verify border color value', () => {
        // Write your test case here
        HomePage.openSignUpModal();
        RegistrationFormGroup.triggerErrorForAllEmptyFieldInFormGroup();
        RegistrationFormGroup.verifyBorderColorErrorForEmptyLastNameField();
      });

      it('trigger empty field error and verify text error value', () => {
        // Write your test case here
        HomePage.openSignUpModal();
        RegistrationFormGroup.triggerErrorForAllEmptyFieldInFormGroup();
        RegistrationFormGroup.verifyErrorTextValueForEmptyLastNameField();
      });

      it('trigger and verify wrong data error', () => {
        // Write your test case here
        HomePage.openSignUpModal();
        RegistrationFormGroup.triggerWrongDataErrorTextValueForLastNameField();
        RegistrationFormGroup.verifyWrongDataErrorTextValueForLastNameField();
      });

      it('trigger and verify wrong length error', () => {
        // Write your test case here
        HomePage.openSignUpModal();
        RegistrationFormGroup.triggerWrongLengthErrorTextValueForLastNameField();
        RegistrationFormGroup.verifyWrongLengthErrorTextValueForLastNameField();
      });
    }
  );

  context(
    'trigger errors on input "Email" field in registration form group',
    () => {
      it('trigger empty field error and verify border color value', () => {
        // Write your test case here
        HomePage.openSignUpModal();
        RegistrationFormGroup.triggerErrorForAllEmptyFieldInFormGroup();
        RegistrationFormGroup.verifyBorderColorErrorForEmptyEmailField();
      });

      it('trigger empty field error and verify text error value', () => {
        // Write your test case here
        HomePage.openSignUpModal();
        RegistrationFormGroup.triggerErrorForAllEmptyFieldInFormGroup();
        RegistrationFormGroup.verifyErrorTextValueForEmptyEmailField();
      });

      it('trigger and verify wrong data error', () => {
        // Write your test case here
        HomePage.openSignUpModal();
        RegistrationFormGroup.triggerWrongDataErrorTextValueForEmailField();
        RegistrationFormGroup.verifyWrongDataErrorTextValueForEmailField();
      });
    }
  );

  context(
    'trigger errors on input "Password" field in registration form group',
    () => {
      it('trigger empty field error and verify border color value', () => {
        // Write your test case here
        HomePage.openSignUpModal();
        RegistrationFormGroup.triggerErrorForAllEmptyFieldInFormGroup();
        RegistrationFormGroup.verifyBorderColorErrorForEmptyPasswordField();
      });

      it('trigger empty field error and verify text error value', () => {
        // Write your test case here
        HomePage.openSignUpModal();
        RegistrationFormGroup.triggerErrorForAllEmptyFieldInFormGroup();
        RegistrationFormGroup.verifyErrorTextValueForEmptyPasswordField();
      });

      it('trigger and verify wrong data error', () => {
        // Write your test case here
        HomePage.openSignUpModal();
        RegistrationFormGroup.triggerWrongDataErrorTextValueForPasswordField();
        RegistrationFormGroup.verifyWrongDataErrorTextValueForPasswordField();
      });
    }
  );

  context(
    'trigger errors on input "Re-enter password" field in registration form group',
    () => {
      it('trigger empty field error and verify border color value', () => {
        // Write your test case here
        HomePage.openSignUpModal();
        RegistrationFormGroup.triggerErrorForAllEmptyFieldInFormGroup();
        RegistrationFormGroup.verifyBorderColorErrorForEmptyReEnterPasswordField();
      });

      it('trigger empty field error and verify text error value', () => {
        // Write your test case here
        HomePage.openSignUpModal();
        RegistrationFormGroup.triggerErrorForAllEmptyFieldInFormGroup();
        RegistrationFormGroup.verifyErrorTextValueForEmptyReEnterPasswordField();
      });

      it('trigger and verify wrong data error', () => {
        // Write your test case here
        HomePage.openSignUpModal();
        RegistrationFormGroup.triggerWrongDataErrorTextValueForReEnterPasswordField();
        RegistrationFormGroup.verifyWrongDataErrorTextValueForReEnterPasswordField();
      });
    }
  );

  context('successful registration and login', () => {
    it('successful registration', () => {
      // Write your test case here
      HomePage.openSignUpModal();
      RegistrationFormGroup.successfulRegistration(testUserData);
    });

    it('successful login', () => {
      // Write your test case here
      HomePage.openSignInModal();
      LoginFormGroup.successfulLogin(testUserData);
    });
  });
});
