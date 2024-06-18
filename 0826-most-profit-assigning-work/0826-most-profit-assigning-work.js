/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    const projects = [];
    for(let i = 0 ; i < profit.length; i++) {
        projects.push({
            difficulty: difficulty[i],
            profit: profit[i]
        })
    }

    projects.sort((a,b) => a.difficulty - b.difficulty );
    let sum = 0;
    for(let i = 0 ; i < worker.length; i++ ) {
        const w = worker[i];
        let left = 0, right = projects.length - 1;
        while(left <= right) {
            let mid = ~~((right + left) / 2);
            //console.log(projects,mid)
            if(w >= projects[mid].difficulty) {
                left++;
            } else {
                right--;
            }
        }
        let max = -Infinity;
        if(left >= projects.length || projects[left].difficulty !== w) left--;
        //console.log(left,w)
        for(let x = 0; x <= left;x++) {
            max = Math.max(max,projects[x].profit);
        }
        sum += Math.max(max,0);
    }
    return sum;

};