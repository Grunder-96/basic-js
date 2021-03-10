const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let answer = {};

  function quantity(a) {
    return (Math.pow(2, a) - 1);
  };

  function speed(a) {
    return  Math.floor(3600 / a * quantity(disksNumber));
  };



answer.turns = quantity(disksNumber);
answer.seconds  = speed(turnsSpeed);

  return answer;
};