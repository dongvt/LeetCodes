/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    if(root === null) return [];
    const map = new Map();
    
    const q = new Queue();
    
    q.enqueue([root,0]);
    while(!q.isEmpty()) {
        const [node,idx] = q.dequeue();
        
        if(map.has(idx)) map.get(idx).push(node.val);
        else map.set(idx,[node.val]);
        
        if(node.left !== null) q.enqueue([node.left,idx - 1]);
        if(node.right !== null) q.enqueue([node.right,idx + 1]);
    }
    
    //Since all the data is in the map, we just need to format it.
    return [...map].sort((a,b) => a[0] - b[0]).map(item => item[1]);
};