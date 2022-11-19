class Solution {
    
    private List<List<Integer>> res = new ArrayList<>();
    
    private void backtrack (int[] candidates, LinkedList<Integer> current, int idx, int target) {
        if(target < 0) return;
        if(target == 0) {
            res.add(new ArrayList<>(current));
            return;
        }
        
        for(int i = idx ; i < candidates.length; i++) {
            current.addLast(candidates[i]);
            backtrack(candidates,current,i,target - candidates[i]);
            current.removeLast();
        }
    }
    
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        this.backtrack(candidates,new LinkedList<>(),0,target);
        
        return res;
    }
}