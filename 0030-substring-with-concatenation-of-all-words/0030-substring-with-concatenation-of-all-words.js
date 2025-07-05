/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const L = words[0].length;
    const totalLength = words.length * L;

    const targetMap = new Map();

    for(const w of words) targetMap.set(w,(targetMap.get(w) | 0) + 1);

    const res = [];

    for(let offset = 0; offset < L; offset++) {
        let left = offset;
        let validWords = 0;

        const windowMap = new Map();

        for(let right = offset + L; right <= s.length; right += L) {
            const w = s.substring(right - L,right);
            // console.log(left,right, w,windowMap,targetMap)
            if(targetMap.has(w)) {
                windowMap.set(w,(windowMap.get(w) | 0) + 1);
                if(windowMap.get(w) <= targetMap.get(w)) {
                    validWords++
                } else { //Got too many ocurrences of the same word, shrink the window

                    while(targetMap.get(w) < windowMap.get(w)) {
                        const rw = s.substring(left,left + L);
                        windowMap.set(rw,(windowMap.get(rw) | 0) - 1);
                        if(windowMap.get(rw) < targetMap.get(rw)) {
                            validWords--;
                        }
                        left += L;
                    }
                }

                if(validWords === words.length) {//Completed permutation in string, now shrink from left and push
                    res.push(left)
                    validWords --;
                    const rw = s.substring(left,left + L);
                    windowMap.set(rw,(windowMap.get(rw) | 0) - 1);
                    left += L;
                }
            } else { //This part of the string doesn't have a valid permutation
                left = right; // Let's start from the next word
                windowMap.clear();
                validWords = 0;
            }
        }
    }

    return res;
};