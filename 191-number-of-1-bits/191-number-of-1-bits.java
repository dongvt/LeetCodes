public class Solution {
    // you need to treat n as an unsigned value
    public int hammingWeight(int n) {
        int res = 0;
        int mask = 0x7FFFFFFF;
        
        if(n < 0) {
            n = n & mask;
            res++;
        }
        while(n != 0) {
            //System.out.println(n&1);
            res += n & 1;
            n = n >> 1;
        }
        return res;
    }
}