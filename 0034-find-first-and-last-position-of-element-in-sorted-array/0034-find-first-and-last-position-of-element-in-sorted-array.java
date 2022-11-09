class Solution {
    private int findFirst(int[] nums,int target) {
        int left = 0;
        int right = nums.length - 1;
        while(left < right) {
            int mid = (right + left) / 2;

            if(target <= nums[mid]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return right != -1 && nums[left] == target ? left : -1;
        
    }
    
    private int findLast(int[] nums,int target) {
        int left = 0;
        int right = nums.length - 1;
        
        while(left < right) {
            int mid = (left + right) % 2 == 1 ? (left + right) / 2 + 1 : (left + right) / 2;
            if(target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid;
            }
        }
        
        return left;
    }
    public int[] searchRange(int[] nums, int target) {
        int first = findFirst(nums,target);
        if(first == -1) return new int[]{-1,-1};
        int last = findLast(nums,target);
        return new int[]{first,last};
    }
}