/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    const maxDay = Math.max(...days);
    const dp = new Array(maxDay + 1).fill(0);    
    const travelDay = new Set(days);
    
    
    for(let i = 1 ; i <= maxDay; i++) {
        const d7 = Math.max(0, i - 7);
        const d30 = Math.max(0, i - 30);
        if(travelDay.has(i))
            dp[i] = Math.min(dp[i-1] + costs[0],
                            dp[d7] + costs[1],
                            dp[d30] + costs[2]);
        else
            dp[i] = dp[i-1];
    }

    return dp.at(-1);
};