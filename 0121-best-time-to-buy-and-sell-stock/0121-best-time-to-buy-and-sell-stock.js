/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity, res = 0;
    for(const price of prices) {
        min = Math.min(min,price);
        if(price > min) res = Math.max(res,price - min);
    }

    return res;
};