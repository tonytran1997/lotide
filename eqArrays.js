//const assertEqual = require('../assertEqual');

const eqArrays = function(array1, array2) {
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

module.exports = eqArrays;