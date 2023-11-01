/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = [];
    const current = s.split('');
    const vowelSet = new Set(['a','e','i','o','u','A','E','I','O','U']);
    //fill vowels
    for(let c of s) {
        if(vowelSet.has(c)) {
            vowels.push(c);
        }
    }
    //replace vowels
    for(let i = 0; i <s.length ;i++) {
        //console.log(current[i])
        if(vowelSet.has(current[i])) {
            current[i] = vowels.pop();
        }
    }

    return current.join('');
};