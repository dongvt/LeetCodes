/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const [source,target] = [0,graph.length-1];

    const res = [];
    const dfs = (node,path) => {
        if(node === target) {
            res.push([...path]);
            path = [];
            return;
        }

        for(const neighbor of graph[node]) {
            path.push(neighbor);
            dfs(neighbor,path)
            path.pop();
        }
    }

    dfs(source,[0]);

    return res;
};