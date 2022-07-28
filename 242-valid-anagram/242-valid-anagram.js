/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
//     if(s.length !== t.length) return false;
//     const charArray = new Array(26).fill(0);
//     for(let i = 0 ; i < s.length ; i++) {
//         charArray[s.charCodeAt(i) - 97]++;
//         charArray[t.charCodeAt(i) - 97]--;
//     }
    
//     for(const n of charArray){
//         if(n !== 0) return false;
//     }
    
    return s.split('').sort().join('') === t.split('').sort().join('');
    
};