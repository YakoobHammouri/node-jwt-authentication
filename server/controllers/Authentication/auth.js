const login = (req, res) => {
  res.json({ login: 'logiiin' });
};

const logout = (req, res) => {
  res.json({ logout: 'logoutttt' });
};

const isAuthentication = (req, res) => {
  res.json({ 'is Auth ': 'isss' });
};

module.exports = { login, logout, isAuthentication };
