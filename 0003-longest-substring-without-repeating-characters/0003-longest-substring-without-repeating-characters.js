/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0, res = 0;

    if(s.length <= 1) return s.length;

    const counter = new Set(); //char - 97
    for(let right = 0; right < s.length; right++) {
        const c = s.charCodeAt(right) - 97;
        while(counter.has(c) && left <= right) {
            counter.delete(s.charCodeAt(left) - 97);
            left++;
        }
        res = Math.max(res, right - left + 1);
        counter.add(c);
    }



    return res;


};