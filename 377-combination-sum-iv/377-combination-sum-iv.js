/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    let memo = new Array(target + 1).fill(Infinity);
    
    const dp = (sum) => {        
        if(sum === 0) return 1;
        if(sum < 0) return 0;
        if(memo[sum] !== Infinity) return memo[sum];
        
        let res = 0;
        for(const num of nums) {
            res += dp(sum - num);
        }
        memo[sum] = res;
        //console.log(res)
        return res;
    }
    
    
    
    return dp(target);
};