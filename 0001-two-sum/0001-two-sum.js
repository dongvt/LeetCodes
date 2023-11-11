/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if(map.has(n)) {
            return [map.get(n),i];
        } else {
            map.set(target - n,i)
        }
    }

    return null;
};