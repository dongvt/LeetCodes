/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const n = nums.length;
    const memo = Array(n).fill(-1);
    const dp = (idx) => {
        
        if(idx >= n - 1) return 0;
        if(memo[idx] !== -1) return memo[idx];
        let res = Infinity;
        for(let i = idx + 1; i < idx + nums[idx] + 1; i++) {
            res = Math.min(res,dp(i) + 1);
        }

        memo[idx] = res;
        return res;
    }

    return dp(0);
};