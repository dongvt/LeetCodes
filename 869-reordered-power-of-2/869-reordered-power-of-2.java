class Solution {
    private int [] countArray(int n) {
        int [] arr = new int[10];
        while(n > 0) {
            arr[n % 10]++;
            n = n / 10;
            
        }
        return arr;
    }
    
    public boolean reorderedPowerOf2(int n) {
        int [] nCount = countArray(n);
        
        for(int i = 0 ; i < 31 ; i++)
            if(Arrays.equals(nCount,countArray(1 << i))) return true;
        
        return false;
    }
}