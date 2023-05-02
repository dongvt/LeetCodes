class Solution {
    public int arraySign(int[] nums) {
        if(nums.length == 1) return nums[0] == 0 ? 0 : nums[0] > 0 ? 1 : -1;
        int ceros = 0;
        for(int i = 0; i < nums.length - 1; i++) {
            if(nums[i] == 0 || nums[i + 1] == 0) return 0;
            nums[i + 1] = nums[i] * nums[i + 1] > 0 ? 1 : -1;
        }
        
        return nums[nums.length - 1];
    }
}