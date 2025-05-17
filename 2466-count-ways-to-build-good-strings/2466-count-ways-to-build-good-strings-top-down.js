/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    const memo = new Array(high + 1).fill(-1);
    const mod = 10 ** 9 + 7;
    const dp = (size) => {
        if(size > high) return 0;
        if(memo[size] !== -1) return memo[size];
        const current = size >= low ? 1 : 0;
        memo[size] = (dp(size + zero) + dp(size + one) + current) % mod;
        return memo[size];
    }

    return dp(0,0);
};