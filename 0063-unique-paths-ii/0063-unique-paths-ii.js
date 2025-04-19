/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    const memo = new Array(m).fill().map(row => new Array(n).fill(-1));
    const dp = (y,x) => {
        if(y >= m || x >= n) return 0;
        if(memo[y][x] !== -1) return memo[y][x];
        if(obstacleGrid[y][x] === 1) return 0;
        if(x === n - 1 && y === m - 1) return 1;
        memo[y][x] = dp(y+1,x) + dp(y,x+1);
        return memo[y][x];
    }

    return dp(0,0);
};