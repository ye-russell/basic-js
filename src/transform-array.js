const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let transformedArr = [];
  if (Array.isArray(arr) != true) {
    throw new Error();
  } else {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] == '--discard-prev') {
        if (arr[i-2] == '--discard-next') transformedArr = transformedArr;
        else {
          transformedArr.pop();
        }
      } 
      else if (arr[i] == '--discard-next') i ++;
      else if (arr[i] == '--double-prev') {
        if (arr[i-2] == '--discard-next') transformedArr = transformedArr;
        else if (typeof arr[i-1] == 'undefined') transformedArr = transformedArr; 
        else if (arr[i-2] != '--discard-next' ) transformedArr.push(arr[i-1]); 
        else {
          transformedArr = transformedArr;
        }
      }
      else if (arr[i] == '--double-next' && typeof arr[i+1] !== 'undefined') transformedArr.push(arr[i+1]);
      else if (arr[i] == '--double-next' && typeof arr[i+1] == 'undefined') transformedArr = transformedArr; 
      else {
        transformedArr.push(arr[i]);
      }
    }
    return transformedArr;
  }
};
