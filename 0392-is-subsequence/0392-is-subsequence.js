/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    //You know you can find a subsequence just using napsack, but hey
    //Use two pointers, each time there is a match increment the s pointer
    let i = 0;
    if(s === t) return true;
    for(let j = 0; j < t.length ; j++) {
        if(s[i] === t[j]) i++;
        if(i === s.length) return true;
    }

    return false;
};