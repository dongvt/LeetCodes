/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(['a','e','i','o','u']);
    const map = new Array(26).fill(0);
    
    const countVowels = () => {
        //console.log(map)
        return map.reduce((acc,curr) => curr + acc,0);
    }

    
    let res = 0;
    for(let i = 0 ; i < s.length ; i++) {
        
        if(vowels.has(s.charAt(i)))
            map[s.charCodeAt(i) - 97]++;
        if(i >= k) {
            if(vowels.has(s.charAt(i-k)))
                map[s.charCodeAt(i-k) - 97]--;
        }
        
        res = Math.max(res,countVowels());
        
        
    }
    
    return res;
    
    
    
};