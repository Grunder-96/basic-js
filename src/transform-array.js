const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 if (Array.isArray(arr) === false)  throw  new Error('');
 let result = [];
 for (let i = 0; i < arr.length; i++) {
 if (arr[i] == '--discard-prev' && i == 0 || `--double-prev` && i == 0) {continue} else
 if (arr[i] == '--discard-next' || `--double-next` && i == arr.length - 1) {continue} else
 if(arr[i] == '--discard-next' &&  arr[i + 2] == '--discard-prev' || '--double-prev') {i +=2} else
 if (arr[i] == '--double-next') {result.push(arr[i + 1])} else
 if (arr[i] == '--double-prev') {result.push(arr[i - 1])} else result.push(arr[i])
 } 
 return result;
}



//  * `--discard-next` исключает следующий за ней элемент исходного массива из преобразованного массива.
// * `--discard-prev` исключает предшествующий ей элемент исходного массива из преобразованного массива.
// * `--double-next` удваивает следующий за ней элемент исходного массива в преобразованном массиве.
// * `--double-prev` удваивает предшествующий ей элемент исходного массива в преобразованном массиве.

// `transform([1, 2, 3, '--double-next', 4, 5])` => `[1, 2, 3, 4, 4, 5]`

// `transform([1, 2, 3, '--discard-prev', 4, 5])` => `[1, 2, 4, 5]`