/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    const m = grid.length , n = grid[0].length;
    const memo = new Array(m+1).fill().map(row=>new Array(n+1).fill(-2));
    const dfs = (row,col) => {
        if(memo[row][col] !== -2) return memo[row][col];
        if(col >= n || col < 0) return 0;
        if(row === m) return col;
        if(grid[row][col] === 1 && col === n-1) return -1;
        if(grid[row][col] === -1 && col === 0) return -1;
        if(grid[row][col] === -1 && grid[row][col - 1] === 1) return -1;
        if(grid[row][col] === 1 && grid[row][col + 1] === -1) return -1;
        
        const ans = grid[row][col] === 1 ? dfs(row + 1,col + 1) : dfs(row + 1,col - 1);
        memo[row][col] = ans;
        return ans;
    }
    
    let res = [];
    for(let i = 0; i < n ; i++){
        const num = dfs(0,i);
        res.push(num);
    }

    return res;
};