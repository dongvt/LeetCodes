/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    //Do some traverse form the borders, change the land to some other thing (like 2 or more water)
    //Then go inner and do number of islands.
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
        if (x < 0 || x >= n || y < 0 || y >= m) return 0;
        if (grid[y][x] !== 0) return 0;
        if (grid[y][x] === 0) grid[y][x] = 2;
        
        for (const [dy, dx] of directions) {
            const newY = y + dy;
            const newX = x + dx;
            if (newX < 0 || newX >= n || newY < 0 || newY >= m) continue;
            if (visited[newY][newX]) continue;
            visited[newY][newX] = true;
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

    let res = 0;
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (grid[i][j] === 0) {
                res++;
                dfs(i, j, Array.from({ length: m }, () => Array(n).fill(false)))
            }
        }
    }

    return res;
};