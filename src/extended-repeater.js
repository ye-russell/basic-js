const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (typeof options.addition != "string") options.addition = String(options.addition);
  if (options.addition == "undefined") options.addition = "";
  if (!options.additionSeparator) options.additionSeparator = "|";
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (!options.separator) options.separator = "+";
  addition = String(options.addition);
  afterStr = (addition + String(options.additionSeparator)).repeat(options.additionRepeatTimes);
  newStr = String(str) + afterStr.substring(0, afterStr.length - options.additionSeparator.length) + options.separator
  newAddStr = newStr.repeat(options.repeatTimes);

  return newAddStr.substring(0, newAddStr.length - options.separator.length);
};
  