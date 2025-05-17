/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {

    const dp = new Array(high + 1);
    const mod = 10 ** 9 + 7;
    dp[0] = 1;
    for(let i = 1 ; i < dp.length; i++) {
        const zeros = dp[i - zero] || 0;
        const ones = dp[i - one] || 0;
        dp[i] = (zeros + ones) % mod;
    }

    return dp.reduce((acc,curr,i) => {
        if(i >= low && i <= high) return (acc + curr) % mod;
        return acc;
    },0);
};