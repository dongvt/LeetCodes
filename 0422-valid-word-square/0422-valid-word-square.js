/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function(words) {
    for (let i = 0 ; i < words.length; i++) {
        const rowWord = words[i];
        const colWord = [];
        for(const word of words)
            colWord.push(word.charAt(i));
        if(rowWord !== colWord.join('')) return false;
    }
    return true;
};