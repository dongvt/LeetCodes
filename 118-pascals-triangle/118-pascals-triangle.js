/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 1) return [[1]];
    
    
    const res = [[1],[1,1]];
    
    while(res.length < numRows) {
        const rIdx = res.length - 1;
        const tmpArr = [1];
        for(let i = 1 ; i < res[rIdx].length ; i++) {
            tmpArr.push(res[rIdx][i - 1] + res[rIdx][i]);
        }
        tmpArr.push(1);
        res.push(tmpArr);
    }
    
    return res;
};