/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    const kArr = [];
    let i = num.length - 1;
    while(i >= 0 || k > 0) {
        if(i >= 0)
            k += num[i];
        
        kArr.push(k % 10);
        k = ~~(k / 10);
        i--;
    }
    return kArr.reverse();
    
};