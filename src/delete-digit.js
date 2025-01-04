const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = 0;
  const stringArray = n.toString().split('');
  for (let i = 0; i < stringArray.length; i++) {
    let tempStringArray = stringArray.slice(0);
    tempStringArray.splice(i, 1)
    if (Number(tempStringArray.join('')) > maxNumber) {
      maxNumber = Number(tempStringArray.join(''));
    }

  }

  return maxNumber
}

module.exports = {
  deleteDigit
};
