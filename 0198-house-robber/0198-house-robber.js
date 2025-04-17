/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dp = new Array(nums.length);
    if(nums.length === 1) return nums[0];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[1],nums[0]);
    for(let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }

    return dp.at(-1);
};