class Solution {
    public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
        Set<Integer> n1 = new HashSet<>();
        Set<Integer> n2 = new HashSet<>();

        for(int n : nums1) n1.add(n);
        for(int n : nums2) n2.add(n);
        
        List<List<Integer>> res = new ArrayList<>();
        
        
        List<Integer> l1 = new ArrayList();
        List<Integer> l2 = new ArrayList();
        res.add(l1); res.add(l2);
        
        for(int n : n1) {
            if(!n2.contains(n)) l1.add(n);
        }
        
        for(int n : n2) {
            if(!n1.contains(n)) l2.add(n);
        }
        
        return res;
   
    }
}