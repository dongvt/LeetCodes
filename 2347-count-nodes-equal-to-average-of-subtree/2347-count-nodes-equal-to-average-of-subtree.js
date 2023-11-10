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
var averageOfSubtree = function(root) {
    //0 count
    //1 sum
    //2 answer
    const compute = (node) => {
        if(node === null) return [0,0,0];
        const left = compute(node.left);
        const right = compute(node.right);
        const sum = left[1] + right[1] + node.val;
        const count = left[0] + right[0] + 1;
        const res = node.val === Math.floor(sum / count) ? 1 : 0;
        return [count,sum,res + left[2] + right[2]];
    }

    return compute(root)[2];
};