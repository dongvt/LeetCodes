class Solution {
    private List<List<Integer>> res = new ArrayList<>();
    
    private void backtrack (int[] candidates, LinkedList<Integer> current, int idx, int target) {
        if(target < 0) return;
        if(target == 0) {
            res.add(new ArrayList<>(current));
            return;
        }
        
        for(int i = idx ; i < candidates.length; i++) {
            if(i > idx && candidates[i] == candidates[i-1]) continue;
            current.addLast(candidates[i]);
            backtrack(candidates,current,i+1,target - candidates[i]);
            current.removeLast();
        }
    }
    
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        Arrays.sort(candidates);
        this.backtrack(candidates,new LinkedList<>(),0,target);
        
        return res;
    }
}