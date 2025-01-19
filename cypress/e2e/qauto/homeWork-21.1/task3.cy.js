const api = require('../helpers/api');
const testUserData = require('../helpers/testUserData');

describe('use api plugin fo cypress', () => {
  let authCookieSid;

  let carsInfo;
  before(() => {
    // runs once before all tests
    cy.api('POST', `${api.Auth.RegistersUsersInTheSystemSignIN}`, {
      email: testUserData.correct.currentEmail,
      password: testUserData.correct.password,
      remember: false,
    }).then((response) => {
      authCookieSid = response.headers['set-cookie'][0].split(';')[0];
    });
  });
  beforeEach(() => {
    // runs before every it() test block
    cy.api({
      method: 'GET',
      url: `${api.Cars.GetsCurrentUserCars}`,
      headers: {
        Cookie: `${authCookieSid}`,
      },
    }).then((response) => {
      carsInfo = response.body.data;
    });
  });
  afterEach(() => {
    // runs after every it() test block
  });
  after(() => {
    // runs once after all tests
  });
  context('use api plugin', () => {
    // -- Start: Cypress Tests --
    it('add cars', () => {
      // Write your test case one here
      cy.api({
        method: 'POST',
        url: `${api.Cars.CreatesNewCar}`,
        headers: {
          Cookie: `${authCookieSid}`,
        },
        body: {
          carBrandId: 1,
          carModelId: 1,
          mileage: 333,
        },
      });
    });

    it('add expenses', () => {
      // Write your test case two here
      cy.api({
        method: 'POST',
        url: `${api.Expenses.CreatesAnExpense}`,
        headers: {
          Cookie: `${authCookieSid}`,
        },
        body: {
          carId: carsInfo[0].id,
          reportedAt: carsInfo[0].carCreatedAt,
          mileage: 444,
          liters: 11,
          totalCost: 11,
          forceMileage: false,
        },
      });
    });

    it('remove all expenses', () => {
      // Write your test case here
      cy.api({
        method: 'GET',
        url: `${api.Expenses.GetsAllExpenses}`,
        headers: {
          Cookie: `${authCookieSid}`,
        },
        qs: { params: `${carsInfo[0].id}` },
      }).then((response) => {
        let listCurrentExpenses = response.body.data.map((x) => x.id);

        listCurrentExpenses.forEach((id) => {
          cy.api({
            method: 'DELETE',
            url: `${api.Expenses.RemovesAnExpense}${id}`,
            headers: {
              Cookie: `${authCookieSid}`,
            },
          });
        });
      });
    });

    it('logout', () => {
      // Write your test case here
      cy.api({
        method: 'GET',
        url: `${api.Auth.EndsUpUserSessionClearsSessionCookies}`,
        headers: {
          Cookie: `${authCookieSid}`,
        },
      });
    });
  });
});
