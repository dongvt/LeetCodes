class DSU {
    constructor() {
        this.parent = {};
    }

    // Find the root parent of x with path compression
    find(x) {
        if (!(x in this.parent)) {
            this.parent[x] = x;
        }
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    // Union the sets of x and y
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX !== rootY) {
            this.parent[rootX] = rootY;
        }
    }

    // Helper: return full parent map
    getParents() {
        return this.parent;
    }
}

/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    const unequal = [];
    const uf = new DSU();
    for(const eq of equations) {
        const [f,e,_,s] = eq.split(''); //First letter, equal or different,(always equal),second letter
        if(e === '!') {
            unequal.push([f,s]);
        } else {
            uf.union(f,s);
        }
    }

    for(const [a,b] of unequal) {
        if(uf.find(a) === uf.find(b)) return false;
    }

    return true;
};