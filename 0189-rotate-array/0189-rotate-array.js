/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % nums.length;
    const newVal = [...nums.slice(n-k,n+1),...nums.slice(0,n-k)];

    for(let i = 0; i < nums.length ;i++) {
        nums[i] = newVal[i];
    }

};