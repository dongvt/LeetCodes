/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const m = maze.length;
    const n = maze[0].length;

    const directions = [
        [-1,0],
        [0,-1],
        [1,0],
        [0,1]
    ]
    const visited = Array.from({length: m}, () => Array(n).fill(false));

    const q = new Queue();

    q.enqueue([entrance,0]);
    visited[entrance[0]][entrance[1]] = true;

    const isValid = (y,x) => {
        return y >= 0 && x >= 0 && y < m && x < n;
    }

    const isExit = (y,x) => {
        if(y === entrance[0] && x === entrance[1]) return false;
        return y - 1< 0 || x - 1 < 0 || y + 1 >= m || x + 1 >= n;
    }

    while(q.size() > 0) {
        const [[y,x],deep] = q.dequeue();
        

        if(isExit(y,x)) return deep;

        for(const dir of directions) {
            const newX = x + dir[1];
            const newY = y + dir[0];
            if(!isValid(newY,newX)) continue;
            if(visited[newY][newX]) continue;
            if(maze[newY][newX] === '+') continue;
            visited[newY][newX] = true;
            q.enqueue([[newY,newX],deep + 1]);
        }
    }

    return -1;
};