/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
    const originalArgs =  fn.length;
    let finalArgs = [];
    return function curried(...args) {
        
        finalArgs = [...finalArgs,...args]
        if(finalArgs.length >= originalArgs) {
            return fn(...finalArgs);
        } 
        
        return (...newArgs) => {
            return curried(...newArgs);
        }
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
