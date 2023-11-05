/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    const arrW = s.split(' ')
    //add words in reverse
    const res = [];
    for(let i = arrW.length - 1; i >= 0; i--) {
        if(arrW[i] !== '') {
            res.push(arrW[i]);
        }
    }

    return res.join(' ');
    
};