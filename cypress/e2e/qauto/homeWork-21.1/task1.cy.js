const api = require('../helpers/api');
const testUserData = require('../helpers/testUserData');

describe('add car to garage', () => {
  let authCookieSid;
  before(() => {
    // runs once before all tests
    cy.request('POST', `${api.Auth.RegistersUsersInTheSystemSignIN}`, {
      email: testUserData.correct.currentEmail,
      password: testUserData.correct.password,
      remember: false,
    }).then((response) => {
      authCookieSid = response.headers['set-cookie'][0].split(';')[0];
    });
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
  context('add, update and delete car into garage', () => {
    // -- Start: Cypress Tests --

    it('update user profile', () => {
      // Write your test case here
      cy.request({
        method: 'PUT',
        url: `${api.Users.EditsUsersProfile}`,
        headers: {
          Cookie: `${authCookieSid}`,
        },
        body: {
          dateBirth: '1989-10-30',
          country: 'Ukraine',
        },
      });
    });

    it('update user settings', () => {
      // Write your test case here
      cy.request({
        method: 'PUT',
        url: `${api.Users.EditsUsersSettings}`,
        headers: {
          Cookie: `${authCookieSid}`,
        },
        body: {
          currency: 'eur',
          distanceUnits: 'ml',
        },
      });
    });

    it('add four car into garage', () => {
      // Write your test case one her
      cy.request({
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

      cy.request({
        method: 'POST',
        url: `${api.Cars.CreatesNewCar}`,
        headers: {
          Cookie: `${authCookieSid}`,
        },
        body: {
          carBrandId: 1,
          carModelId: 2,
          mileage: 444,
        },
      });

      cy.request({
        method: 'POST',
        url: `${api.Cars.CreatesNewCar}`,
        headers: {
          Cookie: `${authCookieSid}`,
        },
        body: {
          carBrandId: 1,
          carModelId: 3,
          mileage: 222,
        },
      });

      cy.request({
        method: 'POST',
        url: `${api.Cars.CreatesNewCar}`,
        headers: {
          Cookie: `${authCookieSid}`,
        },
        body: {
          carBrandId: 1,
          carModelId: 4,
          mileage: 555,
        },
      });
    });

    it('update mileage for existing cars in carage', () => {
      // Write your test case here
      cy.request({
        method: 'GET',
        url: `${api.Cars.GetsCurrentUserCars}`,
        headers: {
          Cookie: `${authCookieSid}`,
        },
      }).then((response) => {
        let listCurrentCars = response.body.data.map((x) => x.id);
        console.log('QA', listCurrentCars);

        listCurrentCars.forEach((id) => {
          cy.request({
            method: 'GET',
            url: `${api.Cars.GetsCurrentUserCarById}${id}`,
            headers: {
              Cookie: `${authCookieSid}`,
            },
          })
            .then((response) => {
              expect(response.body.data.carBrandId).to.be.eq(1);
              // expect(response.body.data.carModelId).to.be.eq(1);
            })
            .then(() => {
              cy.request({
                method: 'PUT',
                url: `${api.Cars.EditsExistingCar}${id}`,
                headers: {
                  Cookie: `${authCookieSid}`,
                },
                body: {
                  mileage: 168223,
                },
              }).then((response) => {
                expect(response.body.data.mileage).to.be.eq(168223);
              });
            });
        });
      });
    });

    it('delete all cars in garage', () => {
      // Write your test case here
      cy.request({
        method: 'GET',
        url: `${api.Cars.GetsCurrentUserCars}`,
        headers: {
          Cookie: `${authCookieSid}`,
        },
      }).then((response) => {
        let listCurrentCars = response.body.data.map((x) => x.id);

        listCurrentCars.forEach((id) => {
          cy.request({
            method: 'DELETE',
            url: `${api.Cars.DeletesExistingCar}${id}`,
            headers: {
              Cookie: `${authCookieSid}`,
            },
          });
        });
      });
    });

    it('logout', () => {
      // Write your test case here
      cy.request({
        method: 'GET',
        url: `${api.Auth.EndsUpUserSessionClearsSessionCookies}`,
        headers: {
          Cookie: `${authCookieSid}`,
        },
      });
    });
  });
});
