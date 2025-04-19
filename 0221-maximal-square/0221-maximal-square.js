/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let res = 0;
    const [m,n] = [matrix[0].length,matrix.length]
    for(let y = 0 ; y < m; y++) {
        for(let x = 0; x < n; x++) {
            const leftTop = (x <= 0 || y <= 0) ? 0 : +matrix[x-1][y-1]; 
            const top = y <= 0 ? 0 : +matrix[x][y-1];
            const left = x <= 0 ? 0 : +matrix[x-1][y];
            if(matrix[x][y] === '1') {
                matrix[x][y] = Math.min(leftTop,top,left) + 1;
                res = Math.max(res,matrix[x][y]);
            }
        }
    }
    return res *  res;
};