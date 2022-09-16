/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multipliers) {
    const M = multipliers.length;
    
    const dp = new Array(M + 1).fill().map(it => new Array(M + 1).fill(0));
        
    for(let i = M -1 ; i >= 0 ; i--) {
        for(let left = i; left >= 0; left--){
            const right = nums.length - (i - left + 1);
            dp[i][left] = Math.max(multipliers[i] * nums[left]  + dp[i + 1][left + 1],
                                   multipliers[i] * nums[right] + dp[i + 1][left]);
        }
    }

    return dp[0][0];
};