/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(n, prerequisites) {

    const graph = Array.from({length:n},()=>[]);

    for(const [a,b] of prerequisites) {
        graph[a].push(b);
    }
    const visited = Array(n).fill(false);

    const dfs = (n) => {
        
        if(visited[n]) return false;
        if(graph[n].length === 0) return true;
        visited[n] = true;
        for(const neighbor of graph[n]) {
            if(!dfs(neighbor)) return false;
        }
        visited[n] = false;
        
        //So this one is already visited, and this is correct
        //So we can take out its neightors so we don't visited them again

        graph[n] = [];
        return true;
    }

    for(let i = 0; i < n; i++) {
       if(!dfs(i)) return false;
    }

    return true;
};