const CustomError = require("../extensions/custom-error");


const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    if (!value) {
      this.array.push("( " + value + " )");
      return this;
    } 
    else {
      this.array.push("( " + value + " )");
      return this;
    } 
  
  },
  removeLink(position) {
    if (position > 0 && position <= this.array.length) {
      this.array.splice(position - 1, 1)
      return this;
    } else {
      this.array = [];
      throw new Error();
    }

  },
  reverseChain() {
    this.array.reverse()
    return this
  },
  finishChain() {
    finishedChain = '';
    for (i = 0; i < this.array.length; i++) {
      finishedChain += this.array[i] + "~~"
    }
    finishedChain = finishedChain.substring(0, finishedChain.length-2)
    this.array = [];
    return finishedChain;
  }
};

module.exports = chainMaker;
