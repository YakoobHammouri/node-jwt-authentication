// const dbUser = require('./../Class/db_Users');

// dbUser.createUser({
//   name: 'test1',
//   email: 't@no.com',
//   password: '1',
//   phone: '1',
//   role: 'admin',
// });

// dbUser.createUser({
//   name: 'test2',
//   email: 't2@no.com',
//   password: '2',
//   phone: '2',
// });

// dbUser.createUser({
//   name: 'test3',
//   email: 't3@no.com',
//   password: '3',
//   phone: '3',
// });

const uuidV4Regex = /^[A-F\d]{8}-[A-F\d]{4}-4[A-F\d]{3}-[89AB][A-F\d]{3}-[A-F\d]{12}$/i;
const isValidV4UUID = (uuid) => uuidV4Regex.test(uuid);

const converter = require('./../../Helpers/Converter');

const uuid = require('uuid');
const t = uuid.v4();

console.log(t);
const e = converter.base64Encode(t);
console.log(e);

const q = converter.base64Decode(e);
console.log(q);

console.log(isValidV4UUID(q));
