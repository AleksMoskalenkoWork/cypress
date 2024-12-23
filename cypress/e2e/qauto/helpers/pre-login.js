const preLogin = () => {
  cy.visit('/', {
    auth: {
      username: 'guest',
      password: 'welcome2qauto',
    },
  });
};

module.exports = preLogin;
