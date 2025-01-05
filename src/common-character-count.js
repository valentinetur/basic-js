const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 * getCommonCharacterCount( 'aabcc', 'adcaa' ) 
 */
function getCommonCharacterCount( s1, s2 ) {
  let s1Array = s1.split('');
  let s2Array = s2.split(''); 
  maxLengthArray = s1Array.length >= s2Array.length ? s1Array.slice(0) : s2Array.slice(0);
  minLengthArray = s1Array.length < s2Array.length ? s1Array.slice(0) : s2Array.slice(0);
  console.log(maxLengthArray)
  console.log(minLengthArray)
  let sum = 0;
  for (let i = 0; i < maxLengthArray.length; i++ ) {
    for (let j = 0; j < minLengthArray.length; j++ ) {
      if (maxLengthArray[i] === minLengthArray[j]) {
        console.log(`'i index: ${i}; max[i]: ${maxLengthArray[i]}`);
        console.log(`'j index: ${j}; min[j]]: ${minLengthArray[j]}`);
        
        sum += 1;
        console.log(sum)
        // maxLengthArray.splice(i, 1)
        minLengthArray.splice(j, 1)
        console.log(maxLengthArray)
        console.log(minLengthArray)
        console.log('---')
        break;
      }
    }
  }
  return sum;
}

module.exports = {
  getCommonCharacterCount
};
