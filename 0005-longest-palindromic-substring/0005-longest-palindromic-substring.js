/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const palindromeSize = (l,r) => {

        while(s.charAt(l) === s.charAt(r) && l >= 0 && r < s.length) {
            l--;
            r++;
        }
        l++;r--;
        // console.log([l,r])
        return [r - l + 1,l];
    }
    let [size,idx] = [0,0]; 
    for(let i = 0 ; i < s.length; i++) {
        const oneMid = palindromeSize(i,i);
        const twoMid = palindromeSize(i,i+1)
        
        if(oneMid[0] > size) {
            // console.log(`1`,oneMid,i)
            size = oneMid[0];
            idx = oneMid[1];
        }
        if(twoMid[0] > size) {
            // console.log(`2`,twoMid,i)
            size = twoMid[0];
            idx = twoMid[1];
        }
    }
    return s.substring(idx,idx + size);
};