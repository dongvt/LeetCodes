/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    //So, we can check if a number is visited, the current best lengths begins in one (self)
    //If we visited the previous number, we can add it to the max length

    const dp = new Map();
    let res = 1;
    for(const a of arr) {
        const prevLength = dp.get(a - difference) || 0;
        const currentLength = prevLength + 1;
        dp.set(a,currentLength);
        res = Math.max(res,currentLength);
    }

    return res;
};