/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = nums[0];
    let count = 0; 
    for (let i = 0; i < nums.length ; i++) {
        
        if(candidate === nums[i]) count++;
        else count--;
        if(count < 0) {
            candidate = nums[i];
            count = 0;
        }
    }

    return candidate;
};