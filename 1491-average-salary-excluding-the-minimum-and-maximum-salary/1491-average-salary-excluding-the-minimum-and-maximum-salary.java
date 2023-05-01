class Solution {
    public double average(int[] salary) {
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        
        double sum = 0;
        for(int s : salary) {
            if(min > s) min = s;
            if(max < s) max = s;
            sum += s;
        }
        
        return (sum - min - max) / (salary.length - 2);
    }
}