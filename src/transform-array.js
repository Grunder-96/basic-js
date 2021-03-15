const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 if (Array.isArray(arr) === false)  throw  new Error('');
 m = arr.map(function(currentValue, index, array){

  if (currentValue == "--discard-next" && typeof(array[index + 1]) !== "undefined") {
    array[index] = "delete";
    array[index + 1] = "delete";
  }

  if (array[0] == "--discard-prev" || array[0] == "--double-prev") {
    array[index] = "delete";
  }
 
  if (array[index + 1] == "--discard-prev") {
    currentValue = "delete";
    array[index + 1] = "delete";
  }
  
  if (currentValue == "--double-next" && typeof(array[index + 1]) == "undefined") {
    currentValue = "delete";
  }

  if (currentValue == "--double-next" && array[index + 1] !== "undefined") {
    currentValue = array[index + 1];
  } 
  
  if (array[index + 1] == "--double-prev" && typeof(currentValue) !== "undefined") {
    array[index + 1] = array[index];
  }

  if (array[index + 1] == "--double-prev" && typeof(currentValue) == "undefined" || currentValue == "delete") {
    array[index + 1] = "delete";
  }
  return currentValue;
});

return m.filter(element => element !== "delete");

};

// console.log(module.exports([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));

// let a = [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5];
// console.log(module.exports[7])