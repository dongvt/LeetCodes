/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const trustMe = Array.from({length:n + 1},() => []);
    const trustYou = Array.from({length:n + 1},() => []);
    // console.log(people)
    for(const [a,b] of trust) {
        trustMe[b].push(a);
        trustYou[a].push(b);
    }
    // console.log(trustMe,trustYou)
    for(let i = 1 ; i <= n ;i++) {
        if(trustMe[i].length === n-1 && trustYou[i].length === 0) return i;
    }

    return -1;
};