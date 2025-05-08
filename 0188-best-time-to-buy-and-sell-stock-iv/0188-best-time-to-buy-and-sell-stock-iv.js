/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {

    
    //Same thing as III but this times we get K
    const memo = new Array(prices.length).fill().map(_ => new Array(k * 2).fill(-1));
    const trade = (i,transaction) => {
        if(i === prices.length) return 0;
        if(transaction === k * 2) return 0; 
        if(memo[i][transaction] !== -1) return memo[i][transaction];
        const buying = transaction % 2 === 0;
        const hold = trade(i + 1, transaction);
        if(buying) {
            const buy = trade(i + 1,transaction + 1) - prices[i];
            memo[i][transaction] = Math.max(hold,buy);
        } else {
            //selling
            const sell = trade(i + 1, transaction + 1) + prices[i];
            memo[i][transaction] = Math.max(hold,sell);
        }

        return memo[i][transaction];
    }

    return trade(0,0);
};