/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.length === 0) return [newInterval];
    const res = [];
    let [nStart,nEnd] = newInterval;
    let flag = false;
    for(let i = 0 ; i < intervals.length; i++) {
        const [cStart,cEnd] = intervals[i];
        //if overlaps, merge
        if((nStart >= cStart && nStart <= cEnd) ||
        (nEnd >= cStart && nEnd <= cEnd) ||
        (cStart >= nStart && cStart <= nEnd) ||
        (cEnd >= nStart && cEnd <= nEnd)) {
            // console.log(cStart,cEnd,nStart,nEnd);
            nStart = Math.min(nStart,cStart);
            nEnd = Math.max(nEnd,cEnd);
            continue;
        }
        //if newer interval is smaller than current one, then push
        if(nEnd < cStart && !flag) {
            flag = true;
            res.push([nStart,nEnd])
        }
        res.push(intervals[i])

    }

    if(!flag) res.push([nStart,nEnd])
    return res;

    return res;
};