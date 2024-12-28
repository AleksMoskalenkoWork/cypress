const randomNumber = require('./randomNumber');

const testUserData = {
  correct: {
    name: 'Aleksandr',
    lastName: 'Moskalenko',
    currentEmail: `aleks.moskalenko.work@gmail.com`,
    registrationEmail: `aleks.moskalenko.work+${Math.random()}@gmail.com`,
    password: '1234567890ABc!',
    repeatPassword: '1234567890ABc!',
  },
  incorrect: {
    shortName: randomNumber(1000, 100),
    name: 1,
    shortLastName: randomNumber(1000, 100),
    lastName: 1,
    email: `qa@qa....`,
    password: randomNumber(1000000, 1000000),
    repeatPassword: randomNumber(1000000, 1000000),
  },
};

module.exports = testUserData;

// +${Math.random()}
