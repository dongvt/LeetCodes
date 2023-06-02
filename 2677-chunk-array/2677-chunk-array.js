/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let count = size;
    let currArr = [];
    const res = [];
    for(let i = 0 ; i < arr.length;i++) {
        count--;
        currArr.push(arr[i]);
        if(count === 0) {
            res.push(currArr);
            currArr = [];
            count = size;
        }
    }
    
    if(arr.length % size !== 0) res.push(currArr);
    
    return res;
};
