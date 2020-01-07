const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  correctCount = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      correctCount++;
    }
    if (correctCount === arr1.length){
      return true;
    }
  } 
  return false;
}

assertEqual(eqArrays(["1", "2", "3"],["1", "2", "3"]), true);
console.log(eqArrays(["1", "2", "3"],["1", "2", "2"]))