/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const memo = new Array(n + 1).fill(-1);
    const dp = (n) => {
        if(memo[n] !== -1) return memo[n];
        if(n === 1) return 1;
        if(n === 0) return 0;
        memo[n] = dp(n - 1) + dp(n - 2);
        return memo[n];
    };

    return dp(n);
};