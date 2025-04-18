/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    //m => width, n => high
    const memo = new Array(m + 1).fill().map(x => new Array(n + 1).fill(-1));
    const dp = (y,x) => {
       
        if(y > m) return 0;
        if(x > n) return 0;
        if(y === m && x === n) return 1;
        if(memo[y][x] !== -1) return memo[y][x];

        memo[y][x] = dp(y + 1,x) + dp(y,x + 1);
        return memo[y][x];
    }

    return dp(1,1);
};