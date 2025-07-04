/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const counter = new Map();
    for(const c of magazine) {
        counter.set(c,(counter.get(c) | 0) + 1);
    }
    for(const c of ransomNote) {
        if(counter.has(c)) {
            const count = counter.get(c);
            if(count === 0) return false;
            counter.set(c,count - 1);
        } else {
            return false;
        }
    }
    return true;
};