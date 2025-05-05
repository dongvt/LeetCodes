/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    const sr = s.split('').reverse().join('');
    const memo = new Array(s.length).fill().map(_ => new Array(s.length).fill(-1));
    const dp = (i,j) => {
        if(i >= s.length || j >= sr.length) {
            return 0;
        }
        if(memo[i][j] !== -1) return memo[i][j];
        if(sr[j] === s[i]) memo[i][j] = dp(i+1,j+1) + 1;
        else memo[i][j] = Math.max(dp(i+1,j),dp(i,j+1));

        return memo[i][j];
    }

    return s.length - dp(0,0)
};