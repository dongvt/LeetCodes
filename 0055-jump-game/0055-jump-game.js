/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length === 1) return true;
    let long = nums[0];
    let i = 0;
    while(long > i) {
        i++;
        long = Math.max(long, nums[i] + i);
        if(long >= nums.length - 1) return true; 
    }
    return false;
};