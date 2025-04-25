/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const memo = new Array(nums.length).fill(-1);
    const dp = (i) => {
        if(i === nums.length) return 0;
        if(memo[i] !== -1) return memo[i];
        let res = 0;
        for(let x = i + 1; x <  nums.length; x++) {
            if(nums[x] > nums[i]) {
                res = Math.max(res,dp(x) + 1);
            }
        }
        memo[i] = res;
        return memo[i];
    }

    let res = 0;
    for(let i = 0 ; i < nums.length; i++) {
        res = Math.max(res,dp(i));
    }
    return res + 1;
};