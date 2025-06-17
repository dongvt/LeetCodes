/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(n, prerequisites) {
    const visited = Array(n).fill(0);
    const graph = Array.from({length:n},() => [])

    for(const [a,b] of prerequisites) {
        graph[a].push(b);
    }

    let cycle = false;
    const res = [];
    const dfs = (node) => {
        if(cycle) return;
        if(visited[node] === 2) return;
        if(visited[node] === 1) {
            cycle = true;
            return;
        }
        visited[node] = 1;
        for(const neigh of graph[node]) {
            dfs(neigh);
        }
        visited[node] = 2;
        res.push(node);
    }

    for(let i = 0; i < n ; i++) {
        if(visited[i] === 0) dfs(i);
        if(cycle) return [];
    }

    return res;

};