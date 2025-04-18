/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    //The trick here is to create a map for all the numbers from 1 to 10000
    //The constraint is key here, since it is guarantied that the input
    //won't have a number greater than 1000 and nums won't be bigger than 20000

    const sums = new Array(10001).fill(0);
    for(const n of nums) {
        sums[n] += n;
    }

    //Then just use the house robber over sums
    const dp = new Array(sums.length);
    dp[0] = sums[0];
    dp[1] = Math.max(sums[0],sums[1]);

    for(let i = 2; i < sums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + sums[i]);
    }
    return dp.at(-1);

}