class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String,List<String>> list = new HashMap<>();
        for(String str : strs) {
            String anagram = getAnagram(str);
            if(!list.containsKey(anagram)) {
                list.put(anagram,new ArrayList());  
            } 
            list.get(anagram).add(str);
        }
        
        return new ArrayList(list.values());
    }
    
    private String getAnagram(String word) {
        int [] characters = new int[26];
        for(char c : word.toCharArray()) characters[c-'a']++;
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < 26; i++)
            if(characters[i] != 0) {
                sb.append('x');
                sb.append((char) i + 'a');
                sb.append(characters[i]);
            }
        return sb.toString();
    }
}