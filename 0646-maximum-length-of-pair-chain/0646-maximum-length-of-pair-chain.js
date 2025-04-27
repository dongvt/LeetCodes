/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a,b) => {
        if(a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
        
    } );

    const memo = new Array(pairs.length).fill(-1);
    const dp = (i) => {
        if(i === pairs.length - 1) return 1;
        if(memo[i] !== -1) return memo[i];
        let res = 1;
        for(let j = i + 1; j < pairs.length; j++) {
            if(i === j) continue;
            if(pairs[i][1] < pairs[j][0]) {
                res = Math.max(dp(j) + 1, res);
            }
        } 
        memo[i] = res;
        return res;
    }
    let res = 0;
    for(let i = 0; i < pairs.length; i++) {
        res = Math.max(res,dp(i))
    }
    return res;
};