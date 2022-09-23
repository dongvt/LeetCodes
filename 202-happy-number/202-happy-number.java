class Solution {
    public boolean isHappy(int n) {
        Set<Integer> set = new HashSet<>();
        while(n != 1) {
            int sum = 0;
            while(n > 0) {
                int num = n % 10;
                sum += num * num;
                n /= 10;
            }
            if(set.contains(sum)) return false;
            else set.add(sum);
            n = sum;
        }
        
        return true;
    }
}