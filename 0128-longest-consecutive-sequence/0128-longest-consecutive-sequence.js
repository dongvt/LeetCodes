/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let res = 0; 
    for(const n of set) {
        if(!set.has(n - 1)) {
            let count = 1, tmp = n + 1;
            while(set.has(tmp)) {
                tmp++;
                count++;
                
            }
            res = Math.max(res,count);
        }
    }
    return res;
};