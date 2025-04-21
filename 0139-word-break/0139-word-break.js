/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const compare = (idx,word) => {
        for(let i = idx; i < idx + word.length;i++) {
            if(s[i] !== word[i - idx]) return false;
        }
        return true;
    }
    const memo = new Array(s.length + 1).fill(0);
    const explore = (idx) => {
        if(idx > s.length) return false;
        if(idx === s.length) return true;
        if(memo[idx] !== 0) return memo[idx]
        let res = false;
        for(const word of wordDict) {
            if(compare(idx,word)) {
                
                res ||= explore(idx + word.length);
            }
        }
        memo[idx] = res;
        return res;
    }

    return explore(0);
};