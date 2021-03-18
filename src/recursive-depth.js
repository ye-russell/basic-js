const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr) { //[1, [3, 4], 2, [5, [7, 8] 6]]
    let counterGlobal = 1;
    for (let i = 0; i < arr.length; i++) {
      let counterLocal = 1;
      if (Array.isArray(arr[i])) {
        counterLocal += this.calculateDepth(arr[i])
      }
      if(counterLocal > counterGlobal) {
        counterGlobal = counterLocal
      }
      
    }
    return counterGlobal
  }
}