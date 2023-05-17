/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
    
    return new Promise((res,rej) => {
        let inProgress = 0;
        let idx = 0;

        const helper = async () => {
            if(idx === functions.length){
                if(inProgress === 0) res();
                return;
            }
            
            while(inProgress < n && idx < functions.length) {
                inProgress++;
                const prom = functions[idx++]();
                prom.then(() => {
                    inProgress--;
                    helper();
                })
            }
        }
        
        helper();
    })
    
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */