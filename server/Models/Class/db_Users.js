const bcrypt = require('bcrypt');

const connection = require('./../database/connection');

const queryText = require('./../database/queryText');

const createUser = async (data) => {
  const role = !data.role ? 'user' : data.role;
  const hashPassword = await bcrypt.hash(data.password, 10);
  return new Promise((resolve, reject) => {
    const sql = {
      text: queryText.insertUser,
      values: [data.name, data.email, hashPassword, data.phone, role],
    };
    connection
      .query(sql.text, sql.values)
      .then((result) => resolve(result.rows))
      .catch((err) => reject(err));
  });
};

const getUserByEmail = (email) => {
  return new Promise((resplve, reject) => {
    const sql = {
      text: queryText.getUserByEmail,
      values: [email],
    };
    connection
      .query(sql.text, sql.values)
      .then((result) => {
        resplve(result.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = { createUser, getUserByEmail };
