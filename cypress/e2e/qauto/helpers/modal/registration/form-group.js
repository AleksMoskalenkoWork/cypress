const errors = require('../../errors');
const testUserData = require('../../testUserData');

class FormGroup {
  static comparisonBorderColor() {
    cy.get('input')
      .each(($el) => {
        if ($el.length) {
          cy.wrap($el).click().tab();
        }
      })
      .then(() => {
        cy.get('input').each(($el) => {
          cy.wrap($el).should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
      });
  }

  static comparisonEmptyFieldError() {
    cy.get('input')
      .each(($el) => {
        if ($el.length) {
          cy.wrap($el).click().tab();
        }
      })
      .then(() => {
        cy.get('form')
          .find('div p')
          .then(($el) => {
            cy.wrap($el).eq(0).contains(errors.emptyFieldRequiredErrors.name);
            cy.wrap($el)
              .eq(1)
              .contains(errors.emptyFieldRequiredErrors.lastName);
            cy.wrap($el).eq(2).contains(errors.emptyFieldRequiredErrors.email);
            cy.wrap($el)
              .eq(3)
              .contains(errors.emptyFieldRequiredErrors.password);
            cy.wrap($el)
              .eq(4)
              .contains(errors.emptyFieldRequiredErrors.repeatPassword);
          });
      });
  }

  static comparisonWrongDataErrors() {
    cy.get('input')
      .then(($el) => {
        if ($el.length) {
          cy.wrap($el).eq(0).click().type(testUserData.incorrect.shortName);
          cy.wrap($el).eq(1).click().type(testUserData.incorrect.shortLastName);
          cy.wrap($el).eq(2).click().type(testUserData.incorrect.email);
          cy.wrap($el).eq(3).click().type(testUserData.incorrect.password);
          cy.wrap($el)
            .eq(4)
            .click()
            .type(testUserData.incorrect.repeatPassword)
            .tab();
        }
      })
      .then(() => {
        cy.get('form')
          .find('div p')
          .then(($el) => {
            cy.wrap($el).eq(0).contains(errors.wrongDataErrors.name);
            cy.wrap($el).eq(1).contains(errors.wrongDataErrors.lastName);
            cy.wrap($el).eq(2).contains(errors.wrongDataErrors.email);
            cy.wrap($el).eq(3).contains(errors.wrongDataErrors.password);
            cy.wrap($el)
              .eq(4)
              .scrollIntoView()
              .contains(errors.wrongDataErrors.repeatPassword);
          });
      });
  }

  static comparisonWrongLengthErrors() {
    cy.get('input')
      .then(($el) => {
        if ($el.length) {
          cy.wrap($el).eq(0).click().type(testUserData.incorrect.name);
          cy.wrap($el)
            .eq(1)
            .click()
            .type(testUserData.incorrect.lastName)
            .tab();
        }
      })
      .then(() => {
        cy.get('form')
          .find('div p')
          .then(($el) => {
            cy.wrap($el).contains(errors.wrongLengthErrors.name);
            cy.wrap($el).contains(errors.wrongLengthErrors.lastName);
          });
      });
  }

  static successfulRegistration() {
    cy.get('input').then(($el) => {
      cy.wrap($el).eq(0).click().type(testUserData.correct.name);
      cy.wrap($el).eq(1).click().type(testUserData.correct.lastName);
      cy.wrap($el).eq(2).click().type(testUserData.correct.registrationEmail);
      cy.wrap($el).eq(3).click().type(testUserData.correct.password);
      cy.wrap($el).eq(4).click().type(testUserData.correct.repeatPassword);
    });
  }
}

module.exports = FormGroup;
