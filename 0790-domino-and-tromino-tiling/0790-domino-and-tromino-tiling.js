/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const memo = new Array(n + 1).fill(-1);
    const dp = (num) => {
        if(num < 0) return 0;
        if(num === 0 || num === 1) return 1;
        if(num === 2) return 2;

        if(memo[num] !== -1) return memo[num];

        memo[num] = 2 * dp(num - 1) + dp(num - 3);

        return memo[num]; 
    }

    return dp(n);
};