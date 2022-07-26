/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let res = null;
    const helper = (node) => {
        if(node === null) return false;
        const left = helper(node.left) ? 1 : 0;
        const right = helper(node.right) ? 1 : 0;
        const mid = (node === q || node === p) ? 1 : 0;
        const sum = left + right + mid;
        if(sum >= 2) res = node;
        return (sum > 0);
    }
    helper(root);
    return res;
};