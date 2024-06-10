/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const expected = [...heights];
    expected.sort((a,b) => a-b);

    let res = 0;
    for(let i =0; i < expected.length;i++) {
        if(expected[i] !== heights[i]) res++
    }

    return res;
};