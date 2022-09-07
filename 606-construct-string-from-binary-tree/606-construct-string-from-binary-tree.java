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
    private String dfs(TreeNode node) {
        if(node == null) return "";
        String l = dfs(node.left);
        String r = dfs(node.right);
        
        if(r == "" && l == "") return node.val + "";
        if(r == "") return node.val + "(" + l + ")";
        if(l == "") return node.val + "()(" + r + ")";
        return node.val + "(" + l + ")(" + r + ")";
    }
    public String tree2str(TreeNode root) {
        return this.dfs(root);
    }
}