const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
   if (!Array.isArray(arr)) return 0;

   let maxDepth = 1

   for (let el of arr) {
    if (Array.isArray(el)) {
      let localDepth = this.calculateDepth(el)

      if (localDepth + 1 > maxDepth) {
        maxDepth = localDepth + 1
      }
    }
   }
   return maxDepth
  }
}

module.exports = {
  DepthCalculator
};
