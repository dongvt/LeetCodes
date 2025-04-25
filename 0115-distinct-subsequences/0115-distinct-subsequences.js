/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const memo = new Array(s.length).fill().map(_ => new Array(t.length).fill(-1));
    const dp = (i,j) => {
        if(j === t.length) return 1;
        if(i >= s.length) return 0;
        if(memo[i][j] !== -1) return memo[i][j];
        if(s[i] === t[j]) {
            memo[i][j] = dp(i+1,j+1) + dp(i+1,j);
        } else {
            memo[i][j] = dp(i+1,j);
        } 
        
        return memo[i][j];
        
    }
    return dp(0,0)
};