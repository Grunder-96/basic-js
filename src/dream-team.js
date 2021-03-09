const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (typeof(members) !== "array" && typeof(members) !== "object" || !members) {
    return false;}
    let arr = [];
    for (let i = 0; i < members.length; i ++) {
      if (typeof(members[i]) !== "string") {
        continue;
      }
       let k = members[i].trim();
      arr.push(k[0].toUpperCase());
    }
    return arr.sort().join("");
};