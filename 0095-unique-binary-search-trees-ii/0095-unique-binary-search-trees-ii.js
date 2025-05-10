/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    const generate = (left,right) => {
        if(left === right) return [new TreeNode(left)];
        if(left > right) return [null];
        const trees = [];
        for(let x = left; x <= right; x++) {
            const leftTrees = generate(left, x - 1);
            const rightTrees = generate(x + 1, right);
            
            for(let L of leftTrees) {
                for(let R of rightTrees) {
                    const node = new TreeNode(x, L, R);
                    trees.push(node)
                }
            }
        }
        return trees;
    }

    return generate(1,n);
};