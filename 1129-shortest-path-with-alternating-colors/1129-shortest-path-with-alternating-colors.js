/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    
    const redMap = new Map();
    const blueMap = new Map();

    for(const [source,target] of redEdges) {
        if(!redMap.has(source))
            redMap.set(source,[target])
        else
            redMap.get(source).push(target)
    }

    for(const [source,target] of blueEdges) {
        if(!blueMap.has(source))
            blueMap.set(source,[target])
        else
            blueMap.get(source).push(target)
    }

    //Color => true = red, false = blue
    const dfs = (node, target, color, visited) => {
        if(visited[node][color]) return Infinity;
        if(node === target) return 0;
        visited[node][color] = true;

        let redPath = Infinity, bluePath = Infinity;
        //Blue
        if(!color) {
            if(!blueMap.has(node)) return Infinity;
            for(const targets of blueMap.get(node)) {
                const res = dfs(targets,target,!color,visited)
                bluePath = Math.min(bluePath,res + 1);
            }
        } else {//Red
            if(!redMap.has(node)) return Infinity;
            for(const targets of redMap.get(node)) {
                const res = dfs(targets,target,!color,visited)
                redPath = Math.min(redPath,res + 1);
            }
        }
        

        visited[node][color] = false;
        return Math.min(redPath,bluePath);
    }


    let res = [];
    for(let i = 0 ; i < n ;i++) {
        const visitedBlue = new Array(n).fill().map(_ => new Array(2).fill(false))
        const visitedRed = new Array(n).fill().map(_ => new Array(2).fill(false))
        const ans = Math.min(dfs(0,i,false,visitedBlue),dfs(0,i,true,visitedRed));
        res.push(ans === Infinity ? -1 : ans);
    }
    return res;
};