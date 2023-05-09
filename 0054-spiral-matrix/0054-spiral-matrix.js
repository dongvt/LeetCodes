/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let top  = 0 , bot = matrix.length - 1, left = 0, right = matrix[0].length - 1;
    
    const res = [];
    while(top <= bot && left <= right) {
        //top line
        for(let i = left; i <= right ; i++) {
            res.push(matrix[top][i]);
        }
        top++;
        if(top > bot || left > right) continue;
        //right line
        for(let i = top; i <= bot ; i++) {
            res.push(matrix[i][right]);
        }
        right--;
        if(top > bot || left > right) continue;
        //bot line
        for(let i = right; i >= left;i--) {
            res.push(matrix[bot][i]);
        }
        bot--;
        if(top > bot || left > right) continue;
        //left line
        for(let i = bot; i >= top;i--) {
            res.push(matrix[i][left]);
        }
        left++;
    }
    return res;
};