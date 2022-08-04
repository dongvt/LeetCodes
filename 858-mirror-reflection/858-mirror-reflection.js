/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function(p, q) {
    return (p & -p) > (q & -q) ? 2 : (p & -p) < (q & -q) ? 0:1;
};