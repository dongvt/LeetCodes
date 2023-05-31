/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    
    if(obj === null || obj === undefined || typeof classFunction !== 'function') return false;
    
    let currentProto = Object.getPrototypeOf(obj);
    while(currentProto) {
        if(currentProto === classFunction.prototype) return true;
        currentProto = Object.getPrototypeOf(currentProto);
    }
    
    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */