class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList<>();
        for(int i = 0 ; i < nums.length && nums[i] <= 0 ; i++) {
            if(i > 0 && nums[i] == nums[i-1]) continue;
            this.twoSum(i,nums,res);
            
        }
        
        return res;
    }
    private void twoSum(int index,int[] nums,List<List<Integer>> res) {
        int left = index + 1, right = nums.length - 1;
        
        while(left < right) {
            long sum = nums[left] + nums[right] + nums[index];
            if(sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                res.add(Arrays.asList(nums[index],nums[left++],nums[right--]));
                //What happen if the left number is repeated?
                //It will add the same list for each repetition. So, we need to avoid that
                while(left < right && nums[left] == nums[left - 1]) left++;
            }
        }
        
    }
}