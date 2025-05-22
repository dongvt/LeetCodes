/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    const memo = new Array(graph.length + 1).fill(null);
    const dfs = (node, visited =  new Set()) => {
        
        if(memo[node] !== null) return memo[node];
        if(visited.has(node)) return true;
        visited.add(node);
        
        let res = false;
        for(const n of graph[node]) {
            if(dfs(n,visited)) {
                res = true;
                break;
            }
        }
        visited.delete(node)
        memo[node] = res;
        return res;
        
    }
    const res = [];
    for(let i = 0; i < graph.length;i++) {
        if(!dfs(i)) res.push(i);
    }

    return res;
};