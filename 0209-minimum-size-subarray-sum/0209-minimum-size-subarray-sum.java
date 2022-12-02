class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int res = Integer.MAX_VALUE;
        int i = 0, j = 0;
        
        int sum = 0;
        while(j < nums.length) {
            sum += nums[j];
                            
            while(i <= j && sum >= target) {
                res = Math.min(res,j-i+1);
                sum -= nums[i++];
            }
            j++;
        }
        
        return res == Integer.MAX_VALUE ? 0 : res;
    }
}