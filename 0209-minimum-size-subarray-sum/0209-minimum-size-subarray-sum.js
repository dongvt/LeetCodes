/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const prefixSum = [];
    const n = nums.length;
    let sum = 0;
    for(let i = 0; i < n ; i++) {
        sum += nums[i];
        prefixSum.push(sum);
    }

    let left = -1, res = Infinity;
    for(right = 0; right < n; right++) {
        let sum = 0;
        if(left === -1) sum = prefixSum[right];
        else sum =  prefixSum[right] -  prefixSum[left];

        while(sum >= target && left < right) {
            
            // console.log(sum,left,right,prefixSum)
            res = Math.min(res,right - left);
            left++;
            sum =  prefixSum[right] -  prefixSum[left];
        }
    }
    return res === Infinity ? 0 : res;
};
