/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const visited = new Set();

    const sumSquares = (num) => {
        let sum = 0;
        while(num > 0) {
            const digit = num % 10;
            // console.log('**',digit)
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }
    while(n !== 1) {
        // console.log(n)
        if(visited.has(n)) return false;
        visited.add(n);
        
        n = sumSquares(n);
    }

    return true;
};