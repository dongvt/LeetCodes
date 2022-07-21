/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const map = {};
    const idxSet = new Set();
    for(const c of secret) {
        if(c in map) map[c]++;
        else map[c] = 1;
    }

    const res = [0,'A',0,'B'];
    for(let i = 0 ; i < secret.length ; i++) {
        if(secret[i] === guess[i]) {
            res[0]++;
            map[secret[i]]--;
            idxSet.add(i);   
        }
    }
    for(let i = 0 ; i < secret.length ; i++) {
        if(guess[i] in map && map[guess[i]] > 0 && !idxSet.has(i)) {
            map[guess[i]]--;
            res[2]++;
        }
    }
    
    return res.join('');
};