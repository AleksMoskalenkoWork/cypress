const testUserData = require('./testUserData');

const login = () => {
  cy.get('input').first().click().type(testUserData.correct.currentEmail);
  cy.get('input[type="password"]').click().type(testUserData.correct.password);
  cy.get('button').contains('Login').should('be.visible').click();

  cy.wait('@signin').then((data) => {
    expect(data.response.statusCode).to.be.eq(200);
  });
};

module.exports = login;
