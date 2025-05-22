/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const col = [];
    const row = [];

    for(let i = 0; i < matrix.length ; i++) {
        for(let j = 0; j < matrix[i].length;j++) {
            if(matrix[i][j] === 0) {
                col.push(j);
                row.push(i)
            }
        }
    }

    for(const c of col) {
        for(let i = 0; i < matrix.length; i++) {
            matrix[i][c] = 0
        }
    }

    for(const r of row) {
        for(let i = 0; i < matrix[0].length; i++) {
            matrix[r][i] = 0
        }
    }


};