/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    //Basically run any traversal from the borders
    //From top and left we fill a pacific visited, and we fill an atlantic visited for the other two

    const m = heights.length;
    const n = heights[0].length;

    const directions = [
        [1,0],
        [-1,0],
        [0,1],
        [0,-1]
    ];

    const dfs = (y,x,visited) => {
        if(x >= n || x < 0 || y >= m || y < 0) return;
        if(visited[y][x]) return;
        visited[y][x] = true;

        for(const [dy,dx] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            if(newX >= n || newX < 0 || newY >= m || newY < 0) continue;
            if(visited[newY][newX]) continue;
            if(heights[y][x] > heights[newY][newX]) continue;
            
            dfs(newY,newX,visited);
        }
    }


    const pacific = Array.from({length:m},() => Array(n).fill(false));
    const atlantic = Array.from({length:m},() => Array(n).fill(false));

    for(let i = 0 ; i < n ; i++) { //rows
        dfs(0,i,pacific);
        dfs(m-1,i,atlantic);
    }

    for(let i = 0 ; i < m ; i++) { //rows
        dfs(i,0,pacific);
        dfs(i,n-1,atlantic);
    }

    let res = [];
    for(let i = 0 ; i < m; i++) {
        for(let j = 0 ; j < n; j++) {
            if(pacific[i][j] && atlantic[i][j]) res.push([i,j]);
        }
    }

    return res;
};