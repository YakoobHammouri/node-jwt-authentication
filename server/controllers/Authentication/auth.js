const jwt = require('jsonwebtoken');
const dbUser = require('./../../Models/Class/db_Users');

const responseMessages = require('./../../Helpers/responseMessage');

require('dotenv').config();

const login = (req, res, next) => {
  const { email, password } = req.body;
  try {
    dbUser
      .getUserByEmail(email)
      .then((result) => {
        if (result.length === 0) {
          res.json(
            responseMessages.FaildLoginMessage(null, ' Email or Pasword worng'),
          );
        }
        const user = result[0];
        const accessToken = jwt.sign(
          { Name: user.gid.toString('bases64'), role: user.role },
          process.env.ACCESS_TOKEN_SECRET,
        );
        res.setHeader('Authentication', `Bearer ${accessToken}`);
        res.json(
          responseMessages.successMessage(
            { token: accessToken },
            'login successfully',
          ),
        );
      })
      .catch((err) => {
        res.json({ status: 500, message: err });
        return next(new Error(err));
      });
  } catch (ex) {
    console.log('inside catch');
  }
};

const logout = (req, res) => {
  res.json({ logout: 'logoutttt' });
};

const isAuthentication = (req, res) => {
  res.json({ 'is Auth ': 'isss' });
};

module.exports = { login, logout, isAuthentication };
