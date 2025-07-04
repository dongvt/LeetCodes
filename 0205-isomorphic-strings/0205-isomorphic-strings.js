/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const tMap = new Map(); //T to S
    const sMap = new Map(); //S to T


    if(s.length !== t.length) return false;
    for(let i = 0 ; i < s.length; i++) {
        const S = s[i];
        const T = t[i];
        if(sMap.has(S)) {
            if(sMap.get(S) !== T) return false;
        } else {
            if(tMap.has(T)) return false;
        }

        tMap.set(T,S);
        sMap.set(S,T);
    }

    return true;
};