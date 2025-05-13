/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const memo = new Array(amount + 1).fill().map(_ => new Array(coins.length + 1).fill(-1));

    const dp = (rem,i) => {
        if(rem < 0 || i === coins.length) return 0;
        if(rem === 0) return 1;
        if(memo[rem][i] !== -1) return memo[rem][i];
        memo[rem][i] = dp(rem,i + 1) + dp(rem - coins[i],i);
        return memo[rem][i];
    }

    return dp(amount,0);
};