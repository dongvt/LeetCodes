class Solution {
    public int minSetSize(int[] arr) {
        Map<Integer,Integer> counter = new HashMap<Integer,Integer>();
        
        for(int num : arr) {
            counter.put(num,counter.getOrDefault(num,0) + 1);
        }
        
        Integer[] counts = counter.values().toArray(new Integer[counter.size()]);
        
        Arrays.sort(counts,(a, b) -> b - a);
        
        long sum = 0;
        int res = 0;
        for(int c : counts) {
            
            res++;
            sum += c;
            if(sum >= arr.length / 2) break;
        }
        
        return res;
    }
}