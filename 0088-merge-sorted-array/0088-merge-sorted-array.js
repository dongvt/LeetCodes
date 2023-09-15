/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let x = m-1, y = n-1, z = m+n-1;
    while(x >= 0 || y >= 0) {
        if(x < 0) {
            nums1[z--] = nums2[y--];
            continue;
        }
        if(y < 0) {
            nums1[z--] = nums1[x--];
            continue;
        }
        if(nums1[x] > nums2[y]) {
            //console.log(nums1[x] ,nums2[y])
            nums1[z--] = nums1[x--];
        } else {
            nums1[z--] = nums2[y--];
        }
    }
    return nums1;
};