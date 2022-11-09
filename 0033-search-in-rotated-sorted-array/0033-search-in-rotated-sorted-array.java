class Solution {
    
    private int getRotation(int[] nums) {
        int left = 0, right = nums.length - 1;
        
        while(left < right) {
            int mid = (left + right) / 2;
            if(nums[mid + 1] < nums[mid]) {
                return mid;
            } else if(nums[mid] > nums[0]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return 0; //no rotation found
    }
    
    private int binarySearch(int[] nums,int left, int right,int target) {
        while(left < right) {
            int mid = (left + right) / 2;
            if(nums[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return nums[left] == target ? left : -1;
    }
    
    public int search(int[] nums, int target) {
        
        if(nums.length == 1) return nums[0] == target ? 0 : -1;
        
        int rotation = this.getRotation(nums);
        
        int res = binarySearch(nums,0,rotation,target);
        
        return res != -1 ? res : binarySearch(nums,rotation + 1,nums.length - 1,target);
    }
}