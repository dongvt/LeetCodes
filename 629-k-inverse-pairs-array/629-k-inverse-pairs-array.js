/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function(n, k) {
    const memo = new Array(n+1).fill().map(row => new Array(k+1).fill(Infinity));
    
    const dp = (i,j) => { // i -> n, j -> k
        if(i === 0) return 0;
        if(j === 0) return 1;

        if(memo[i][j] !== Infinity) return memo[i][j];
        let inv = 0;
        for(let idx = 0 ; idx <= Math.min(j,i-1) ; idx++) {
            inv = (inv + dp(i-1,j-idx)) % 1000000007;
        }

        memo[i][j] = inv;
        return inv;
    }
    
    return dp(n,k);
    
};