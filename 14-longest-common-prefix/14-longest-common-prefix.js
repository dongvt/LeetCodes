/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const first = strs[0];
    const res = [];
    for(let i = 0; i < first.length; i++) {
        res.push(first.charAt(i));
        for(const w of strs) {
            if(res.at(-1) !== w.charAt(i)) {
                res.pop();
                return res.join('');
            }
        }
    }
    
    return res.join('');
};