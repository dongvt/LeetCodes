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
 * @return {boolean}
 */
var isValidBST = function(root) {
    const helper = (node,low,high) => {
        if(node === null) return true;
        if(low !== null && node.val <= low) return false;
        if(high !== null && node.val >= high) return false;
        return helper(node.right,node.val,high) && helper(node.left,low,node.val);
    }
    
    return helper(root);
};