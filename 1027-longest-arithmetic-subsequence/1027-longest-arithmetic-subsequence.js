/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    const n = nums.length;

    const dp = new Array(n).fill().map(_ => new Map());

    let res = 2;
    for(let i = 0; i < n; i++) {
        for( let j = 0 ; j < i; j++){
            const diff = nums[i] - nums[j];
            const currLength = (dp[j].get(diff) || 1) + 1;
            dp[i].set(diff,currLength)
            res = Math.max(res,currLength);
        }
    }

    return res;
};