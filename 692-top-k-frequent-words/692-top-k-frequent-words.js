/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const wordMap = {}
    words.map(word => {
        wordMap[word] = (wordMap[word] || 0) + 1
    })
    const wordArr = []
    for(let word of Object.keys(wordMap)) {
        wordArr.push([word, wordMap[word]])
    }
    wordArr.sort((a,b)=>b[1] === a[1] ? a[0].localeCompare(b[0]) : b[1]-a[1])  //O(nlogn)
    return wordArr.map((word) => word[0]).slice(0, k)
    
};