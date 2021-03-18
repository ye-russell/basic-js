const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === true) {
    var sortedMembers = members.sort();
    var coolNames = ""
    for (i = 0; i < sortedMembers.length; i++) {
      if (typeof sortedMembers[i] == "string") {
        var whiteName = ''
  
        for (j = 0; j < sortedMembers[i].length; j++) {
          if (sortedMembers[i][j] != ' ') {
            whiteName += sortedMembers[i][j]
          } 
        }
        coolNames += whiteName[0]
  
      } 
    }
   
    var newNames = coolNames.toUpperCase().split('').sort().join('')
    return newNames
  } else return false;
};
