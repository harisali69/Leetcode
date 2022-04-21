// link : https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let countArray = new Array(256);
    countArray.fill(0);

    for (let i = 0; i < s.length; i++) {
        countArray[s[i].charCodeAt()]++;
    }

    for (let i = 0; i < t.length; i++) {
        countArray[t[i].charCodeAt()]--;
    }

    for (let i = 0; i < countArray.length; i++) {
        if (countArray[i] !== 0) {
            return false;
        }
    }
    return true;

    // One solution using array.sort complexity O(n log(n)) For Unicode Characters
    // s = [...s].sort().join('');
    // t = [...t].sort().join('');

    // if (s === t) {
    //     return true;
    // }
    // return false;
};
