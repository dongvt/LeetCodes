/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    nums.sort((a,b) => a - b);
    const mod = (10 ** 9 + 7)
    const power = new Array(nums.length).fill(0);
    power[0] = 1;
    for(let  i = 1 ; i < nums.length ; i++ ) {
        power[i] = (power[i-1] * 2) % mod;
    }
    
    let res = 0;
    
    let left = 0 , right = nums.length - 1;
    console.log(power)
    while(left <= right) {
        if(nums[left] + nums[right] <= target) {
            res += power[right - left];
            res %= mod;
            left++;
        } else {
            right--;
        }
    }
    
    return res;
};