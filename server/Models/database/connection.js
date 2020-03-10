const { Pool } = require('pg');

require('dotenv').config();

const connectionString = process.env.DATABASE_URL;

console.log(connectionString);

if (!connectionString) {
  throw new Error('Db Connection not Found');
}

const option = {
  connectionString,
  SSL: !connectionString.includes('localhost'),
};

module.exports = new Pool(option);
