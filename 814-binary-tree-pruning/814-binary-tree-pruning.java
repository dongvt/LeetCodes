/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    private TreeNode dfs(TreeNode node) {
        if(node == null) return null;
        
        node.left = this.dfs(node.left);
        node.right = this.dfs(node.right);
        if(node.left == null && node.right == null && node.val == 0) return null;
        return node;
    }
    
    public TreeNode pruneTree(TreeNode root) {
        TreeNode sentinel = new TreeNode(-1,null,root);
        this.dfs(sentinel);
        return sentinel.right;
    }
}