/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    const div = ~~(time / (n-1));
    const res = time % (n - 1);
    if(div % 2 == 0) return res + 1;
    else return n - res;
};