/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const generateId = (word) => {
        const counter = Array(26).fill(0);
        for(let i = 0 ; i < word.length; i++) {
            counter[word.charCodeAt(i) - 97]++;
        }
        return counter.join();
    }

    const wordMap = new Map();
    for(const s of strs) {
        const sId = generateId(s);
        if(!wordMap.has(sId)) wordMap.set(sId,[]);
        wordMap.get(sId).push(s);
    }

    return [...wordMap.values()];

};