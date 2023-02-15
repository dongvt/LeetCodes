/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
    const wordMap = new Map(); //first to two
    for(const pair of similarPairs) {
        if(wordMap.has(pair[0])) {
            wordMap.get(pair[0]).add(pair[1]);
        } else {
            wordMap.set(pair[0],new Set([pair[1]]));
        }
        
        if(wordMap.has(pair[1])) {
            wordMap.get(pair[1]).add(pair[0]);
        } else {
            wordMap.set(pair[1],new Set([pair[0]]));
        }
        
    }
    if(sentence1.length !== sentence2.length) return false;
    const n = sentence1.length;
    
    for(let i = 0; i < n; i++) {
        if(sentence1[i] !== sentence2[i]) {
            
            if(!wordMap.has(sentence1[i]) ) return false;
            
            if(!wordMap.get(sentence1[i]).has(sentence2[i]))return false;
            
        }
    }

    return true;
};