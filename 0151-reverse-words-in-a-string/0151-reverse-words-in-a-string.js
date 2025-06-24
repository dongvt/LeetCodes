/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.split(' ');
    return arr.filter(it => it !== '').reverse().join(' ')
};