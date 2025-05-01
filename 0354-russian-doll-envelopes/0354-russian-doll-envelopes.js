/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    const n = envelopes.length;
    envelopes.sort((a,b) => {
        if(a[0] === b[0]) return b[1] - a[1];
        return a[0] - b[0];
    })

    const heights = envelopes.map(h => h[1]);
    const lis = [];
    for(let h of heights) {
        let lo = 0, hi = lis.length;
        while(lo < hi) {
            const mid = (lo + hi) >>> 1;
            if(lis[mid] < h) lo = mid + 1;
            else hi = mid;
        }

        if( lo === lis.length ) lis.push(h);
        else lis[lo] = h;
    }

    return lis.length;
    
};