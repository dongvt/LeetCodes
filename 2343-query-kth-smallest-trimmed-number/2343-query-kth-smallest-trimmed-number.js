/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function(nums, queries) {
    const l = nums[0].length;
    const res = [];
    for(const q of queries) {
        const [k,trim] = q;
        const pq = new MinPriorityQueue({
            compare: (a,b) => {
                if(a[0] - b[0] !== 0n) return a[0] - b[0];
                return a[1] - b[1];
            }
        });
        
        for(let i = 0 ; i < nums.length; i++) {
            const n = nums[i];
            pq.enqueue([BigInt(n.substring(l-trim)),i]);
        }
        for(let i = 1 ; i < k; i++) 
            pq.dequeue();
        
        res.push(pq.dequeue()[1]);
    }
    return res;
};