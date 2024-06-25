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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    const bfs = (node,sum) => {
        if(node === null) return 0;
        const val = node.val;
        const rightSum = bfs(node.right,sum);

        node.val += rightSum + sum;
        const leftSum = bfs(node.left,node.val)

        return val + rightSum + leftSum;
    }

    bfs(root,0);

    return root;
};