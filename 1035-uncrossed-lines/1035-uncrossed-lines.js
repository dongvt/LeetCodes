/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    const memo = new Array(nums1.length).fill().map(_ => new Array(nums2.length).fill(-1));
    
    const dp = (i,j) => {
        if(i >= nums1.length || j >= nums2.length) return 0;
        if(memo[i][j] !== -1) return memo[i][j];
        if(nums1[i] === nums2[j]) memo[i][j] = dp(i+1,j+1) + 1;
        else memo[i][j] = Math.max(dp(i+1,j),dp(i,j+1));

        return memo[i][j];
    }

    return dp(0,0)


};