const takeUntil = function(array, callback) {
  results = [];
  for (let item of array) {
    if(callback(item)) {
      break;
    } else {
      results.push(item);
    }
  }
  return results;
};
