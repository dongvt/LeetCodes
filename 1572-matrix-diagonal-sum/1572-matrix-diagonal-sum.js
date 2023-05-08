/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const n = mat.length;
    let sum = 0;
    for(let i = 0; i < n; i++) {
        if(n - i - 1 !== i) sum += mat[i][n - i - 1];
        sum += mat[i][i];
    }
    
    return sum;
};