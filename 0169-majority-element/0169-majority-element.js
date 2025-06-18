/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //Remember this idea:
    //The most repeated candidate will always count more, all others will go down to 0;

    let candidate = nums[0];
    let count = 1;
    for(let i = 1 ; i < nums.length; i++) {
        if(candidate === nums[i]) {
            count ++;
        } else {
            count --;
        }

        if(count < 0) {
            candidate = nums[i];
            count = 1;
        }
    }

    return candidate;
};