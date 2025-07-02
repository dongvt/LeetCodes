/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const m = board.length;
    const n = board[0].length;
    const directions = [
        [-1,-1],
        [-1,0],
        [-1,1],
        [0,-1],
        [0,1],
        [1,-1],
        [1,0],
        [1,1],
    ]

    const countNeightbor = (y,x) => {
        let count = 0;
        for(const [ny,nx] of directions) {
            const newX = x + nx;
            const newY = y + ny;
            if(newX < 0 || newY < 0 || newX >= n || newY >= m) continue;
            if(board[newY][newX] === 1) {
                count++;
            }
        }
        return count;
    } 
    const nextState = [...board].map((it) => [...it]);
    for(let row = 0 ; row < m; row++) {
        for(let col = 0 ; col < n; col++) {
            const cell = board[row][col];
            const count = countNeightbor(row,col);
            if(cell === 1) {
                if(count < 2 || count > 3) nextState[row][col] = 0;
            }
            if(cell === 0 && count === 3) nextState[row][col] = 1;
        }
    }


    for(let row = 0 ; row < m; row++) {
        for(let col = 0 ; col < n; col++) {
           board[row][col] = nextState[row][col]
        }
    }


};