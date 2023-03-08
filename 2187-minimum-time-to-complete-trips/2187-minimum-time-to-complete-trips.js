/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    const getTotalTrips = (t) => {
        let sum = BigInt(0);
        for(const ti of time) {
            sum += ~~(t / BigInt(ti));
        }
        return sum;
    }
    
    let left = 1n, right = BigInt(Math.max(...time) * totalTrips);
    //console.log(right)
    while(left < right) {
        const mid = BigInt(~~((left + right) / 2n));
        if(getTotalTrips(mid) >= totalTrips) {
            right = mid;
        } else {
            left = mid + 1n;
        }
        
    }
    
    return parseInt(left);
};