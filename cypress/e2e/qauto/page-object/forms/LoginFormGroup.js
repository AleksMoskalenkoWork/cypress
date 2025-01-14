class LoginFormGroup {
  successfulLogin(testUser) {
    cy.get('input').first().click().type(testUser.correct.currentEmail);
    cy.get('input[type="password"]').click().type(testUser.correct.password);
    cy.get('button').contains('Login').should('be.visible').click();

    cy.wait('@signin').then((data) => {
      expect(data.response.statusCode).to.be.eq(200);
    });
  }
}

module.exports = new LoginFormGroup();
