/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const pMap = new Map(); //Pattern to word
    const sMap = new Map(); //Word to pattern

    const sArr = s.split(' ');
    if(sArr.length !== pattern.length) return false;
    for(let i = 0 ; i < sArr.length; i++) {
        const p = pattern[i];
        const w = sArr[i];
        if(pMap.has(p)) {
            if(pMap.get(p) !== w) return false;
        } else {
            if(sMap.has(w)) return false;
        }

        pMap.set(p,w);
        sMap.set(w,p);
    }

    return true;


};