/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const map = new Map();
    let idx = 0;
    for(let i = 0 ; i < nums.length ; i++) {
        if(!map.has(nums[i])) {
            map.set(nums[i],idx++);
        }
    }
    //console.log(map)
    for(const [k,v] of map) {
        //console.log(k,v)
        nums[v] = k;
    }

    return map.size;
};