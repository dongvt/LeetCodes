/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
    const N = stations.length;
    const dp = new Array(N+1).fill(0);
    
    dp[0] = startFuel;
    
    for(let i = 0 ; i < N ; i++)
        for(let t = i; t >= 0 ; t--)
            if(dp[t] >=  stations[i][0])
                dp[t+1] = Math.max(dp[t+1],dp[t] + stations[i][1]);
    //console.log(dp)
    for(let i = 0 ; i <= N ; i++)
        if(dp[i] >= target) return i;
    
    return -1;
};