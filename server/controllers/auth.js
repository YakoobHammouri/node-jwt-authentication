const { join } = require('path');

const getRegistrationPage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'Registratioon.html'));
};

const login = (req, res, next) => {
  return next(new Error('throw Error 500'));
  // res.send('Hi');
};

module.exports = { getRegistrationPage, login };
