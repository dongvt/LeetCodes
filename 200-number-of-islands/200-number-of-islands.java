class Solution {
    char [][] board;
    
    private void dfs(int x, int y) {
        if(x < 0 || x >= board.length || y < 0 || y >= board[0].length
          || board[x][y] == '0') {
            return;
        }
        //System.out.println(x + " - " + y);
        this.board[x][y] = '0';
        this.dfs(x+1,y);
        this.dfs(x-1,y);
        this.dfs(x,y+1);
        this.dfs(x,y-1);
    }
    
    public int numIslands(char[][] grid) {
        this.board = grid;
        int count = 0;
        for(int i = 0 ; i < grid.length; i++) {
            for(int j = 0; j < grid[0].length ; j++) {
                if(grid[i][j] == '1') {
                    dfs(i,j);
                    count++;
                }
            }
        }
        
        return count;
    }
}

