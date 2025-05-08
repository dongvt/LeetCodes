/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //Pick between current (buy/cell) or hold
    //When all transactions are done, just return 0
    const memo = new Array(prices.length).fill().map(_ => new Array(4).fill(-1));
    const trade = (i,transaction) => {
        if(i === prices.length) return 0;
        //A transaction can be buy or sell, but in the description a buy/sell 
        //is counted a single transaction
        //So, count each buy and sell as different trasactions for a total of 4
        if(transaction === 4) return 0; 
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