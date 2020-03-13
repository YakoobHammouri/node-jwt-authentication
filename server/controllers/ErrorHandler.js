const error404 = (req, res) => {
  res.status(404).send('404 not Found');
};

const error500 = (err, req, res, next) => {
  console.log('inside Error 500 \n : => ', err);
  res.status(500).send('Internal Error 500');
};

module.exports = { error404, error500 };
