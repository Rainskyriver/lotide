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
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`)
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`)
  }
};


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// let words = ["ground", "control", "to", "major", "tom"];
// const comp1 = [ 'g', 'c', 't', 'm', 't' ];
// const result1 = map(words, word => word[0]);
// assertArraysEqual(result1, comp1);
// assertArraysEqual(map(comp1, comp => comp + "'s"), ["g's", "c's", "t's", "m's", "t's"]);
// assertArraysEqual(map(words, word => word + " Up"), ["ground Up", "control Up", "to Up", "major Up", "tom Up"]);
