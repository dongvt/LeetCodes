/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const map = new Map();
    const heap = new MaxPriorityQueue({compare: (a,b) => {
        return b[1] - a[1];
    }});
    
    for(const a of arr) {
        const value = map.get(a) | 0;
        map.set(a,value + 1);
    }
    
    for(const pair of map) {
        heap.enqueue(pair);
    }
    
    let sum = 0;
    let res = 0;
    
    do {
        sum += heap.dequeue()[1];
        res++;
    }while(sum < arr.length / 2);
    
    return res;
};