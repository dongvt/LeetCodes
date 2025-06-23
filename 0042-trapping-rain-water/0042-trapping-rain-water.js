/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    //Two pointer approach
    //Very simple, start wide, and then shrink
    const n = height.length;
    let left = 0, right = n - 1;
    let maxLeft = 0, maxRight = 0;
    let res = 0;
    while(left < right) {
        //If left elevation is less than the right one, update
        if(height[left] < height[right]) {
            if(maxLeft < height[left]) {
                maxLeft = height[left];
            } else { //Hey we have trapped water
                res += maxLeft - height[left];
            }
            
            left++;
        } else {
            if(maxRight < height[right]) {
                maxRight = height[right];
            } else { //Hey we are getting trapping water here
                res += maxRight - height[right];
            }
            right--;
        }
        // console.log(res,left,right)
    }
    return res;
};