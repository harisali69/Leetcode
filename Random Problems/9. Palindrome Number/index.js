// link 

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var convertedString = x.toString()
    for (let i = 0; i < convertedString.length; i++) {
        if (convertedString[i] !== convertedString[convertedString.length - 1 - i]) {
            return false
        }
    }
    return true
};