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
var rob = function(root) {
    const compute = (node) => {
        if(node === null) return [0,0];
        
        const pairLeft = compute(node.left);
        const pairRight = compute(node.right);

        const p1 = pairLeft[1] + pairRight[1] + node.val;
        const p2 = Math.max(...pairLeft) + Math.max(...pairRight);
        return [p1,p2]
        
    }

    return Math.max(...compute(root));
};