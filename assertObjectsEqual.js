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

const eqObjects = function(object1, object2) {
  const objectLength = Object.keys(object1).length;
  //checking if the objects have the same number of keys.
  if (objectLength === Object.keys(object2).length) {
    let correctCount = 0;
    for (const key in object1) {
      if (Array.isArray(object1[key])) {
        if (eqArrays(object1[key], object2[key])) {
          correctCount += 1;
        }
      }
      if (object1[key] === object2[key]) {
        correctCount += 1;
      }
      if (correctCount === objectLength) {
        return true;
      }
    }
  }
  return false;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  if (!(eqObjects(actual, expected))) {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
