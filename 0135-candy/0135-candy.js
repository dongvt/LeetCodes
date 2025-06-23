/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    //Go from left to right checking ratings, increment by one the candy if needed
    const n = ratings.length;
    const candies = Array(n).fill(1); //All kids get at least one candy

    for(let i = 1; i < n; i++) {
        if(ratings[i] > ratings[i-1]) {//Need to give more candy than left one
            candies[i]++;
        }
    }

    for(let i = n - 2; i >= 0; i--) {
        if(ratings[i] > ratings[i+1]) {//Need to give more candy than left one
            //In this case we have given some candies, so we need to check if really need to give more candies
            candies[i] = Math.max(candies[i],candies[i+1] + 1);
        }
    }
    // console.log(candies)
    return candies.reduce((acu,cur) => acu + cur,0);
};