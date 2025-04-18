/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const dSum = new Map();
    let max = -Infinity;
    for(const n of nums) {
        const value = dSum.get(n) | 0;
        dSum.set(n,value + n);
        max = Math.max(max,n);
    }
    
    const dp = new Array(max + 1);
    dp[max] = dSum.get(max);
    dp[max - 1] = Math.max(dSum.get(max),dSum.get(max - 1) | 0);
    for(let i = max - 2; i >= 0; i--) {
        const gain = dSum.get(i) | 0;
        dp[i] = Math.max(dp[i + 1],dp[i + 2] + gain);
    }
    
    return dp[0];
    
    
    
};