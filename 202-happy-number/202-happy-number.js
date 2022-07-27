/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let sum = 0;
    const set = new Set();
    while(sum !== 1) {
        sum = 0;
        while(n > 0) {
            const digit = n % 10;
            sum += digit * digit;
            n = ~~(n / 10);
        }
        if(set.has(sum)) return false;
        else set.add(sum);
        n = sum;
        
    }
    return true;
};