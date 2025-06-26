/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const n = height.length;
    let left = 0, right = n - 1;

    let res = 0;
    while(left < right) {
        const w = right - left;
        const h = Math.min(height[left],height[right]);
        res = Math.max(res, h * w);
        if(height[left] < height[right]) {
            left++;
        } else {
            right --;
        }
    }
    return res;
};