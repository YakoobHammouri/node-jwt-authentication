const { join } = require('path');

function buildPublicPath(fileName) {
  if (!fileName) return null;
  return join(__dirname, '..', '..', '..', 'public', fileName);
}

const registrationPage = (req, res) => {
  res.sendFile(buildPublicPath('registration.html'));
};

const studentPage = (req, res) => {
  res.sendFile(buildPublicPath('student.html'));
};

module.exports = { registrationPage, studentPage };
