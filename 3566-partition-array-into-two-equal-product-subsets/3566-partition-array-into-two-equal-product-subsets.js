/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var checkEqualPartitions = function (nums, target) {
    //Since there are two subsets the product of the two subsets is target * target
    //If the total_product !== target * target then there is no way to do equal partition
    //If total_product === target * target then just need to find a single subset === target

    let product = 1;
    const n = nums.length;
    const expectedProduct = target * target;
    for (let i = 0; i < n; i++) {
        product *= nums[i];
    }

    if (product !== expectedProduct) return false;

    const dp = (i, prod) => {
        // console.log(i,prod)
        if (i >= n || prod > target) return false;
        if (prod === target) return true;

        const take = dp(i + 1, prod * nums[i + 1]);
        const notTake = dp(i + 1, prod);

        return take || notTake;
    }

    return dp(0,nums[0]);
};