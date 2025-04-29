/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    const max = Math.max(...nums);
    let res = 0 , count = 0;

    let l = 0;
    for(let r = 0 ; r < nums.length; r++) {
        if(nums[r] === max) {
            count ++;
        }
        while(count === k) {
            if(nums[l] === max){
                count--;
            }
            l++;
        }
        res += l;
    }
    return res;
};