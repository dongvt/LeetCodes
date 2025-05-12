/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const memo = new Array(n + 1).fill(-1);
    const dp = (num) => {
        if(num > n) return 0;
        if(num === n) return 1;
        if(memo[num] !== -1) return memo[num];
        let res = Infinity;
        for(let i = 1; i * i <= n;i++){
            const checkPath = dp(num + (i * i));
            if(checkPath >= 1) {
                res = Math.min(res,checkPath + 1);
            }
        }
        memo[num] = res;
        return res;
    }
    return dp(0) - 1;
};