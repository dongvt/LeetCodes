/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    
    let answer = []
    let getCountMap = (word) => {
        let count = new Array(26)
        count.fill(0)
        for(let ch of word) {
            let index = ch.charCodeAt() - 'a'.charCodeAt()
            count[index]++
        }
        return count
    }
    
   let w2max = getCountMap("")
   for(let w2 of words2) {
       let count = getCountMap(w2)
       for(let i = 0; i < 26; i++) {
           w2max[i] = Math.max(w2max[i], count[i])
       }
   }

    for(let w1 of words1) {
        let count = getCountMap(w1)
        /*assume w1 is universal */
        answer.push(w1)
        for(let i = 0; i < 26; i++) {
           /*check if w1 has characters of type i */
           if(w2max[i] <= count[i]) {
               continue
           } else {
               /*assume w1 is not universal as no of chars of type i in word2 is greater than w1*/
               answer.pop()
               break
           }
       }
    }
    return answer
}