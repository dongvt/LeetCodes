/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function(forest) {
    if(forest[0][0] === 0 ) return -1;
    
    const getDistance = (sR,sC,target) => { //source row and column, target value
        const q = new Queue();
        const visited = new Array(forest.length).fill().map(col => new Array(forest[0].length).fill(false));
        
        q.enqueue([sR,sC,0]); //row, col, distance
        visited[sR][sC] = true;
        while(q.size() > 0) {
            const [row,col,dist] = q.dequeue();
            
            if(forest[row][col] === target) {
                return [row,col,dist];
            }
            
            for(const direction of [[0,-1],[-1,0],[0,1],[1,0]]) {
                const newRow = row + direction[0];
                const newCol = col + direction[1];
                //console.log(newRow,newCol,visited)
                if(newRow < 0 || 
                   newRow >= forest.length || 
                   newCol < 0 || 
                   newCol >= forest[0].length || 
                   forest[newRow][newCol] === 0 ||
                   visited[newRow][newCol]
                  ) continue;
                
                q.enqueue([newRow,newCol,dist + 1]);
                visited[newRow][newCol] = true;
            }
        }
        
        return null;
    }
    
    //Get the list of trees from smallest to larger
    //In js is creating a on dimentional array with all the data
    //Then delete 0 and 1 since those are not trees
    //Finally sort to get the desired result
    const treeList = forest.flat().filter(val => val !== 0 && val !== 1).sort((a,b) => a - b);
    
    let col = 0, row = 0;
    let res = 0;
    
    for(const tree of treeList) {
        const node = getDistance(row,col,tree);
        //console.log('row ' + row,'col ' + col, 'node ' + node,'tree ' + tree);
        if(node === null) return -1;
        row = node[0];
        col = node[1];
        res += node[2];
    }
    
    return res;
};