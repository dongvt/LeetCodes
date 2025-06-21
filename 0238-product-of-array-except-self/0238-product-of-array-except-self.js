/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let total = 1, ceros = 0;
    for(let i = 0 ; i < nums.length; i++) {
        if(nums[i] !== 0){
            total *= nums[i];
        } else {
            ceros ++;
        }        
    }

    if(ceros >= 2) return Array(nums.length).fill(0);

    const res = [];
    if(ceros === 1) {
        for(const n of nums) {
            if(n === 0) res.push(total);
            else res.push(0);
        }
    } else {
        for(const n of nums) {
            res.push(total / n);
        }
    }

    
    
    return res;
};