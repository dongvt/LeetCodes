/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //two pointer approach, the idea is that the left will be min and wight max
    let profit = 0,left = 0;
    for(let right = 1 ; right < prices.length ;right ++) {
        if(prices[left] >= prices[right]) {
            left = right;
        } else {
            profit = Math.max(profit,prices[right]-prices[left]);
        }
    }

    return profit;
        
    
};