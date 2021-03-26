const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === undefined) {this.chain.push(`()`)} else 
    {this.chain.push(`( ${value} )`)};
    return this;
  },

  removeLink(position) {
    if (typeof(position) == 'number') {this.chain.splice(position - 1, 1); return this} else 
      { this.chain = [];
        throw new Error("Error")}
    },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let chainStr = this.chain.join("~~");
    this.chain = [];
    return chainStr;
  },

  chain: []
}

console.log(chainMaker.addLink(233).addLink(322).finishChain())

module.exports = chainMaker;



