/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const n = mat.length;
    let sum = 0;
    for(let i = 0; i < n; i++) {
        
        //ant diag
        const ax = n - i - 1;
        const ay = i;
        if(ax !== ay) sum += mat[ay][ax];
        sum += mat[i][i];
    }
    
    return sum;
};