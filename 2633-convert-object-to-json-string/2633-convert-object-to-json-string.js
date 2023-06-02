/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
    //null
    if(object === null) return 'null';
    
    //array
    if(Array.isArray(object)) {
        const items = object.map(it => jsonStringify(it));
        return `[${items.join(',')}]`;
    }
    
    //object
    if(typeof object === 'object') {
        const k = Object.keys(object);
        const pairs = k.map(key => `"${key}":${jsonStringify(object[key])}`);
        return `{${pairs.join(',')}}`;
    }
    
    //string
    if(typeof object === 'string') return `"${object}"`;
    
    
    return String(object);
};