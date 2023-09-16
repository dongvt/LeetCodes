/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let idx = 0;
    for(let i = 1 ; i < nums.length; i++) {
        if(nums[idx] !== nums[i]) {
            nums[++idx] = nums[i];
        }
    }

    return idx + 1;
};