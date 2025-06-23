/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    //lets map the characters
    //go from right to left reading the characters
    //if the character is less than the one at the right then it substract instead of adding

    const nToD = new Map();
    nToD.set('I', 1)
    nToD.set('V', 5)
    nToD.set('X', 10)
    nToD.set('L', 50)
    nToD.set('C', 100)
    nToD.set('D', 500)
    nToD.set('M', 1000)

    let res = 0;
    for (let i = s.length - 1; i >= 0; i--) { 
        
        if(i < s.length - 1 && nToD.get(s[i]) < nToD.get(s[i+1])) {
            res -= nToD.get(s[i]);
        } else {
            res += nToD.get(s[i]);
        }
    }

    return res;

};