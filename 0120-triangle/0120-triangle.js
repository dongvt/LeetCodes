/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const m = triangle.length;
    const memo = new Array(m).fill().map(row => new Array(m).fill(-1));
    const dp = (y,x) => {
        if(y >= m) return 0;
        if(memo[y][x] !== -1) return memo[y][x];
        memo[y][x] = Math.min(dp(y+1,x),dp(y+1,x+1)) + triangle[y][x];
        return memo[y][x];
    }

    return dp(0,0);
};