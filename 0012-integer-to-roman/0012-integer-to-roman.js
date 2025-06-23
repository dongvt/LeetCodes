/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const resMap = [
        [1,'I'],
        [4,'IV'],
        [5,'V'],
        [9,'IX'],
        [10,'X'],
        [40,'XL'],
        [50,'L'],
        [90,'XC'],
        [100,'C'],
        [400,'CD'],
        [500,'D'],
        [900,'CM'],
        [1000,'M']
    ]

    let res = [];

    while(num > 0) {
        const [sub,c] = resMap.at(-1);
        if(num - sub < 0) {
            resMap.pop();
            continue;
        }
        num -= sub;
        res.push(c);
    }

    return res.join('')
};