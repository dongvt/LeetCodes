/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    const memo = new Array(questions.length).fill(-1);
    const dp = (i) => {
        if(i >= questions.length) return 0;
        if(memo[i] !== -1) return memo[i];
        const [points,brainpower] =  questions[i];
        memo[i] = Math.max(dp(i + 1), dp(i + brainpower + 1) + points);
        return memo[i];
    }

    return dp(0);
};