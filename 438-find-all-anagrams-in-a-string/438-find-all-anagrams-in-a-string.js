/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const sMap = new Map();
    const pMap = new Map();
    const res = [];
    
    const compareMaps = (m1,m2) => {
        if(m1.size !== m2.size) return false;
        for(const [k,v] of m1) {
            if(!m2.has(k)) return false;
            if(m2.get(k) !== v) return false;
        }
        
        return true;
    }
    
    for(const l of p) {
        const value = pMap.get(l) | 0;
        pMap.set(l,value + 1);
    }
    
    for(let i = 0 ; i < s.length ; i++) {

        sMap.set(s[i],(sMap.get(s[i]) | 0) + 1);
        
        if(i >= p.length) {
            const idx = s[i - p.length];
            if(sMap.get(idx) === 1) sMap.delete(idx);
            else sMap.set(idx,sMap.get(idx) - 1);
        }
        if(compareMaps(sMap,pMap)) res.push(i - p.length + 1);
    }
    
    return res;
};