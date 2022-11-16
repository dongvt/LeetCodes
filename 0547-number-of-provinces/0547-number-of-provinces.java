class Solution {
    boolean[] visited;
    int n;
    public int findCircleNum(int[][] isConnected) {
        n = isConnected.length;
        visited = new boolean[isConnected.length];
        int count = 0;
        for(int i = 0; i < n; i++) {
            if(!visited[i]) {
                count++;
                dfs(i,isConnected);
            }
        }
        return count;
    }
    
    private void dfs(int index, int[][] isConnected) {
        
        if(visited[index]) return;
        visited[index] = true;
        for(int j = 0; j < n; j++) {
            if(isConnected[index][j] == 1) dfs(j,isConnected);
        }
        
    }
}