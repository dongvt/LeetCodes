/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const toNode = Array.from({length:n},() => []);
    for(const [from,to] of edges) toNode[to].push(from);

    const res = [];
    for(let i = 0 ; i < n ; i++) if(toNode[i].length === 0) res.push(i);

    return res;
};