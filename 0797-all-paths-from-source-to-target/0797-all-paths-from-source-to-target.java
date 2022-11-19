class Solution {
    List<List<Integer>> res = new ArrayList<>();
    
    private void dfs (int[][] graph, int idx, List<Integer> current) {

        if(idx == graph.length - 1) {            
            res.add(new ArrayList<>(current));
            return;
        }
        
        for(int i : graph[idx]) {
            current.add(i);
            dfs(graph,i,current);
            current.remove(current.size() - 1);
        }
    }
    
    public List<List<Integer>> allPathsSourceTarget(int[][] graph) {
        List<Integer> current = new ArrayList<>();
        current.add(0);
        this.dfs(graph,0,current);
        
        return res;
    }
}