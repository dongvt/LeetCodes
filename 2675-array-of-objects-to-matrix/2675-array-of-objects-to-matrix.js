/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function(arr) {
    const res = [];
    const columns = new Set();
    
    arr = arr.map(it => flatt(it,'',{},columns));
    res.push([...columns].sort());
    
    const colIdx = res[0].reduce((acu,curr,idx) => ((acu[curr] = idx),acu),{});
    
    for(const ar of arr) {
        res.push(new Array(columns.size).fill(""));
        //console.log(ar)
        for(const [k,v] of Object.entries(ar)) {
            //console.log(k,'<== ==>',v)
            res.at(-1)[colIdx[k]] = v;
        }
    }
    
    return res;
};


const flatt = (it,path,obj,columns) => {
    if(it !== null && typeof it === 'object') {
        for(const [k,v] of Object.entries(it)) {
            flatt(v,path + (path ? '.' : '') + k, obj,columns);
        }
    } else {
        obj[path] = it;
        columns.add(path);
    }
    
    return obj;
}