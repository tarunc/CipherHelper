/**
 * Define the `CipherHelper` Library.
 *
 * @api public
 */
var CipherHelper = {
  // A helper function to help translate the strings given the 2 dictionaries
  translate: function(origStr, eDict, oDict) {
    var state = 0,
        newStr = '';

    for (var i = 0; i < origStr.length; i++) {
      if (state === 0) {
        newStr += eDict[origStr.charAt(i)];
        state = 1;
      } else {
        newStr += oDict[origStr.charAt(i)];
        state = 0;
      }
    }

    return newStr;
  },
  // A helper function to reverse the dictionaries
  transform: function(array) {
    var decode = {},
        key;

    for (key in array) {
      decode[array[key]] = key;
    }

    return decode;
  },
  // Define the even dictionary
  evenDict: {
    1: 'd',
    2: 'w',
    3: 'j',
    4: 'h',
    5: 'e',
    6: 'r',
    7: 'v',
    8: 'q',
    9: 'c',
    0: 'p'
  },
  // Define the odd dictionary
  oddDict: {
    1: 's',
    2: 't',
    3: 'u',
    4: 'i',
    5: 'z',
    6: 'x',
    7: 'b',
    8: 'k',
    9: 'l',
    0: 'f'
  },
  // Actual functions to do the actual translation between the cipher/decipher
  cipher: function(int) {
    return this.translate(int.toString(), this.evenDict, this.oddDict);
  },
  decipher: function(str) {
    return this.translate(str, this.evenDictDecode, this.oddDictDecode);
  }
};

// Define the reverse dictionary
CipherHelper.oddDictDecode = CipherHelper.transform(CipherHelper.oddDict);
CipherHelper.evenDictDecode = CipherHelper.transform(CipherHelper.evenDict);

/**
 * Expose `CipherHelper` Library.
 */
module.exports = CipherHelper;
