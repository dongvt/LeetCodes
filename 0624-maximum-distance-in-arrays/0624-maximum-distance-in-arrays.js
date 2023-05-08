/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    //Number in array, index
    let min = [Infinity,-1], max = [-Infinity,-1];
    for(let i = 0 ; i < arrays.length ; i ++) {
        const array = arrays[i];
        if(min[0] > array[0]) {
            min = [array[0],i];
        }
        if(max[0] < array.at(-1)) {
            max = [array.at(-1),i];
        }
        //console.log(max,min)
    }
    
    
    if(max[1] !== min[1])
        return Math.abs(max[0] - min[0]);
    
    const [,idx] = max;
    const [low,high] = [arrays[idx][0],arrays[idx].at(-1)];
    
    let res = 0;
    for(let i = 0 ; i < arrays.length ; i++) {
        if(i === idx) continue;
        const arr = arrays[i];
        res = Math.max(res,high - arr[0],arr.at(-1) - low);
    }
    
    return res;
    
};