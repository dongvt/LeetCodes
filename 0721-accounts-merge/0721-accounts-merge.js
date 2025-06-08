class DSU {
    constructor() {
        this.parent = {};
    }

    find(x) {
        if(!(x in this.parent)) this.parent[x] = x;
        if(this.parent[x] !== x) {
            this.parent[x] =  this.find(this.parent[x]);
        }

        return this.parent[x];
    }

    union(x,y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if(rootX !== rootY) {
            this.parent[rootX] = rootY;
        }
    }
}


/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    const uf = new DSU();

    const mailToAccount = new Map();

    for(const [name,...emails] of accounts) {
        for(const email of emails) {
            mailToAccount.set(email,name);
            uf.find(email);
        }
        for(let i = 1; i < emails.length; i++) {
            uf.union(emails[0],emails[i]);
        }
    }

    
    const rootToEmails = new Map();
    for(const email of mailToAccount.keys()) {
        const root = uf.find(email);
        if(!rootToEmails.has(root)) {
            rootToEmails.set(root,[]);
        }
        rootToEmails.get(root).push(email);
    }

    let res = [];
    for(const [root,emails] of rootToEmails.entries()) {
        const name = mailToAccount.get(root);
        res.push([name,...emails.sort()]);
    }

    return res;
};