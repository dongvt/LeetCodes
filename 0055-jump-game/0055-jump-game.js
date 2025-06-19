/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const n = nums.length;
    let count = nums[0];
    if(n === 1) return true;
    if(count <= 0) return false;
    for(let i = 1; i < n ; i++) {
        count = Math.max(nums[i], count - 1);
        if(count <= 0 && i !== n - 1) return false;
    }

    return true;
};