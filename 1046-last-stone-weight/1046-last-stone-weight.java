class Solution {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>((a,b) -> b-a);
        
        for(int s : stones) {
            pq.add(s);
        }
        
        
        while(pq.size() > 1) {
            //System.out.println(pq.peek());
            int y = pq.poll();
            int x = pq.poll();
            
            if(x != y) {
                pq.add(y-x);    
            } 
        }
        
        return pq.size() == 0 ? 0 : pq.poll();
        
        
    }
}