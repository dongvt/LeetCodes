/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const pq = new MaxPriorityQueue({
        compare: (a,b) => {
            if(b[1] - a[1] !== 0) return b[1] - a[1];
            else return a[0].localeCompare(b[0]);
        }
    });
    
    const map = new Map();
    for(const w of words) {
        const val = map.get(w) | 0;
        map.set(w,val + 1);
    }
    
    for(const pair of map) {
        pq.enqueue(pair);
    }
    
    const res = [];
    for(let i = 0 ; i < k; i++) {
        res.push(pq.dequeue()[0]);
    }
    
    return res;
    
};