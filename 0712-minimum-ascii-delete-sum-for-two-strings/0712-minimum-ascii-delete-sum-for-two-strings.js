/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    const memo = new Array(s1.length).fill().map(_ => new Array(s2.length).fill(-1));
    const dp = (i,j) => { // i => s1 , j => s2
        if(i >= s1.length && j >= s2.length) return 0;
        if(i >= s1.length ) {
            let sum = 0;
            for(let x = j; x < s2.length; x++) {
                sum += s2.charCodeAt(x);
            }
            return sum;
        }
        if(j >= s2.length ) {
            let sum = 0;
            for(let x = i; x < s1.length; x++) {
                sum += s1.charCodeAt(x);
            }
            return sum;
        }

        if(memo[i][j] !== -1) return memo[i][j];
        if(s1[i] === s2[j]) {
            memo[i][j] = dp(i + 1, j + 1);
        } else {
            memo[i][j] = Math.min(dp(i + 1,j) + s1.charCodeAt(i),dp(i,j + 1) + s2.charCodeAt(j))
        }

        return memo[i][j];
    }

    return dp(0,0);
};