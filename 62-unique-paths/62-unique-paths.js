/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const memo = new Array(m).fill().map(row => new Array(n).fill(-1));
    const dp = (i,j) => {// i-> m
        if(i < 0 || j < 0) return 0;
        if(memo[i][j] !== -1) return memo[i][j];
        if(i === 0 && j === 0) return 1;
        memo[i][j] = dp(i-1,j) + dp(i,j-1)
        return memo[i][j];
    }
    return dp(m-1,n-1)
};