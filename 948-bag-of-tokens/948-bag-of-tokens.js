/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    let score = 0 , max = 0;
    let i = 0 , j = tokens.length - 1;
    tokens.sort((a,b) => a-b);
    
    while(i <= j) {
        
        if(power >= tokens[i]) {
            score++;
            power -= tokens[i];
            i++;
        } else if (score >= 1) {
            score--;
            power += tokens[j];
            j--;
        } else break;
        
        max = Math.max(max,score);
    }
    
    return max;
};