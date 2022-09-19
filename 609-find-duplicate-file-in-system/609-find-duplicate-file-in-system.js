/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
	
    const map = new Map();
    for(const path of paths) {
        const pArr = path.split(' ');
        const root = pArr[0];
        for(let i = 1; i < pArr.length ; i++) {
            const content = pArr[i].substring(pArr[i].indexOf('(') + 1,pArr[i].indexOf(')')); 
            const file = `${root}/${pArr[i].substring(0,pArr[i].indexOf('('))}`;
            if(map.has(content)) map.get(content).push(file);
            else map.set(content,[file])
        }
    }
    
    const res = [];
    for(const [key,value] of map) {
        if(value.length > 1) res.push(value);
    }
    
    return res;
};