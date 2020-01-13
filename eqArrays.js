const assertEqual = require('./assertEqual.js')

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

module.exports = eqArrays