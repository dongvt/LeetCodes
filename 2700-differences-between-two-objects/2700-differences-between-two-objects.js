/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(o1, o2) {
    if(o1 === o2) return {};
    
    if(o1 === null || o2 === null) return [o1,o2];
    
    
    if(typeof o1 !== 'object' || typeof o2 !== 'object') return [o1,o2];;
    
    if(Array.isArray(o1) !== Array.isArray(o2)) return [o1,o2]; 
        
    const res = {};
    for(const key in o1) {
        if(key in o2) {
            const difference = objDiff(o1[key],o2[key]);
            if(Object.keys(difference).length > 0) {
                res[key] = difference;
            }
        }
    }
    
    return res;
};