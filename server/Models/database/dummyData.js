const dbUser = require('./../Class/db_Users');

dbUser.createUser({
  name: 'test1',
  email: 't@no.com',
  password: '1',
  phone: '1',
  role: 'admin',
});

dbUser.createUser({
  name: 'test2',
  email: 't2@no.com',
  password: '2',
  phone: '2',
});

dbUser.createUser({
  name: 'test3',
  email: 't3@no.com',
  password: '3',
  phone: '3',
});
