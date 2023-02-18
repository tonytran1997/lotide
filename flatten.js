const eqArrays = function (array1, array2) {
  let result = true;
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i]) && (eqArrays(array1[i], array2[i] === false))) {
        return false;
      }
      if (array1.length !== array2.length) {
        return false;
      }
      if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]){
        return false;
      }
    }
    return result;
  };

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
}; 

const flatten = function (array) {
  let flattenArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let element of array[i]) {
        flattenArray.push(element);
      }
    } else {
      flattenArray.push(array[i]);
    }
  }
  return flattenArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;