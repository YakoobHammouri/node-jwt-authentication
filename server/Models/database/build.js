const { join } = require('path');

const fs = require('fs');
const connection = require('./connection');

const sql = fs.readFileSync(join(__dirname, 'build.sql')).toString();

if (!sql) {
  throw new Error(`the build sql not found : sql data ${sql}`);
}

connection.query(sql, (err, result) => {
  if (err) {
    throw new Error(`the database not Created , the Error ${err}`);
  }
  // eslint-disable-next-line no-console
  console.log('the Database is Created');
});
