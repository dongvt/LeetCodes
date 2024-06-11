/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const map = new Map();

    for(let i = 0 ; i < arr2.length;i++) {
        map.set(arr2[i],(arr2.length - i)*-1)
    }
    
    arr1.sort((a,b) => {
        if(map.has(a)) a = map.get(a);
        if(map.has(b)) b = map.get(b);
        return a-b;
    })

    return arr1;
};