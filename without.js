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

/*Scan over each element in the array based on how many total elements there are (Nested For Loop)
[]Remove any duplicate Elements
[]Push non-duplicates to a new array
Scan each element of the first array by each element of the second array
  once done scanning, if you did not find a duplicate, put the appropriate element of array 1 into a new return array
  if you do find a duplicate, do not put it in the new return array
*/
const without = function(arr, removeElements) {
  let returnArray = []
  let duplicates = 0;
  for (let i = 0; i < arr.length; i++) {
    duplicates = 0;
    for(let x = 0; x < removeElements.length; x++) {
      if(arr[i] === removeElements[x]) {
        duplicates = 1;
      }
    }
    if(duplicates === 0){
      returnArray.push(arr[i]);
    }
  }
  console.log(returnArray);
}

without([1, "2", "3"], [1, "2", 3]);
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["hello"]);
assertArraysEqual(["hello", "world", "lighthouse"], words);