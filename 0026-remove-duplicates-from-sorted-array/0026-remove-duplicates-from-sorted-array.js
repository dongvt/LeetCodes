/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 0;
    const n = nums.length;
    const set = new Set();
    for(let i = 0 ; i < n; i++) {
        if(set.has(nums[i])){
            count++;
        } else {
            nums[i - count] = nums[i];
            set.add(nums[i]);
        }
    }

    return set.size;
};