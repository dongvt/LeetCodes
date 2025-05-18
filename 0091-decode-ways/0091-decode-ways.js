/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const memo = new Array(s.length).fill(-1);
    const dp = (i) => {
        if(s[i] === '0') return 0;
        if(i === s.length) return 1;
        if(memo[i] !== -1) return memo[i];
        const current = +s[i], next = +s[i + 1];
        let res = dp(i + 1);
        if( (i + 1 < s.length) &&
            (current === 1) || (current === 2 && next <= 6)) res += dp(i + 2);

        memo[i] = res;
        return res;
    }

    return dp(0);
};