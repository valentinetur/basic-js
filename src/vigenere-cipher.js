const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(text, key) {
    return this.process(text, key, true);
  }

  decrypt(text, key) {
    return this.process(text, key, false);
  }

  process(text, key, encrypt) {
    if (!text || !key) throw new Error("Incorrect arguments!");

    text = text.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    let keyIndex = 0;
    const A = 65;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      if (char >= 'A' && char <= 'Z') {
        const shift = key[keyIndex % key.length].charCodeAt(0) - A;
        keyIndex++;

        const newChar = encrypt
          ? String.fromCharCode(((char.charCodeAt(0) - A + shift) % 26) + A)
          : String.fromCharCode(((char.charCodeAt(0) - A - shift + 26) % 26) + A);

        result += newChar;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};


module.exports = {
  VigenereCipheringMachine
};
