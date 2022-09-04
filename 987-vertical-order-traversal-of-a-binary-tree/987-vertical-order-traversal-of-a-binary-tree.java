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
    private Map<Integer,List<Pair<Integer,Integer>>> indices = null;
    private int startIdx;
    private int endIdx;
    
    private void dfs(int row,int col, TreeNode node) {
        if(node == null) {
            return;
        }
        
        this.startIdx = Math.min(this.startIdx,col);
        this.endIdx = Math.max(this.endIdx,col);
        
        if(!this.indices.containsKey(col)) 
            this.indices.put(col,new ArrayList<Pair<Integer,Integer>>());
        
        this.indices.get(col).add(new Pair<Integer,Integer>(row,node.val));
        this.dfs(row + 1,col - 1, node.left);
        this.dfs(row + 1,col + 1, node.right);
    }
    
    public List<List<Integer>> verticalTraversal(TreeNode root) {
        
        this.indices = new HashMap<>();
        this.startIdx = Integer.MAX_VALUE;
        this.endIdx = Integer.MIN_VALUE;
        
        this.dfs(0,0,root);
        
        List<List<Integer>> res = new ArrayList<>();
        for(int i = this.startIdx; i <= this.endIdx ; i++) {
            //Sort by row and then by value
            Collections.sort(this.indices.get(i), (a,b) -> {
                if(a.getKey().equals(b.getKey())) return a.getValue() - b.getValue();
                else return a.getKey() - b.getKey();
            });
            
            //Once sorted add it to a new array
            List<Integer> sortedLevel = new ArrayList<>();
            for(Pair<Integer,Integer> pair : this.indices.get(i)) {
                sortedLevel.add(pair.getValue());
            }
            res.add(sortedLevel);
        }
        
        return res;
    }
}