class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        PriorityQueue<Map.Entry<String,Integer>> pq = 
            new PriorityQueue<>((a,b) -> a.getValue() == b.getValue() ? 
                                a.getKey().compareTo(b.getKey()) : 
                                b.getValue() - a.getValue());
        
        Map<String,Integer> map = new HashMap<>();
        
        for(String word : words) {
            map.put(word,map.getOrDefault(word,0) + 1);
        }
        
        for(Map.Entry entry : map.entrySet()) {
            pq.add(entry);
        }
        
        List<String> res = new ArrayList<>();
        for(int i = 0 ; i < k; i++) {
            res.add(pq.poll().getKey());
        }
        
        return res;
    }
}