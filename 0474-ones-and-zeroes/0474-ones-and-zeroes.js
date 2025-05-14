/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    //Tranform strs into a 2d array
    //nStr[i] = [0s,1s]
    const nStrs = [];
    for(const s of strs) {
        let s1 = 0, s0 = 0;
        for(const c of s) {
            if(c === '0') s0++;
            else s1++;
        }
        nStrs.push([s0,s1]);
    }
    const memo = new Map();
    const dp = (i,j,idx) => { //i -> m (0s), j-> n (1s)

        if(idx >= nStrs.length) {
            return 0;
        }
        const key = `${i},${j},${idx}`
        if(memo.has(key)) return memo.get(key);

        const [ceros,ones] = nStrs[idx];
        let res = dp(i, j,idx + 1); //skip

        if(i + ceros <= m && j + ones <= n) {
            res = Math.max(res,dp(i + ceros,j + ones, idx + 1) + 1);
        }

        memo.set(key,res)
        return res;
    }

    return dp(0,0,0);

};