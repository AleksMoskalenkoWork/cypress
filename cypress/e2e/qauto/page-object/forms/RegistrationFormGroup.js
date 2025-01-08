import errors from '../../helpers/errors';
import testUserData from '../../helpers/testUserData';

class RegistrationFormGroup {
  get nameField() {
    return cy.get('#signupName');
  }
  get lastNameField() {
    return cy.get('#signupLastName');
  }
  get registrationEmailField() {
    return cy.get('#signupEmail');
  }
  get passwordField() {
    return cy.get('#signupPassword');
  }
  get repeatPasswordField() {
    return cy.get('#signupRepeatPassword');
  }
  // trigger on field
  triggerErrorForAllEmptyFieldInFormGroup() {
    cy.get('input').each(($el) => {
      if ($el.length) {
        cy.wrap($el).click().tab();
      }
    });
  }
  // name field
  triggerWrongDataErrorTextValueForNameField() {
    this.nameField.click().type(testUserData.incorrect.shortName).tab();
  }

  triggerWrongLengthErrorTextValueForNameField() {
    this.nameField.click().type(testUserData.incorrect.name).tab();
  }
  // last name field
  triggerWrongDataErrorTextValueForLastNameField() {
    this.lastNameField.click().type(testUserData.incorrect.shortLastName).tab();
  }

  triggerWrongLengthErrorTextValueForLastNameField() {
    this.lastNameField.click().type(testUserData.incorrect.lastName).tab();
  }

  // email field
  triggerWrongDataErrorTextValueForEmailField() {
    this.registrationEmailField
      .click()
      .type(testUserData.incorrect.email)
      .tab();
  }
  // password field
  triggerWrongDataErrorTextValueForPasswordField() {
    this.passwordField.click().type(testUserData.incorrect.password).tab();
  }

  // re-enter password field
  triggerWrongDataErrorTextValueForReEnterPasswordField() {
    this.repeatPasswordField
      .click()
      .type(testUserData.incorrect.repeatPassword)
      .tab();
  }

  //verify on field
  // name field
  verifyBorderColorErrorForEmptyNameField() {
    this.nameField.should('have.css', 'border-color', 'rgb(220, 53, 69)');
  }

  verifyErrorTextValueForEmptyNameField() {
    this.nameField
      .parent('.form-group')
      .find('div p')
      .contains(errors.emptyFieldRequiredErrors.name);
  }

  verifyWrongDataErrorTextValueForNameField() {
    this.nameField
      .parent('.form-group')
      .find('div p')
      .contains(errors.wrongDataErrors.name);
  }

  verifyWrongLengthErrorTextValueForNameField() {
    this.nameField
      .parent('.form-group')
      .find('div p')
      .contains(errors.wrongLengthErrors.name);
  }

  // last name field
  verifyBorderColorErrorForEmptyLastNameField() {
    this.lastNameField.should('have.css', 'border-color', 'rgb(220, 53, 69)');
  }

  verifyErrorTextValueForEmptyLastNameField() {
    this.lastNameField
      .parent('.form-group')
      .find('div p')
      .contains(errors.emptyFieldRequiredErrors.lastName);
  }

  verifyWrongDataErrorTextValueForLastNameField() {
    this.lastNameField
      .parent('.form-group')
      .find('div p')
      .contains(errors.wrongDataErrors.lastName);
  }

  verifyWrongLengthErrorTextValueForLastNameField() {
    this.lastNameField
      .parent('.form-group')
      .find('div p')
      .contains(errors.wrongLengthErrors.lastName);
  }

  // email field
  verifyBorderColorErrorForEmptyEmailField() {
    this.registrationEmailField.should(
      'have.css',
      'border-color',
      'rgb(220, 53, 69)'
    );
  }

  verifyErrorTextValueForEmptyEmailField() {
    this.registrationEmailField
      .parent('.form-group')
      .find('div p')
      .contains(errors.emptyFieldRequiredErrors.email);
  }

  verifyWrongDataErrorTextValueForEmailField() {
    this.registrationEmailField
      .parent('.form-group')
      .find('div p')
      .contains(errors.wrongDataErrors.email);
  }

  // password field
  verifyBorderColorErrorForEmptyPasswordField() {
    this.passwordField.should('have.css', 'border-color', 'rgb(220, 53, 69)');
  }

  verifyErrorTextValueForEmptyPasswordField() {
    this.passwordField
      .parent('.form-group')
      .find('div p')
      .contains(errors.emptyFieldRequiredErrors.password);
  }

  verifyWrongDataErrorTextValueForPasswordField() {
    this.passwordField
      .parent('.form-group')
      .find('div p')
      .contains(errors.wrongDataErrors.password);
  }

  // re-enter password field
  verifyBorderColorErrorForEmptyReEnterPasswordField() {
    this.repeatPasswordField.should(
      'have.css',
      'border-color',
      'rgb(220, 53, 69)'
    );
  }

  verifyErrorTextValueForEmptyReEnterPasswordField() {
    this.repeatPasswordField
      .parent('.form-group')
      .find('div p')
      .contains(errors.emptyFieldRequiredErrors.repeatPassword);
  }

  verifyWrongDataErrorTextValueForReEnterPasswordField() {
    this.repeatPasswordField
      .parent('.form-group')
      .find('div p')
      .contains(errors.wrongDataErrors.repeatPassword);
  }

  // successful flow
  successfulRegistration(testUser) {
    cy.get('input').then(($el) => {
      cy.wrap($el).eq(0).click().type(testUser.correct.name);
      cy.wrap($el).eq(1).click().type(testUser.correct.lastName);
      cy.wrap($el).eq(2).click().type(testUser.correct.registrationEmail);
      cy.wrap($el).eq(3).click().type(testUser.correct.password);
      cy.wrap($el).eq(4).click().type(testUser.correct.repeatPassword);
      this.clickRegistrationFormGroupButton();
    });
  }

  clickRegistrationFormGroupButton() {
    cy.get('.modal-footer')
      .find('button')
      .should('have.attr', 'type', 'button')
      .and('be.visible')
      .contains('Register')
      .click();
  }
}
export default new RegistrationFormGroup();
