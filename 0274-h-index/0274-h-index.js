/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a,b) => b-a);
    let res = 0, count = 0;
    for(let i = 0 ; i < citations.length; i++) {
        count++;
        res = Math.max(Math.min(count,citations[i]),res);
    }

    return res;
};