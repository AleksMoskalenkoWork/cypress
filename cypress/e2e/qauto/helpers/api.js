const api = {
  Auth: {
    EndsUpUserSessionClearsSessionCookies: 'api/auth/logout',
    RegistersUsersInTheSystemSignUP: 'api/auth/singup',
    RegistersUsersInTheSystemSignIN: 'api/auth/signin',
    SendsPasswordResetInstructionsToTheSpecifiedEmail: 'api/auth/resetPassword',
  },
  Users: {
    GetsAuthenticatedUserData: 'api/users/current',
    GetsAuthenticatedUserProfileData: 'api/users/profile',
    EditsUsersProfile: 'api/users/profile',
    GetsAuthenticatedUserSettingsData: 'api/users/settings',
    EditsUsersSettings: 'api/users/settings',
    SendsAnEmailWithNewPasswordToTheUsersEmail: 'api/users/resetPassword',
    ChangesUsersEmail: 'api/users/email',
    ChangesUsersPassword: 'api/users/password',
    DeletesUsersAccountAndCurrentUserSession: 'api/users',
  },
  Cars: {
    GetsCarBrands: 'api/cars/brands',
    GetsCarBrandById: 'api/cars/brands',
    GetsCarModels: 'api/cars/models',
    GetsCarModelById: 'api/cars/models',
    GetsCurrentUserCars: 'api/cars',
    CreatesNewCar: 'api/cars',
    GetsCurrentUserCarById: 'api/cars/',
    EditsExistingCar: 'api/cars/',
    DeletesExistingCar: 'api/cars/',
  },
  Expenses: {
    GetsAllExpenses: 'api/expenses?carId=',
    CreatesAnExpense: 'api/expenses',
    GetsAnExpenseById: 'api/expenses',
    EditsAnExpense: 'api/expenses',
    RemovesAnExpense: 'api/expenses/',
  },
  Instructions: {
    GetInstructions: 'api/instructions',
    GetInstructionsByID: 'api/instructions/',
  },
};

module.exports = api;
