/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const pq = new MaxPriorityQueue();
    for(let i = 0 ; i < matrix.length; i++) {
        for(let j  = 0 ; j < matrix.length; j++) {
            pq.enqueue(matrix[i][j]);
            if(pq.size() > k) pq.dequeue();
        }
    }
    
    
    return pq.dequeue().element;
};