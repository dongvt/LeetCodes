/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function(colors, edges) {
    const n = colors.length;
    const colorCount = Array(26).fill(0);

    const graph = Array.from({length: n}, () => []);

    for(const [a,b] of edges) {
        graph[a].push(b);
    }
    const visited = Array(n).fill(0); //0 unvisited 1 visiting 2 visited
    let res = 0, cycle = false;
    const dfs = (node) => {
        if(graph[node].length === 0) {
            colorCount[colors.charCodeAt(node) - 97]++;
            res = Math.max(res,...colorCount);
            colorCount[colors.charCodeAt(node) - 97]--;
            return;
        }
        if(cycle) return;
        if(visited[node] === 1) {
            cycle = true;
            return;
        }
        visited[node] = 1;
        colorCount[colors.charCodeAt(node) - 97]++;
        for(const neighbor of graph[node]) {
            dfs(neighbor);
        }
        colorCount[colors.charCodeAt(node) - 97]--;
        visited[node] = 2;
    }

    for(let i = 0 ; i  < n; i++) {
        if(visited[i] === 0) dfs(i);
        if(cycle) return -1;
    }

    return res;
};