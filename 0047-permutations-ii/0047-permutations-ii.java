class Solution {
    
    private List<List<Integer>> res = new ArrayList<>();
    
    private void backtrack(Map<Integer,Integer> counter, LinkedList<Integer> current, int limit) {
        if(current.size() == limit) {
            res.add(new ArrayList<>(current));
            return;
        }
        
        for (Map.Entry<Integer, Integer> entry : counter.entrySet()) {
            Integer num = entry.getKey();
            Integer count = entry.getValue();
            if (count == 0)
                continue;

            current.addLast(num);
            counter.put(num, count - 1);

            backtrack(counter, current,limit);

            current.removeLast();
            counter.put(num, count);
        }
    }
    
    public List<List<Integer>> permuteUnique(int[] nums) {
        
        Map<Integer,Integer> counter = new HashMap<>();
        for(int num : nums) counter.put(num,counter.getOrDefault(num,0) + 1);
        
        this.backtrack(counter,new LinkedList<>(),nums.length);
        return res;
    }
}