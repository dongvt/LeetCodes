/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (n, prerequisites) {
    const graph = Array.from({ length: n }, () => []);
    const inDegree = Array(n).fill(0);

    for (const [a, b] of prerequisites) {
        inDegree[a]++;
        graph[b].push(a);
    }

    //Use BFS to build the response array, enqueue all indegree 0
    //Use inDegree to keep track of loops (if indegree for a node is 0 then we have a loop)
    //Each time we dequeue, we push that node into the response
    const q = new Queue();
    const visited = Array(n).fill(false);
    const res = [];
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) { 
            q.enqueue(i); 
        }
    }

    while (q.size() > 0) {
        const node = q.dequeue();
        res.push(node);

        for (const neighbor of graph[node]) {
            inDegree[neighbor]--;
            if(inDegree[neighbor] === 0) q.enqueue(neighbor)
        }
    }

    if(res.length !== n) return [];

    return res;



};