/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let removed = 0;
    for(let i = 0 ; i < nums.length ; i++) {
        if(nums[i] === val) {
            removed++;
        } else {
            nums[i-removed] = nums[i];
        }
    }

    return nums.length - removed;
};