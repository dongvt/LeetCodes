/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const n = prices.length;
    const memo = Array.from({length:n},() => Array(2).fill(-1))
    const dp = (i, buy) => {
        if (i >= n) return 0;
        const key = buy ? 1 : 0;
        if(memo[i][key] !== -1) return memo[i][key];
        let res = 0;
        if (buy) { //Selling
            res = Math.max(dp(i + 1, false) + prices[i], dp(i + 1, true));
        } else {// buy
            res = Math.max(dp(i + 1, true) - prices[i], dp(i + 1, false));
        }

        memo[i][key] = res;
        return res;
    }

    return dp(0,false);
};