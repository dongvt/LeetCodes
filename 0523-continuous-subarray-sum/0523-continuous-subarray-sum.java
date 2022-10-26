class Solution {
    public boolean checkSubarraySum(int[] nums, int k) {
        Map<Integer,Integer> prefix = new HashMap<>();
        int sum = 0;
        prefix.put(0,0);
        for(int i = 0 ; i < nums.length; i++) {
            sum += nums[i];
            if(!prefix.containsKey(sum%k))
                prefix.put(sum%k,i+1);
            else if(prefix.get(sum%k) < i)
                return true;
            
        }
        
        return false;
    }
}