/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const memo = new Array(word1.length).fill().map(_ => new Array(word2.length).fill(-1))
    const dp = (i,j) => {
        if(i >= word1.length) return word2.length - j; 
        if(j >= word2.length) return word1.length - i;
        if(memo[i][j] !== -1) return memo[i][j];
        if(word1.charAt(i) === word2.charAt(j)) memo[i][j] = dp(i+1,j+1);
        else memo[i][j] = Math.min(dp(i + 1,j),dp(i,j+1),dp(i+1,j+1)) + 1;

        return memo[i][j];
    }

    return dp(0,0)

};