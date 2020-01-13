const flatten = function(arr) {
  let flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let y = 0; y < arr[i].length; y++) {
        flattenedArray.push(arr[i][y]);
      }
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

module.exports = flatten;