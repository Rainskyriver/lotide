const middle = function(arr) {
  let midArray = [];
  let arrayLength = arr.length;
  let midIndex = Math.floor(arrayLength / 2);
  if (arrayLength % 2 !== 0) {
    midArray.push(arr[midIndex]);
  }
  if (arrayLength % 2 === 0) {
    midArray.push(arr[midIndex - 1], arr[midIndex]);
  }
  return midArray;
};

module.exports = middle;