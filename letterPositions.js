const letterPositions = function(sentence) {
  const convertToArray = function(str) {
    let storeArray = str.split(' ').join('');
    return storeArray;
  };
  let results = {};
  let str = convertToArray(sentence);
  for (let i = 0; i < str.length; i++) {
    if (results[str[i]]) {
      results[str[i]].push(i);
    } else {
      results[str[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;