const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
  objectLength = Object.keys(object1).length;
  //checking if the objects have the same number of keys.
  if (objectLength === Object.keys(object2).length){
    let correctCount = 0;
    for (const key in object1) {
      if (Array.isArray(object1[key])) {
        if (eqArrays(object1[key], object2[key])) {
          correctCount += 1;
        }
      }
      if (object1[key] == object2[key]) {
        correctCount += 1;
      }
      if (correctCount === objectLength) {
        return true;
      }
    }
  }
  return false;
};

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};

const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1"};
console.log(Object.keys(dc).length, Object.keys(cd).length);
// console.log(Object.keys(ab).length);
// console.log(eqObjects(ab, ba));
// console.log(eqObjects(dc, cd));
assertEqual(eqObjects(cd, dc), true);