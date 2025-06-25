/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    //Last line left justified
    //If there is odd distribution of space, take from the last one
    const n = words.length;
    let i = 0;
    const res = [];
    while(i < n) {
        //Collect the words until there is no place for them
        const line = [];
        let charCount = 0;
        while(true) {
            if(i >= n || words[i].length + charCount + line.length > maxWidth) break;
            charCount += words[i].length;
            line.push(words[i]);
            i++;
        }
        // console.log(line,i)
        if(i === n || line.length === 1)  {
            const str = line.join(' ')
            res.push(`${str}${' '.repeat(maxWidth - str.length)}`)
        } else {
            const totalSpaces = maxWidth - charCount;
            const gaps = line.length - 1;
            const evenSpace = Math.floor(totalSpaces / gaps);
            const extra = totalSpaces % gaps;

            const newLine = [];
            for(let j = 0 ; j < line.length - 1; j++) {
                newLine.push(`${line[j]}${' '.repeat(evenSpace + (j < extra ? 1 : 0))}`);
            }
            newLine.push(line.at(-1));
            
            
            res.push(newLine.join(''))
        }
    }

    return res;
};