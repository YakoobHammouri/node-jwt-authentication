const bcrypt = require('bcrypt');

const { v4: uuidv4 } = require('uuid');

const connection = require('./../database/connection');

const queryText = require('./../database/queryText');

const createUser = async (data) => {
  const role = !data.role ? 'user' : data.role;
  const hashPassword = await bcrypt.hash(data.password, 10);
  return new Promise((resolve, reject) => {
    const sql = {
      text: queryText.insertUser,
      values: [
        uuidv4(),
        data.name,
        data.email,
        hashPassword,
        data.phone,
        role,
        '0',
      ],
    };
    connection
      .query(sql.text, sql.values)
      .then((result) => resolve(result.rows))
      .catch((err) => reject(err));
  });
};

const getUserByEmail = async (email) => {
  const sql = {
    text: queryText.getUserByEmail,
    values: [email],
  };
  return new Promise((resplve, reject) => {
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
