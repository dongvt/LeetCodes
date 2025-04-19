/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const n = matrix.length;
    const memo = new Array(n).fill().map(row => new Array(n).fill(-Infinity));
    const dp = (y,x) => {
        if(y >= n || x >= n || x < 0) return Infinity;
        if(y === n-1) return  matrix[y][x];

        if(memo[y][x] !== -Infinity) return memo[y][x];
        memo[y][x] = Math.min(dp(y+1,x-1),dp(y+1,x),dp(y+1,x+1)) + matrix[y][x]
        return memo[y][x];
    }
    let res = Infinity;
    for(let i = 0; i < n; i++){
        res = Math.min(res,dp(0,i));
    }
    return res;
};