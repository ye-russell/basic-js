const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (isWhat) {
    this.isWhat = isWhat;
  }
  encrypt(str, key) {
    var thisString = str.toUpperCase();
    thisString = thisString.split('');
    var thisKey = key.toUpperCase();
    thisKey = thisKey.repeat(thisString.length / thisKey.length + 1);
    thisKey = thisKey.split('');
    var returnator = '';
    counter = 0;

    for (i = 0; i < thisString.length; i++) {
      if (thisString[i].charCodeAt(0) >= 65 &&  thisString[i].charCodeAt(0) <= 90) {
        returnator = returnator + String.fromCharCode(((thisString[i].charCodeAt(0) + thisKey[counter].charCodeAt(0)) % 26) + 65);
        counter++;
      } else {
        returnator = returnator + thisString[i];
      }
    }
    if (this.isWhat == false) {
      return thisString.reverse().join('');
    }
    return returnator;
  }    
  decrypt(str, key) {
    var thisString = str.toUpperCase();
    thisString = thisString.split('');
    var thisKey = key.toUpperCase();
    thisKey = thisKey.repeat(thisString.length / thisKey.length + 1);
    thisKey = thisKey.split('');
    var returnator = '';
    counter = 0;
    for (i = 0; i < thisString.length; i++) {
      if (thisString[i].charCodeAt(0) >= 65 &&  thisString[i].charCodeAt(0) <= 90) {
        returnator = returnator + String.fromCharCode(((thisString[i].charCodeAt(0) + 26 - thisKey[counter].charCodeAt(0)) % 26) + 65);
        counter++;
      } else {
        returnator = returnator + thisString[i];
      }
    }
    if (this.isWhat == false) {
      return thisString.reverse().join('');
    }
    return returnator;
  }
}

module.exports = VigenereCipheringMachine;
