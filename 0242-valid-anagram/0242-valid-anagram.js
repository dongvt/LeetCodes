/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length !== t.length) return false;
    const sMap = new Map(), tMap = new Map();
    for(const c of s) sMap.set(c,(sMap.get(c) | 0) + 1)
    for(const c of t) tMap.set(c,(tMap.get(c) | 0) + 1)

    for(const [k,v] of sMap) {
        if(!tMap.get(k)) return false;
        if(tMap.get(k) !== v) return false;
    }

    return true;
};