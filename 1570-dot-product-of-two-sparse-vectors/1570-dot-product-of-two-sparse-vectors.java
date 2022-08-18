class SparseVector {
    public int [] globalNums = null;
    public Set set = new HashSet<Integer>();
    SparseVector(int[] nums) {
        this.globalNums = nums;
        for(int i = 0 ; i < nums.length; i++) {
            int num = nums[i];
            if(num != 0) {
                set.add(i);
            }
        }
    }
    
	// Return the dotProduct of two sparse vectors
    public int dotProduct(SparseVector vec) {
        int res = 0;
        Iterator<Integer> it = this.set.iterator();
        while(it.hasNext()) {
            int idx = it.next();
            if(vec.set.contains(idx)){
                res += vec.globalNums[idx] * this.globalNums[idx];
            }
        }
        return res;
    }
}

// Your SparseVector object will be instantiated and called as such:
// SparseVector v1 = new SparseVector(nums1);
// SparseVector v2 = new SparseVector(nums2);
// int ans = v1.dotProduct(v2);