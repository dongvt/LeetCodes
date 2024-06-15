/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    const projects = [];
    const n = profits.length;
    for(let i = 0 ; i < n; i++) {
        projects.push({
            profit: profits[i],
            cap: capital[i]
        });
    }

    projects.sort((a,b) => a.cap - b.cap);

    const pq = new PriorityQueue({
        compare: (a,b) => {
            return b - a;
        }
    })
    let i = 0; //Important, you need keep going with i, since the elements should be added to the pq only once
    for(let x = 0; x < k; x++) {
        for(; i < n && w >= projects[i].cap;i++) {
            pq.enqueue(projects[i].profit);
        }
        if(pq.isEmpty()) break;
        //console.log(pq.front(),w)
        w += pq.dequeue();
    }

    return w;


};