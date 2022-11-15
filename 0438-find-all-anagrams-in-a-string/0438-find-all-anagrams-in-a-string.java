class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        Map<Character,Integer> mapS = new HashMap<>();
        Map<Character,Integer> mapP = new HashMap<>();
        
        for(char c : p.toCharArray()) {
            mapP.put(c,mapP.getOrDefault(c,0) + 1);
        }
        
        
        List<Integer> res = new LinkedList<>();
        for(int i = 0 ; i < s.length() ; i++) {
            char c = s.charAt(i);
            
            if(i < p.length() - 1) {
                mapS.put(c,mapS.getOrDefault(c,0) + 1);
                continue;
            }
            
            char lastC = s.charAt(i - p.length() + 1);
            mapS.put(c,mapS.getOrDefault(c,0) + 1);
            if(mapS.equals(mapP)) res.add(i - p.length() + 1);
            if(mapS.get(lastC) == 1) mapS.remove(lastC);
            else mapS.put(lastC,mapS.get(lastC) - 1);
        }
        
        if(mapS.equals(mapP)) res.add(p.length() - 1);
        
        return res;
        
    }
}