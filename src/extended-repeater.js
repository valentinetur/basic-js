const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let tempStr = '';
  let tempArr = new Array((2 * (options.additionRepeatTimes || 1)  - 1 )) 
  tempArr.fill(
    options.addition === null ? 'null' 
        : options.addition !== undefined 
        ? String(options.addition) 
        : ''
  );
  for (let i = 0; i < tempArr.length; i++) {
  	if (i % 2 !== 0) {
    		tempArr[i] = String(options.additionSeparator ?? '|')
    }
  }
  tempStr = String(str) + tempArr.join('')
  
  let result = ''
  let resultArr = new Array((2 * (options.repeatTimes || 1) - 1)) 
  resultArr.fill(tempStr)
  for (let j = 0; j < resultArr.length; j++) {
  	if (j % 2 !== 0) {
    		resultArr[j] = String(options.separator ?? '+')
    }
  }
	result = resultArr.join('')
  console.log(result)
  return result
  
}

module.exports = {
  repeater
};
