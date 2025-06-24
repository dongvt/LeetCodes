/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //Get the prefix from the firs word, and check for all the words
    const check = (pre,word) => {
        for(let i = 0 ; i < pre.length; i++) {
            if(pre.charAt(i) !== word.charAt(i)) return false;
        }
        return true;
    }
    let pre = strs[0];
    let l =  pre.length;
    while(pre.length > 0) {
        let flag = true;
        for(let i = 1; i < strs.length; i++) {
            const word = strs[i];
            if(!check(pre,word)) {
                flag = false;
                break;
            }
        }

        if(flag) return pre;
        pre = pre.substring(0,--l);
    }

    return pre;
};