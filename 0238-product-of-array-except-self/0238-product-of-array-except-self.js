/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const ceros = nums.reduce((acu,curr) => curr === 0 ? acu + 1 : acu,0);
    if(ceros > 1) return new Array(nums.length).fill(0);
    
    const product = nums.reduce((acu,curr) => acu * curr,1);
    const res = [];

    for(const n of nums) {
        if(n !== 0) {
            res.push(product / n);
        } else {
            res.push( nums.reduce((acu,curr) => curr !== 0 ? acu * curr : acu,1))
        }
        
    }

    return res;
    
};