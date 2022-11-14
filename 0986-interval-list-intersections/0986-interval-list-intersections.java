class Solution {
    public int[][] intervalIntersection(int[][] firstList, int[][] secondList) {
        int i = 0, j = 0;
        List<int[]> res = new ArrayList<>();
        while(i < firstList.length && j < secondList.length) {
            int min = Math.min(firstList[i][1],secondList[j][1]);
            int max = Math.max(firstList[i][0],secondList[j][0]);
            
            if(max <= min)
                res.add(new int[]{max,min});
            
            
            if(firstList[i][1] < secondList[j][1]) i++;
            else j++;
        }
        
        return res.toArray(new int[res.size()][]);
    }
}