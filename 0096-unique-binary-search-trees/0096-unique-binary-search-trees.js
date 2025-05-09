/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const dp = new Array(n + 1).fill(0); //since we need to know the number up to n
    dp[0] = 1; //The empty tree
    dp[1] = 1; //A single node

    for(let i = 2; i <= n; i++) {
        for(let root = 1; root <= i; root++) {
            dp[i] += dp[root - 1] * dp[i - root];
        }
    }
    //console.log(dp)
    return dp[n];
};