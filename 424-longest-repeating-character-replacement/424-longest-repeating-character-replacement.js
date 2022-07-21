/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const count = new Array(26).fill(0);
    
    let res = 0;
    count[s.charCodeAt(0) - 65]++;
    
    let max = 1;
    
    for(let i = 0 ,j = 0; j < s.length ;) {
        
        if(j-i+1-max <= k) {
            res = Math.max(res,j-i+1);
            j++;
            if(j === s.length) break;
            count[s.charCodeAt(j) - 65]++;
        } else {
            count[s.charCodeAt(i) - 65]--;
            i++;
        }
        
        for(const c of count) {
            max = Math.max(c,max);
        }
    }
    
    return res;
};