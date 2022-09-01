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
    private int countNodes(TreeNode node,int max) {
        if(node == null) return 0;
        int count = node.val < max ? 0 : 1;
        int newMax = Math.max(max,node.val);
        return this.countNodes(node.left,newMax) + this.countNodes(node.right,newMax) + count;
        
    } 
    public int goodNodes(TreeNode root) {
        return this.countNodes(root,root.val);
    }
}