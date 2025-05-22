/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const visited = new Array(isConnected.length).fill(false);
    const dfs = (node) => {
        if(visited[node]) return;
        visited[node] = true;

        for(let i = 0; i < isConnected[node].length; i++) {
            if(isConnected[node][i] === 1)
                dfs(i);
        }
    }

    let res = 0;
    for(let i = 0 ; i < isConnected.length; i++) {
        if(!visited[i]) {
            res++;
            dfs(i);
        }
    }

    return res;
};