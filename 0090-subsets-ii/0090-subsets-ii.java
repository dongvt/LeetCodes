class Solution {
    List<List<Integer>> res = new ArrayList<>();
    private void backtrack(int[] nums, int idx, List<Integer> current) {
        res.add(new ArrayList<>(current));
        if(idx == nums.length) return;
        
        for(int i = idx ; i < nums.length ; i ++) {
            if(i > idx && nums[i] == nums[i - 1]) continue;
            current.add(nums[i]);
            backtrack(nums,i + 1,current);
            current.remove(current.size() - 1);
        }
    }
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Arrays.sort(nums);
        this.backtrack(nums,0,new ArrayList<>());
        
        return res;
        
    }
}