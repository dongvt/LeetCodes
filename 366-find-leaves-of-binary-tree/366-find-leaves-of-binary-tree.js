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
var findLeaves = function(root) {
    const nodeList = [];
    const helper = (node) => {
        if(node === null) return -1;
        const idx = Math.max(helper(node.left),helper(node.right)) + 1;
        nodeList.push([node.val,idx]);
        return idx;
    }
    const res = new Array(helper(root) + 1).fill().map(row => []);
    for(const [val,idx] of nodeList) {
        res[idx].push(val);
    }
    
    return res;
};