const CustomError = require("../extensions/custom-error");



module.exports = function dateSample(a) {
  if (typeof a !== "string") return false;
  const MODERN_ACTIVITY= 15; 
  const HALF_LIFE_PERIOD= 5730;
  const log = 0.693;
  const k = log / HALF_LIFE_PERIOD;
  


  let b = parseFloat(a);
  if (b <= 0) return false;
  if (b >= MODERN_ACTIVITY) return false;
  if (!isFinite(b)) return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / b) / k);

};





