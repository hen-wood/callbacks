/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

function minValueCallback(array, cb) {
  // Your code here
  let smallestNumber = array.reduce(function (acc, currentValue) {
    if (acc > currentValue) {
      return currentValue;
    }
    else {
      return acc;
    }
  })
  if (cb === undefined) {
    return smallestNumber;
  }
  else {
    return cb(smallestNumber);
  }

}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = minValueCallback;
} catch (e) {
  return null;
}
