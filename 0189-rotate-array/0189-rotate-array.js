/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    const n = nums.length;
    const right = [];
    for(let i = 1; i <= k; i++) {
        right.push(nums[n - i]);
    }

    for(let i = n - 1; i >= k; i--) {
        nums[i] = nums[i - k];
    }

    let i = 0;
    while(right.length > 0) {
        nums[i] = right.pop();
        i++;
    }

};