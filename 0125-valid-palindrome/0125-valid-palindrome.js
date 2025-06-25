/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //Ignore the non letters, convert the mayus into minus
    const check = (n) => {
        //65 - 90 Mayus
        if(n >= 65 && n <= 90) return n + 32; //Convert to min
        //97 - 122 Min
        if(n >= 97 && n <= 122 || n >= 48 && n <= 57) return n;
        
        return -1;
    }

    let right = s.length - 1, left = 0;
    while(left <= right) {
        
        while(check(s.charCodeAt(left)) === -1 && left < s.length) {
            left++;
        }
        while(check(s.charCodeAt(right)) === -1 && right >= 0) {
            right--;
        }
        console.log(left,right)
        if(check(s.charCodeAt(left)) !== check(s.charCodeAt(right))) return false;
        right--; left++;
    }

    return true;
};