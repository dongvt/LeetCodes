/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const memo = Array.from({ length: amount + 1 },
                          () => Array(coins.length + 1).fill(-1));
    const dp = (idx,sum) => {
        if(sum === amount) return 0;
        if(sum > amount || idx >= coins.length) return Infinity;
        if(memo[sum][idx] !== -1) return memo[sum][idx];
        let res = Infinity;
        for(let i = idx; i < coins.length; i++) {
            res = Math.min(res,dp(i,sum + coins[i]) + 1);
        }
        memo[sum][idx] = res;
        return res;
    }

    const result = dp(0,0)
    return result === Infinity ? -1 : result;
};