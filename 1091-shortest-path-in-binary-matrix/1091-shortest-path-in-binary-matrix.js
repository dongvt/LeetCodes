/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    
    if(grid[0][0] !== 0 || grid[grid.length-1][grid[0].length-1]) return -1;
    
    let getNeighbors = (cell) => {
        let directions = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
        let neighbors = [];
        for (let dir of directions) {
            let newRow = dir[0] + cell[0];
            let newCol = dir[1] + cell[1];
            
            if(newRow < 0 || newRow > grid.length - 1 ||
              newCol < 0 || newCol > grid[0].length - 1 ||
              grid[newRow][newCol] !== 0)
                continue;
            
            neighbors.push([newRow,newCol]);
        }
        return neighbors;
    }
    
    let q =[];
    q.push([0,0]);
    grid[0][0] = 1;
    let distance = -1;
    while(q.length > 0){
        let cell = q.shift();
        distance = grid[cell[0]][cell[1]];
        
        if(cell[0] === grid.length - 1 && cell[1] === grid[0].length - 1)
            return distance;
        
        let neighborList = getNeighbors(cell);
        
        for( let n of neighborList) {
            grid[n[0]][n[1]] = distance + 1;
            q.push(n);
        }
    }
    return -1;
};