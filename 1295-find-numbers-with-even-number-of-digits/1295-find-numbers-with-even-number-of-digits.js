/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    
    const countDigits = (n) => {
        let count = 0;
        while(n > 0) {
            n = ~~(n / 10)
            count++;
        }
        return count;
    }
    let res = 0;
    for(const n of nums) {
        if(countDigits(n) % 2 === 0) res++
    }
    return res;
};