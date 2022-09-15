class Solution {
    public int[] findOriginalArray(int[] changed) {
        if(changed.length % 2 != 0) return new int[0];
        
        Arrays.sort(changed);
        
        Map<Integer,Integer> counter = new HashMap<>();
        
        for(int num: changed) counter.put(num,counter.getOrDefault(num,0) + 1);
        
        int[] res = new int[changed.length / 2];
        //System.out.print(res.length);
        int idx = 0;
        
        for(int num : changed) {
            if(counter.get(num) > 0) {
                counter.put(num,counter.get(num) - 1);
                
                int doubleNum = num * 2;
                
                if(counter.containsKey(doubleNum) && counter.get(doubleNum) > 0) {
                    counter.put(doubleNum,counter.get(doubleNum) - 1);
                    res[idx++] = num;
                } else {
                    return new int[0];
                }
            }
        }
        
        return res;
        
    }
}