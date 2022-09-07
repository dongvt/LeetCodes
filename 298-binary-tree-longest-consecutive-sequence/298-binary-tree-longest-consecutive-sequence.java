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
    private int res = 0;
    private void dfs(TreeNode node,int num,int count) {
        if(node == null) return;
        if(node.val == num) this.res = Math.max(res,count + 1);
        else count = 0;
        this.dfs(node.left,node.val + 1,count + 1);
        this.dfs(node.right,node.val + 1,count + 1);
    }
    
    public int longestConsecutive(TreeNode root) {
        this.dfs(root,root.val,0);
        return this.res;
    }
}