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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`)
  }
  if (!(eqArrays(arr1, arr2))) {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`)
  }
};

const middle = function(arr) {
  let midArray = [];
  let arrayLength = arr.length;
  let midIndex = Math.floor(arrayLength/2);
  if (arrayLength % 2 != 0){
    midArray.push(arr[midIndex]);
  }
  if(arrayLength % 2 === 0){
    midArray.push(arr[midIndex - 1], arr[midIndex]);
  }
  return midArray;
};

console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));
