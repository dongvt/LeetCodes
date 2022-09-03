class Solution {
    private int gN = -1;
    private int gK = -1;
    private void dfs(List<Integer> res,int length,int current) {
        if(length == gN) {
            res.add(current);
            return;
        }
        
        int add = (current % 10) + gK;
        int sub = (current % 10) - gK;
        
        if(add < 10)
            this.dfs(res,length + 1, current * 10 + add);
        if(sub >= 0 && add != sub)
            this.dfs(res,length + 1, current * 10 + sub);
        
    }
    public int[] numsSameConsecDiff(int n, int k) {
        List<Integer> results = new ArrayList<Integer>();
        
        this.gN = n;
        this.gK = k;
        
        for(int i = 1; i < 10 ; i++)
            this.dfs(results,1,i);
        
        return results.stream().mapToInt(i -> i).toArray();
    }
}