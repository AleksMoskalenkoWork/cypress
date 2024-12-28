const errors = {
  emptyFieldRequiredErrors: {
    name: 'Name required',
    lastName: 'Last name required',
    email: 'Email required',
    password: 'Password required',
    repeatPassword: 'Re-enter password required',
  },
  wrongDataErrors: {
    name: 'Name is invalid',
    lastName: 'Last name is invalid',
    email: 'Email is incorrect',
    password:
      'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
    repeatPassword:
      'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
  },
  wrongLengthErrors: {
    name: 'Name has to be from 2 to 20 characters long',
    lastName: 'Last name has to be from 2 to 20 characters long',
  },
};

module.exports = errors;
