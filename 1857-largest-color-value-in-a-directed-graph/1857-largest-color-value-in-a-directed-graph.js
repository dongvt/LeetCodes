/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function(colors, edges) {
    const n = colors.length;
    const colorCount = Array.from({length: n}, () => Array(26).fill(0));;

    const graph = Array.from({length: n}, () => []);

    for(const [a,b] of edges) {
        graph[a].push(b);
    }
    const visited = Array(n).fill(0); //0 unvisited 1 visiting 2 visited
    let cycle = false;
    const dfs = (node) => {
        if(cycle || visited[node] === 2) return;
        if(visited[node] === 1) {
            cycle = true;
            return;
        }
        visited[node] = 1;
        for(const neighbor of graph[node]) {
            dfs(neighbor);
            for(let c = 0 ; c < 26; c++) {
                colorCount[node][c] = Math.max(colorCount[node][c],colorCount[neighbor][c])
            }
        }
        colorCount[node][colors.charCodeAt(node) - 97]++;
        visited[node] = 2;
    }

    for(let i = 0 ; i  < n; i++) {
        if(visited[i] === 0) dfs(i);
        if(cycle) return -1;
    }

    let res = 0;

    for(let i = 0 ; i < n; i ++) {
        for(let j = 0; j < 26; j++) {
            res = Math.max(res,colorCount[i][j]);
        }
    }

    return res;
};