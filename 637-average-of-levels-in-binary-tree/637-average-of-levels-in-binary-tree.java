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
    public List<Double> averageOfLevels(TreeNode root) {
        Queue<TreeNode> q = new LinkedList<>();
        
        List<Double> averages = new LinkedList<>();
        
        q.add(root);
        
        while(!q.isEmpty()) {
            int levelSize = q.size();
            double sum = 0;
            for(int i = 0; i < levelSize; i++) {
                TreeNode current = q.remove();
                sum += current.val;
                if(current.left != null) q.add(current.left);
                if(current.right != null) q.add(current.right);
            }
            averages.add(sum / levelSize);
        }
        
        return averages;
    }
}