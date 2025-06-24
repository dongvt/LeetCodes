/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arr = s.split(' ');
    let res = 0;
    while(res === 0) {
        res = arr.pop().length;
    }
    return res;
};