/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = new Map([
        [']','['],
        [')','('],
        ['}','{'],
    ])
    const stack = [];
    for(const p of s) {
        if(!map.has(p)) stack.push(p);
        else if(stack.length === 0) return false;
        else {
            if(stack.at(-1) === map.get(p)) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};