/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    const counts = new Array(26).fill().map(row => []);
 
    for(const w of words) {
        counts[w.charCodeAt(0) - 97].push([w,0]);
    }
    
    let res = 0;
    for(const l of s) {
        const old = counts[l.charCodeAt(0) - 97];
        counts[l.charCodeAt(0)-97] = [];
        for(const pair of old) {
            pair[1]++;
            if(pair[1] === pair[0].length) res++;
            else counts[pair[0].charCodeAt(pair[1]) - 97].push([...pair]);
        }
    }
    
    return res;
    
};

