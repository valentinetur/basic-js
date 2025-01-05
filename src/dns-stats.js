const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let result = {};
  const dnsArray = domains.map(el => el.split('.').reverse())

  for (let i = 0; i < dnsArray.length; i++) {
    let subdomain = '';
    dnsArray[i].forEach(el => {
      subdomain += `.${el}`;
      console.log(subdomain)
      if (subdomain in result) {
        result[subdomain] += 1
      } else {
        result[subdomain] = 1
      }
    })
  }
  console.log(result)
  return result
}

module.exports = {
  getDNSStats
};
