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
  }
  if (!(eqArrays(arr1, arr2))) {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`)
  }
};

const flatten = function(arr) {
  flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let y = 0; y < arr[i].length; y++) {
        flattenedArray.push(arr[i][y]);
      }
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  console.log(flattenedArray);
}

flatten([1, 2, [3, 4], 5, [6]]);