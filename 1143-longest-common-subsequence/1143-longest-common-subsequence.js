/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const memo = new Array(text1.length).fill().map(_ => new Array(text2.length).fill(-1));
    const dp = (i,j) => {
        if(i === text1.length || j === text2.length) return 0;
        if(memo[i][j] !== -1) return memo[i][j];
        if(text1[i] === text2[j]) memo[i][j] = dp(i+1,j+1) + 1;
        else memo[i][j] = Math.max(dp(i+1,j),dp(i,j+1));

        return memo[i][j];
    }

    return dp(0,0)
};