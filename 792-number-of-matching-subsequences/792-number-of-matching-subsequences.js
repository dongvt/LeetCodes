/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    
    const isSub = (str) => {
        let j = 0;
        for(const l of s) {
            if(l === str[j]) j++;
            if(j === str.length) return true;
        }
        return false;
    }
    
    const map = new Map();
    for(const w of words) {
        const val = map.get(w) | 0;
        map.set(w,val+1);
    }
    
    let count = 0;
    for(const [k,v] of map) {
        if(isSub(k)) count += v;
    }
    return count;
    
    
};

