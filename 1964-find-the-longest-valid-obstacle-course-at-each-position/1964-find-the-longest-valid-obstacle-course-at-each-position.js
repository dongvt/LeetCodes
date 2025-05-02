/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function(obstacles) {
    const n = obstacles.length;
    const tails = [];

    const res = new Array(n);

    for(let i = 0 ; i < n ; i++) {
        const h = obstacles[i];

        let lo = 0, hi = tails.length;

        while(lo < hi) {
            const mid = (lo + hi) >>> 1 //divide by 2 with binary shift
            if(tails[mid] > h) hi = mid;
            else lo = mid + 1;
        }

        if(lo === tails.length) {
            tails.push(h);
        } else {
            tails[lo] = h;
        }

        res[i] = lo + 1;
    }

    return res;
};