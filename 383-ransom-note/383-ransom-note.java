class Solution {
    private boolean check(int[] a1, int[] a2) {
        for(int i = 0; i < a1.length ;i++) {
            if(a1[i] > a2[i]) return false;
        }
        
        return true;
    }
    public boolean canConstruct(String ransomNote, String magazine) {
        
        int[] rCount = new int[26];
        int[] mCount = new int[26];
        int rLength = ransomNote.length();
        
        for(char c: ransomNote.toCharArray()) {
            rCount[c - 'a']++;
        }
        
        for(char c: magazine.toCharArray()) {
            mCount[c - 'a']++;
        }

        return check(rCount,mCount);
    }
}