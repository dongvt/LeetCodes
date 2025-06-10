/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    const parent = Array(26).fill().map((_,i) => i);
    // a === 97;

    //This is not just find, this also compress the path
    const find = (x) => {
        if(parent[x] !== x) parent[x] = find(parent[x]);
        return parent[x];
    } 

    const union = (x,y) => {
        const px = find(x);
        const py = find(y);

        if(px !== py) {
            if(px < py) parent[py] = px;
            else parent[px] = py;
        }
    }

    for(let i = 0 ; i < s1.length ; i++) {
        const a = s1.charCodeAt(i) - 97;
        const b = s2.charCodeAt(i) - 97;
        union(a,b);
    }

    const res = [];
    for(let i = 0 ; i < baseStr.length ; i++) {
        const c = find(baseStr.charCodeAt(i) - 97);
        res.push(String.fromCharCode(c + 97));
    }

    return res.join('');

};