/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const memo = new Array(target + 1).fill(-1);
    const dp = (n) => {
        if(n > target ) return 0;
        if(n === target) return 1;
        if(memo[n] !== -1) return memo[n];
        let res = 0;
        for(let x = 0; x < nums.length; x++) {
            res += dp(n + nums[x]);
        }
        memo[n] = res;
        return res;
    }
    return dp(0,0);
};