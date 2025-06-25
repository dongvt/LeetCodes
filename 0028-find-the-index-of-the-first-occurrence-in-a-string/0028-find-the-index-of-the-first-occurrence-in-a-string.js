/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const check = (i) => {
        for(let x = 0; x < needle.length; x++) {
            if(haystack[x+i] !== needle[x]) return false;
        }
        return true;
    }

    const length = needle.length;

    for(let i = 0 ; i < haystack.length; i++) {
        if(i + length > haystack.length) return -1;
        if(check(i)) return i;
    }

    return -1;
};