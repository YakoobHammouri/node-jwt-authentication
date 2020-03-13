const userTable = 'users';
module.exports = {
  insertUser: `INSERT INTO ${userTable} (name , email , password , phone ,role) VALUES ($1,$2,$3,$4,$5);`,
  getUserByEmail: `SELECT * FROM ${userTable} WHERE email = $1;`,
};
