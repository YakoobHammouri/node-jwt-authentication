const userTable = 'users';
module.exports = {
  insertUser: `INSERT INTO ${userTable} (gid, name , email , password , phone ,role, isLogin) VALUES ($1,$2,$3,$4,$5,$6,$7);`,
  getUserByEmail: `SELECT * FROM ${userTable} WHERE email = $1;`,
};
