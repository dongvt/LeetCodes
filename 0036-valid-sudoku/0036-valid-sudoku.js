/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const n = 9;
    const rows = Array.from({length:n}, () => new Set());
    const cols = Array.from({length:n}, () => new Set());
    const cuadrants = Array.from({length:n}, () => new Set());

    for(let y = 0 ; y < n; y++) {
        for(let x = 0 ; x < n; x++) {
            const cuaX = Math.floor(x / 3);
            const cuaY = Math.floor(y / 3);
            const cua = 3 * cuaY + cuaX;

            const num = board[y][x];
            if(num === '.') continue;

            if(rows[x].has(num) || cols[y].has(num) || cuadrants[cua].has(num)){
                // console.log(num,rows[x],cols[y],cuadrants[cua])
                // console.log(y,x,cua)
                return false;
            }
                

            rows[x].add(num) 
            cols[y].add(num) 
            cuadrants[cua].add(num)
        }
    }

    return true;

};