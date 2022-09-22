/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res = s.split(' ').map(word => word.split('').reverse().join('')).join(' ');
    return res;
};