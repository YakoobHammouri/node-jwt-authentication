const base64Encode = (str, type) => {
  try {
    if (!type) {
      type = 'base64';
    }
    return Buffer.from(str).toString(type);
  } catch (ex) {
    return null;
  }
};

const base64Decode = (str, type) => {
  try {
    if (!type) {
      type = 'base64';
    }
    return Buffer.from(str, type).toString();
  } catch (ex) {
    return null;
  }
};

module.exports = { base64Decode, base64Encode };
