/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let idx = 0, rem = 0;
    let sFlag = false;
    for (let i = 0 ; i < nums.length; i++) {
        if(i === idx) continue;
        if(nums[idx] !== nums[i]) {
            nums[++idx] = nums[i];
            sFlag = false;
        } else {
            if(!sFlag) {
                sFlag = true;
                nums[++idx] = nums[i];
               
            } else {
                rem++;
            }
        }
        
    }
    return nums.length - rem;
};