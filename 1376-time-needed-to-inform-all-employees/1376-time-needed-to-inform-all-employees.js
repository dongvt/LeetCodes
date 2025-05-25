/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    const managerMap = new Map();

    for(let i = 0 ; i < n ; i++) {
        if(managerMap.has(manager[i])) {
            managerMap.get(manager[i]).push(i)
        } else {
            managerMap.set(manager[i],[i]);
        }
    }

    //BFS
    const q = new Queue();
    q.enqueue([headID,informTime[headID]]) //Node, current time

    let res = 0;
    while(q.size() > 0) {
        const [node,currentTime] = q.dequeue();
        res = Math.max(res,currentTime);
        // console.log(node,currentTime)
        if(!managerMap.has(node)) continue;
        for(const nei of managerMap.get(node)) {
            q.enqueue([nei,currentTime + informTime[nei]]);
        }
    }

    return res;
};