/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]
    //Simple do DFS to mark the island
    const dfs = (y, x, visited) => {
        // console.log(y, x, grid[y][x], grid, m , n)
        if (x < 0 || x >= n || y < 0 || y >= m) return 0;
        if (grid[y][x] !== 1) return 0;
        if (grid[y][x] === 1) grid[y][x] = 2;
        
        for (const [dy, dx] of directions) {
            const newY = y + dy;
            const newX = x + dx;
            if (newX < 0 || newX >= n || newY < 0 || newY >= m) continue;
            if (visited[newY][newX]) continue;
            visited[newY][newX] = true;
            // console.log('***********', newY, newX, y, x)
            dfs(newY, newX, visited)
        }
        return 0;
    }

    for(let i = 0; i < n; i++) {
        dfs(0, i, Array.from({ length: m }, () => Array(n).fill(false)))
        dfs(m-1, i, Array.from({ length: m }, () => Array(n).fill(false)))
    }

    for(let i = 0; i < m; i++) {
        dfs(i, 0, Array.from({ length: m }, () => Array(n).fill(false)))
        dfs(i, n-1, Array.from({ length: m }, () => Array(n).fill(false)))
    }

    let count = 0;
    for(let y = 0 ; y < m; y++) {
        for(let x = 0 ; x < n ; x++) {
            if(grid[y][x] === 1) count++
        }
    }

    return count;

};