/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let n = init;
    const res = {
        
        increment : () => {
            return ++n;
        },

        decrement : () => {
            return --n;
        },

        reset : () => {
            n = init;
            return init;
        }
    }

    return res;
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */