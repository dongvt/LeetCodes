class Solution {
    public String frequencySort(String s) {
        Map<Character,Integer> counter = new HashMap<>();
        for(char c : s.toCharArray()){
            counter.put(c,counter.getOrDefault(c,0) + 1);
        }
        
        PriorityQueue<Map.Entry<Character,Integer>> pq = new PriorityQueue<>(
            (p1,p2) -> p2.getValue() - p1.getValue() != 0 ? p2.getValue() - p1.getValue() : p1.getKey() - p2.getKey()
        );
        
        for(Map.Entry<Character,Integer> entry : counter.entrySet()){
            pq.add(entry);
        }
        StringBuilder sb = new StringBuilder();
        while(pq.size() > 0){
            Map.Entry<Character,Integer> entry = pq.poll();
            for(int i = 0; i < entry.getValue(); i++) {
                sb.append(entry.getKey());
            }
        }
        
        return sb.toString();
    }
}