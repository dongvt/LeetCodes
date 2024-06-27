/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const set = new Set(edges[0]);
    for( const n of edges[1]) {
        if(set.has(n)) return n;
    }
};