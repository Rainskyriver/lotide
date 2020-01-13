const eqArrays = frequire('./eqArrays');

const eqObjects = function(object1, object2) {
  let objectLength = Object.keys(object1).length;
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

moduel.exports = eqObjects;