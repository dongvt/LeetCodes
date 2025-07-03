/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    //Well, you will probably forget this, so maybe you might need to re do it
    //The idea is to rotate the image by change the four points
    //Sabe the top left in a temp var, and then go oposite replacing them
    //Since it is a square, you can just declare left and right, and get top and bot from them
    //Then traverse the matrix as many times as differentce between left and right (because it is also the same difference between top and bot)
    //Use the iterator (i) to move the pointer for each pixel:
    // Top Left needs to move right
    // Top Right needs to move bot
    // Bot Right needs to move left
    // Bot Left needs to move top

    //Hopefully you will remember this.. Let's get the best job better bud
    
    let left = 0, right = matrix.length - 1;

    while(left < right) {
        for(let i = 0 ; i < right - left; i++) {
            const top = left;
            const bot = right;

            const tmp = matrix[top][left + i];

            matrix[top][left + i] = matrix[bot - i][left];
            matrix[bot - i][left] = matrix[bot][right - i];
            matrix[bot][right - i] = matrix[top + i][right];
            matrix[top + i][right] = tmp;
        }
        left++;
        right--;
    }
};