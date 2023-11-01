/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const check = (str) => {
        if(str1.length % str.length!== 0 || str2.length % str.length !== 0) return false;
        console.log(`check => ${str} => ${str1.replace(str,'')}`)
        return str1.replaceAll(str,'').length === 0 && str2.replaceAll(str,'').length === 0;
    }

    for(let i = Math.min(str1.length,str2.length); i > 0; i--) {
        const str = str1.slice(0,i);
        console.log(str)
        if(check(str)) return str;
    }
    return '';
};