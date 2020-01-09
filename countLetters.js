const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const result1 = countLetters("Lighthouse in the houseAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzbgfxnvseathtrh");
console.log(result1);