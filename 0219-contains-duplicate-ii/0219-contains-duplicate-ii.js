/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const repeated = new Map();
    for(let i = 0 ; i < nums.length; i++) {
        if(repeated.has(nums[i])) {
            if(i - repeated.get(nums[i]) <= k) return true;
        }
        repeated.set(nums[i],i);
    }
    return false;
};