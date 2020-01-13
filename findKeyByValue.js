const findKeyByValue = function(keys, val) {
  let results = "";
  for (const key in keys) {
    if (keys[key] === val) {
      results = key;
    }
  }
  return results;
};

module.exports = findKeyByValue;