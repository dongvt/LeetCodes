/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
    
    //Create map (number,[adjacent1,adjacent2])
    const map = new Map();
    for(const pair of adjacentPairs) {
        const [p1,p2] = pair;
        if(map.has(p1)) {
            map.get(p1).push(p2);
        } else {
            map.set(p1,[p2]);
        }

        if(map.has(p2)) {
            map.get(p2).push(p1);
        } else {
            map.set(p2,[p1]);
        }
    }

    //get one of the borders
    let current = -Infinity;
    for(const [k,v] of map) {
        if(v.length === 1) {
            current = k;
            break;
        }
    }

    //construct res
    const res = [];
    const added = new Set([current]);
    res.push(current);

    while(added.size <= adjacentPairs.length) {
        //console.log(map,current)
        const next = map.get(current);
        for(const n of next) {
            if(!added.has(n)) {
                res.push(n);
                added.add(n);
                current = n;
            }
        }
    }

    return res;

};