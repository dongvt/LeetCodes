/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const tCounter = new Map();
    const sCounter = new Map();

    for(const c of t) {
        tCounter.set(c,(tCounter.get(c) | 0) + 1);
    }

    const checkSubstring = () => {
        for(const [k,v] of tCounter) {
            if(!sCounter.has(k)) return false;
            if(sCounter.get(k) < v) return false;
        }
        return true;
    }

    let left = 0, resLength = Infinity, res = '';
    for(let right = 0; right < s.length; right++) {
        const c = s[right];
        sCounter.set(c,(sCounter.get(c) | 0) + 1);
        while(checkSubstring() && left <= right) {
            if(resLength > right - left + 1) {
                resLength = right - left + 1;
                res = s.substring(left,right + 1);
            }
            sCounter.set(s[left],sCounter.get(s[left]) - 1);
            left++;
        }
    } 
    return res;
};