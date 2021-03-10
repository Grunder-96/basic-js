const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
if (typeof(date) === 'undefined') {
  return 'Unable to determine the time of year!';
}

if (isNaN(date.getTime())) throw Error('Error');

let month = date.getMonth();

function search (a){
  if (a <= 1 || a == 11) return 'winter';
  if (a <=4) return 'spring';
  if (a <=7) return 'summer';
  if (a <=10) return 'autumn';

}

return search(month);

};


