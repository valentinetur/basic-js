const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let tempArr = str.split('');
  let result = '';
  console.log(tempArr)
  
  let tempSum = 1;
  for (let i = 1; i <= tempArr.length; i++) {
   if (tempArr[i] === tempArr[i - 1]) {
     tempSum += 1;
     console.log(`reslt in if ${result}`)
     console.log(`tempSum in if ${tempSum}`)
      console.log('------')
   } else {
     result += `${tempSum}${tempArr[i - 1]}`
     tempSum = 1;
     console.log(`reslt in else ${result}`)
     console.log(`tempSum in else ${tempSum}`)
     console.log('------')
   }
  }
  
  const answ = result.replaceAll('1', '');
  
  return answ
 }

module.exports = {
  encodeLine
};
