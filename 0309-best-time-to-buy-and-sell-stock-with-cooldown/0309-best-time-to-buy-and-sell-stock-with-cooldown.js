/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const memo = new Array(prices.length).fill().map( _ => new Array(2).fill(-1));
    const dp = (i,buying) => {
        if (i >= prices.length) return 0;
        const b = buying ? 1 : 0;
        if(memo[i][b] !== -1) return memo[i][b];
        if(buying) {
            const buy = dp(i + 1,false) - prices[i];
            const col = dp(i + 1, true);
            memo[i][b] = Math.max(buy,col);
        } else {
            const sell =  dp(i + 2,true) + prices[i];
            const cold = dp(i + 1,false);
            memo[i][b] =  Math.max(sell,cold);
        }
        return memo[i][b];
    }
    return dp(0,true);
};