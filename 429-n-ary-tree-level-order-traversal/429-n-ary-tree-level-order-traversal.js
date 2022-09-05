/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null) return [];
    const q = new Queue();
    q.enqueue(root);
    const res = [];
    while(!q.isEmpty()) {
        const l = q.size();
        const arr = [];
        for(let i = 0 ; i < l; i++) {
            const node = q.dequeue();
            arr.push(node.val);
            for(const child of node.children) {
                q.enqueue(child);
            }
        }
        res.push(arr);
    }
    return res;
};