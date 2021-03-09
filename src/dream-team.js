const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (typeof(members) !== "array") {
    return false;}
    let arr = [];
    for (let i = 0; i < members.length; i ++) {
      arr.push(members[i][0]);
    }
    console.log(arr.toUpperCase().sort().join(""));
};
// let answ = [];
// createDreamTeam = [
//   'amelia',
//   'ruby',
//   'lily',
//   'grace',
//   'millie',
//   'daisy',
//   'freya',
//   'erin',
//   'megan',
//   'jasmine',
//   'brooke',
// ];
// for (let i = 0; i < createDreamTeam.length; i ++) {
//   answ.push(createDreamTeam[i][0]);
// }

// console.log(answ.join("").toUpperCase());
