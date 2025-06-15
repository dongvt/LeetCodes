/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
var sortItems = function(n, m, group, beforeItems) {

    let groupId = m;
    for(let i = 0 ; i < n; i++) {
        if(group[i] === -1) group[i] = groupId++;
    }

    const itemGraph = Array.from({length:n},() => []);
    const groupGraph = Array.from({length:groupId }, () => []);

    for(let i = 0 ; i < n; i++) {
        for(const node of beforeItems[i]) {
            itemGraph[node].push(i);
            if(group[i] !== group[node]) {
                groupGraph[group[node]].push(group[i]);
            }
        }
    }

    const topoSortDFS = (graph) => {
        const n = graph.length;
        let hasCycle = false;
        const res = [];
        const visited = Array(n).fill(0); //0 not visited, 1 in current path, 2 visited
        const dfs = (node) => {
            // console.log(node,visited[node])
            if(visited[node] === 1) { //Found cycle
                hasCycle = true;
                return;
            }

            if(visited[node] === 2) return; //explored;
            visited[node] = 1; //Mark as visited in the current path
            for(const neighbor of graph[node]) {
                dfs(neighbor);
            }

            visited[node] = 2; //Done visited the current node
            res.push(node);
        }

        for(let i = 0 ; i < n; i++) {
            if(visited[i] === 0) dfs(i);
        }

        
        return hasCycle ? [] : res.reverse();
    }

    const itemOrder = topoSortDFS(itemGraph);
    const groupOrder = topoSortDFS(groupGraph);

    if(itemOrder.length === 0 || groupOrder.length === 0) return [];

    //Map the groups with all the content
    const groupToItem = new Map();
    for(const item of itemOrder) {
        if(!groupToItem.has(group[item])) {
            groupToItem.set(group[item],[]);
        }

        groupToItem.get(group[item]).push(item);
    }

    //construct the result
    const res = [];
    for(const group of groupOrder) {
        if(groupToItem.has(group)) res.push(...groupToItem.get(group));
    }

    return res;

};