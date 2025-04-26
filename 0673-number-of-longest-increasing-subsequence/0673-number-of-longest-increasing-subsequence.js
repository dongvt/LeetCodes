/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    const n = nums.length;
    const counter = new Map();
    const memo = new Array(n).fill(null);
    const dp = (i) => {
        if(memo[i]) return memo[i];
        let maxLength = 1, count = 1;
        for(let j = i + 1; j < n; j++){
            if(nums[j] > nums[i]) {
                [lenJ,cntJ] = dp(j);

                if(lenJ + 1 > maxLength) { // + 1
                    maxLength = lenJ + 1;
                    count = cntJ;
                } else if(lenJ + 1 === maxLength) {
                    count += cntJ;
                }
            }
                
        }
        memo[i] = [maxLength,count];
        return memo[i];
    }
    let maxLength = 0, count = 0;
    for(let i = 0 ; i < n; i++) {
        [lenI,cntI] = dp(i);
        if(lenI > maxLength) {
            maxLength = lenI;
            count = cntI;
        } else if (lenI === maxLength) {
            count += cntI
        }
    }
    
    return count;
};