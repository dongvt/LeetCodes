/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 0;
    const n = nums.length;
    const set1 = new Set();
    const set2 = new Set();
    for(let i = 0 ; i < n; i++) {
        if(set1.has(nums[i]) && set2.has(nums[i])){
            count++;
        } else {
            nums[i - count] = nums[i];
            if(!set1.has(nums[i]))
                set1.add(nums[i]);
            else set2.add(nums[i])
        }
    }

    return n - count;
};