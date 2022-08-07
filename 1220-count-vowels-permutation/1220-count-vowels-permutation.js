/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    const memo = new Array(n + 1).fill().map(row => new Array(5).fill(-1));
    const cMap = new Map();
    cMap.set('a',0);
    cMap.set('e',1);
    cMap.set('i',2);
    cMap.set('o',3);
    cMap.set('u',4);
    
    const dp = (size,letter) => {
        //console.log(size,cMap.get(letter),n+1)
        if(memo[size][cMap.get(letter)] !== -1) return memo[size][cMap.get(letter)];
        if(size > n) {
            return 0;
        }
        if(size === n) {
            return 1;
        }
        
        let res = 0;
        switch(letter) {
            case 'a':
                res += dp(size + 1,'e') % 1000000007;
                break;
            case 'e':
                res += dp(size + 1,'a') % 1000000007;
                res += dp(size + 1,'i') % 1000000007;
                break;
            case 'i':
                res += dp(size + 1,'a') % 1000000007;
                res += dp(size + 1,'e') % 1000000007 ;
                res += dp(size + 1,'o') % 1000000007;
                res += dp(size + 1,'u') % 1000000007;
                break;
            case 'o':
                res += dp(size + 1,'i') % 1000000007;
                res += dp(size + 1,'u') % 1000000007;
                break;
            case 'u':
                res += dp(size + 1,'a') % 1000000007;
                break;
        }
        //console.log(res,size,cMap.get(letter))
        memo[size][cMap.get(letter)] = res;
        return res;
    }
    let res = 0;
    ['a','e','i','o','u'].forEach(letter => res = (res + dp(1,letter)) % 1000000007);
    
    return res;
};