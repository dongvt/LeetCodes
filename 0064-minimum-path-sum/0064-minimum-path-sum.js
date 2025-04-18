/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const n = grid[0].length - 1; //x
    const m = grid.length - 1; //y

    const memo = new Array(m + 1).fill().map(row => new Array(n + 1).fill(-1));
    const dp = (y,x) => {
        if(x > n || y > m) return Infinity;
        if(x === n && y === m) return grid[y][x];
        if(memo[y][x] !== -1) return memo[y][x];

        memo[y][x] = Math.min(dp(y+1,x),dp(y,x+1)) + grid[y][x];
        return memo[y][x];
    }
    return dp(0,0)
};