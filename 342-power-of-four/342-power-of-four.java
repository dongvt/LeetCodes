class Solution {
    public boolean isPowerOfFour(int n) {
        return (n > 0) && ((n - 1) & n) == 0 && (n & 0xaaaaaaaa) == 0;
    }
}