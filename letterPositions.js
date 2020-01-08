const eqArrays = function(arr1, arr2) {
  let correctCount = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      correctCount++;
    }
    if (correctCount === arr1.length) {
      return true;
    }
  }
  return false;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`)
  }
  if (!(eqArrays(arr1, arr2))) {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`)
  }
};

const letterPositions = function(sentence) {
  const convertToArray = function(str) {
    let storeArray = str.split(' ').join('');
    return storeArray;
  };
  results = {};
  str = convertToArray(sentence);
    for (let i = 0; i < str.length; i++) {
      if (results[str[i]]) {
        results[str[i]].push(i);
      } else {
        results[str[i]] = [i];
      }
    }
  return results;
}
letterPositions("lighthouse in the house");
assertArraysEqual(letterPositions("hello").e, [1]);