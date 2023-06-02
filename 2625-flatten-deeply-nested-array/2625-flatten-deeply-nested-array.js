/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    
    const res = [];
    
    const flatter = (array,num) => {
        if(num === 0) {
            res.push(array);
            return;
        }
        if(!Array.isArray(array)) {
            res.push(array);
            return;
        }
        for(let i = 0 ; i < array.length; i++) {
            flatter(array[i],num-1);
        }
    }
    
    for(let i = 0 ; i < arr.length; i++) {
        flatter(arr[i],n);
    }
    
    
    
    return res;
    
};