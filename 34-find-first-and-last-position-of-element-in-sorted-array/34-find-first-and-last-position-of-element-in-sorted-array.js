/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    const findLeft = () => {
        let left = 0, right = nums.length - 1;
        let res = -1;
        while(left <= right) {
            const mid = Math.trunc((left + right) / 2);
            
            if(nums[mid] === target) {
                right = mid - 1;
                res = mid;
            } else if(nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return res;
    }
    
    const findRight = () => {
        let left = 0, right = nums.length - 1;
        let res = -1;
        while(left <= right) {
            const mid = Math.trunc((left + right) / 2);
            
            if(nums[mid] === target) {
                left = mid + 1;
                res = mid;
            } else if(nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return res;
    }
    
    const left = findLeft();
    if(left === -1) return [-1,-1];
    const right = findRight();
    
    return [left,right];
    
};