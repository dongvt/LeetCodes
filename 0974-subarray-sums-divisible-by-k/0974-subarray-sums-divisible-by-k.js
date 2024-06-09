/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let count = 0;
    let sum = 0;
    const map = new Map();
    map.set(0,1);
    for(const n of nums) {
        
        sum = (sum + n) % k;
        sum = sum < 0 ? sum + k : sum;
        
        const val = map.get(sum) | 0;
        count += val;
        map.set(sum,val + 1)
    }

    return count;
};