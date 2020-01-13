const countLetters = function(string) {
  const convertToArray = function(str) {
    let storeArray = str.split(' ').join('');
    return storeArray;
  };
  let letters = convertToArray(string);
  let results = {};
  for (const letter of letters) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;