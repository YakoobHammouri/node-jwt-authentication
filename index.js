const app = require('./server/app');

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`server run in port ${app.get('port')}`);
});
