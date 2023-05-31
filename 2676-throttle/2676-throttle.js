/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    
    
    let inProgress = null;
    let currArgs = null;
    
    const timeout = () => {
        if(currArgs === null) inProgress = null;
        else {
            fn(...currArgs);
            currArgs = null;
            inProgress = setTimeout(timeout,t)
        }
    }
    
  return function(...args) {
      if(inProgress !== null) currArgs = args;
      else {
          fn(...args);
          inProgress = setTimeout(timeout,t);
      }
    
  }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */