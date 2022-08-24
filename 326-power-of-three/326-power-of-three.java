class Solution {
    public boolean isPowerOfThree(int n) {
        //This is not intutive so, here is the explaination:
        //Integer.MAX_VALUE gives us the maximun number we can recieve as a parameter
        //So we just need to know what could be the 
        //largest power of three which is also less than Integer.MAX_VALUE
        //That happen to be 1162261467 (Happy number), if our happy number is not divisible by n
        //It is not a power of three.
        return n > 0 && 1162261467 % n == 0;
    }
}