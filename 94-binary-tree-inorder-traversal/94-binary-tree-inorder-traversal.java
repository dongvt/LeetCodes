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
    private List<Integer> res = null;
    private void inOrder (TreeNode node) {
        if(node == null) return;
        this.inOrder(node.left);
        res.add(node.val);
        this.inOrder(node.right);
        
    } 
    public List<Integer> inorderTraversal(TreeNode root) {
        res = new ArrayList<>();
        this.inOrder(root);
        return res;
    }
}