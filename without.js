const without = function(arr, removeElements) {
  let returnArray = [];
  let duplicates = 0;
  for (let i = 0; i < arr.length; i++) {
    duplicates = 0;
    for (let x = 0; x < removeElements.length; x++) {
      if (arr[i] === removeElements[x]) {
        duplicates = 1;
      }
    }
    if (duplicates === 0) {
      returnArray.push(arr[i]);
    }
  }
};

module.exports = without;