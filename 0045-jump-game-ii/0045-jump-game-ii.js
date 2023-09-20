/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let farest = 0;
    let end = 0;
    let res = 0;
    for(let i = 0 ; i < nums.length - 1; i++) { 
        farest = Math.max(farest, i + nums[i]);
        if(i === end) {
            end = farest;
            res++;
        }
    }
    return   res ;
};