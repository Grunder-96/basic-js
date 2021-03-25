const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr) === false)  throw  new Error('');
  let result = [];
  for (let i = 0; i < arr.length; i++) {
  if (arr[i] == '--discard-prev' && i == 0 || arr[i] == `--double-prev` && i == 0) {} else
  if (arr[i] == '--discard-next' && i == arr.length - 1 || arr[i] == `--double-next` && i == arr.length - 1) {} else
  if (arr[i] == '--discard-next' &&  arr[i + 2] == '--discard-prev' || arr[i] == '--discard-next' && arr[i + 2] == '--double-prev') {i +=2} else 
  if (arr[i] == '--double-next') {result.push(arr[i + 1])} else
  if (arr[i] == '--double-prev') {result.push(arr[i - 1])} else
  if (arr[i] == '--discard-prev') {result.pop()} else 
  if (arr[i] == '--discard-next') {i++} else
   {result.push(arr[i])};
 }
 return result;
}
