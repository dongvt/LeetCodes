class Solution {
    public int numSubarrayProductLessThanK(int[] nums, int k) {
        int i = 0, j = 0;
        long prod = 1;
        
        int res = 0;
        while(j < nums.length) {
            prod *= nums[j];
            
            while(i <= j && prod >= k) {
                prod /= nums[i++];
            }
            
            res += j-i+1;
            //System.out.println(res + " Prod: "+ prod + " - " + i + "," + j + " => "+ (j-i));
            j++;
        }
        
        return res;
    }
}