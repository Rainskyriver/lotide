const findKey = function(keys, callback) {
  for (const key in keys) {
    if (callback(keys[key])) {
      return key;
    }
  }
};

module.exports = findKey;