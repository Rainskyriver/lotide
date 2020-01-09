const findKey = function(keys, callback) {
  for (const key in keys) {
    if (callback(keys[key])) {
      return key;
    }
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


// const galaxies = {
//   "Blue Hill": {stars: 1},
//   "Akaleri": {stars: 3},
//   "noma": {stars: 2},
//   "elBulli": {stars: 3},
//   "Ora": {stars: 2},
//   "Akelarre": {stars: 3}
// }
// const twoStars = (findKey(galaxies, x => x.stars === 2));
// assertEqual("noma", twoStars);