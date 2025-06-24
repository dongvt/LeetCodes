/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    //This one is complicated mano.
    // Look, read carefully:
    //For the first and last row, you need to pick each letter, it is easy
    //because you just need to add the zig zag right?
    //In the exmaple when there are 4 rows, you need to go down 3 charcters and then up another three
    //That means the increment is (numRows - 1) * 2
    //In the case of the inner rows, things change a little, you still need to add the same
    //increment characares since you are picking from the same columns
    // But how do you get those character that are going in the asending line?
    // Well, depends on the row, if you are in row 1 you still need to add every 6 characters, 
    // but also you need to add every 4, I mean, you add the one with the increment and the one in the middle
    // That means, the inner characters will give you a formula of (currentCharIdx + increment) - (2 * currentRow)

    //Arriving to those middle characters is the key
    const n = s.length;
    if(numRows === 1) return s;
    const increment = (numRows - 1) * 2;

    let res = [];
    for(let i = 0; i < numRows; i++) {
        for(let j = i; j < n; j += increment) {
            res.push(s.charAt(j));
            if(i > 0 && i < numRows - 1 && (j + increment) - (2 * i) < n) {
                res.push(s.charAt((j + increment) - (2 * i)));
            }
        }
    }

    return res.join('')
};