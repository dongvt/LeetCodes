/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const n = mat[0].length;
    const m = mat.length;
    //push all ceros to a queue
    //to BFS from that.
    const q = new Queue();
    const visited = Array.from( {length : mat.length},() => Array(mat[0].length).fill(false) );
    for(let i =0 ; i < mat.length; i++) {
        for(let j = 0 ; j < mat[0].length; j++) {
            if(mat[i][j] === 0) {
                visited[i][j] = true;
                q.enqueue([[i,j],0])
            }
        }
    }
    const directions = [
        [0,1],
        [0,-1],
        [1,0],
        [-1,0]
    ]

    const isValid = (y,x) => {
        return y >= 0 && y < m && x >= 0 && x < n; 
    }
    while(q.size() > 0) {
        const [[y,x],distance] = q.dequeue();

        for(const [dy,dx] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            if(isValid(newY,newX)) {
                if(!visited[newY][newX] && mat[newY][newX] !== 0) {
                    visited[newY][newX] = true;
                    mat[newY][newX] = distance + 1;
                    q.enqueue([[newY,newX],distance + 1]);
                }
            }
        }
    }

    return mat;
};