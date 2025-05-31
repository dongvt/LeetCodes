/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
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
        // console.log(y, x)
        if (x < 0 || x >= n || y < 0 || y >= m) return 0;
        if (grid[y][x] !== '1') return 0;
        if (grid[y][x] === '1') grid[y][x] = '2';
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

    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {

                res++;
                dfs(i, j, Array.from({ length: m }, () => Array(n).fill(false)))
                // console.log(grid)
            }
        }
    }

    return res;
};