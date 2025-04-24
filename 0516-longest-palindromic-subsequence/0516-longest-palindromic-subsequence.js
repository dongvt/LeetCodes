/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const r = s.split('').reverse().join('');
    const memo = new Array(r.length).fill().map(_ => new Array(r.length).fill(-1));
    const LCS = (i,j) => { //i => s, j => r
        if(i >= s.length) return 0;
        if(j >= r.length) return 0;
        if(memo[i][j] !== -1) return memo[i][j];
        if(s[i] === r[j]) {
            memo[i][j] = LCS(i + 1, j + 1) + 1;
        } else {
            memo[i][j] = Math.max(LCS(i, j + 1),LCS(i + 1, j));
        }
        return memo[i][j];
    }

    return LCS(0,0);
};