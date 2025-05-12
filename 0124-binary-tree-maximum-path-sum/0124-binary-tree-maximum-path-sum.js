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
 * @return {number}
 */
var maxPathSum = function(root) {
    let res = -Infinity
    const dfs = (node) => {
        if(node === null) return -Infinity;
        const left = dfs(node.left);
        const right = dfs(node.right);
        res = Math.max(res,
                node.val + right + left,
                node.val,
                left,
                right);
        return Math.max(node.val + Math.max(left,right),node.val);
    }
    const dp = dfs(root);
    // console.log(res,dp)
    return Math.max(res,dp);
};