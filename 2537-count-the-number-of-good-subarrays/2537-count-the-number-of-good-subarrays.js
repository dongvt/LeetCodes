/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
    let repeated = 0;
    let right = -1;
    let res = 0;
    const counter = new Map();
    for(let left = 0; left < nums.length; left++) {
        while(repeated < k && right + 1 < nums.length) {
            right++;
            repeated += counter.get(nums[right]) || 0;
            counter.set(nums[right], (counter.get(nums[right]) || 0) + 1);
            
        }
        if(repeated >= k) {
            res += nums.length - right;
        }
        counter.set(nums[left],counter.get(nums[left]) - 1)
        repeated -= counter.get(nums[left])
    }
    return res;
};