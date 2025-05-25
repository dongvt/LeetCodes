/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const neighbors = new Map(new Array(n).fill().map((_,i) => [i,[]]));
    // const conMatrix = new Array(n).fill().map(_ => new Array(n).fill(false));
    const visited = new Set();
    const con = new Set();


    for(const [source,target] of connections) {
        neighbors.get(source).push(target);
        neighbors.get(target).push(source);

        // conMatrix[source][target] = true;
        con.add(`${source},${target}`);
    }

    let res = 0;
    const dfs = (node) => {
        for(const nei of neighbors.get(node)) {
            if(visited.has(nei)) continue;
            visited.add(nei);
            if(!con.has(`${nei},${node}`)) res++;
            dfs(nei);
        }
    }


    visited.add(0);
    dfs(0);
    
    return res;

};