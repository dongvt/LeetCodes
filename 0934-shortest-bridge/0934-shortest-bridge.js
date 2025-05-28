/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    const n = grid.length;
    //Find a cell which is an island
    let startPoint = [-1,-1];
    for(let i = 0 ; i < n; i++) {
        for(let j = 0 ; j < n ; j++) {
            if(grid[i][j] === 1) {
                startPoint = [i,j];
                break;
            }
        }
        if(startPoint[0] !== -1) break;
    }
    //Do DFS into that Island and mark the Island
    const q = new Queue();
    const visited = Array.from({length:n},() => Array(n).fill(false));
    const dfs = (y,x) => {
        if(y < 0 || y >= n || x < 0 || x >= n) return;
        if(grid[y][x] !== 1) return; 

        grid[y][x] = 2;
        visited[y][x] = true;
        q.enqueue([[y,x],0]); //Cordinates , Depth


        dfs(y + 1,x);
        dfs(y - 1,x);
        dfs(y,x + 1);
        dfs(y,x - 1);
    }
    dfs(...startPoint)
    //Perform BFS from the Island

    const coordinates = [
        [0,1],
        [0,-1],
        [1,0],
        [-1,0]
    ]

    const isInvalid = (y,x) => {
        return y < 0 || y >= n || x < 0 || x >= n;
    }
    while(q.size()) {
        const [[y,x],depth] =  q.dequeue();
        if(grid[y][x] === 1) return depth - 1;

        for(const coor of coordinates) {
            const newX = x + coor[1];
            const newY = y + coor[0];
            if(isInvalid(newY,newX)) continue;
            // console.log(newX,newY)
            if(visited[newY][newX]) continue;
            visited[newY][newX] = true;
            q.enqueue([[newY,newX],depth + 1]);
        }
    }

    return 0;
};