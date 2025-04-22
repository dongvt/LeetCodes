/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const lcs = (t1,t2) => {
        const memo = new Array(t1.length).fill().map(_ => new Array(t2.length).fill(-1))
        const dp = (i,j) => {
            if(i >= t1.length || j >= t2.length) return 0;
            if(memo[i][j] !== -1) return memo[i][j];
            if(t1.charAt(i) === t2.charAt(j)) {
                memo[i][j] = dp(i+1,j+1) + 1;
            } else {
                memo[i][j] = Math.max(dp(i+1,j),dp(i,j+1));
            }
            return memo[i][j];
        }

        return dp(0,0);
    }

    return lcs(s,s.split('').reverse().join(''))
};