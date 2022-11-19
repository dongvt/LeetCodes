class Solution {
    
    boolean[][] blocked;
    
    private void dfs(char[][] board,int x, int y) {
        if(x < 0 || x >= board.length || y < 0 || y >= board[0].length || board[x][y] == 'X' || blocked[x][y])
            return;
        blocked[x][y] = true;
        dfs(board,x - 1,y);
        dfs(board,x + 1,y);
        dfs(board,x,y - 1);
        dfs(board,x,y + 1);
    }
    
    public void solve(char[][] board) {
        int n = board[0].length;
        int m = board.length;
        //Check which one to block via DFS
        blocked = new boolean[board.length][board[0].length];
        
        for(int i = 0; i < board[0].length ; i++) {
            dfs(board,0,i);
            dfs(board,m - 1,i);
        }
        
        for(int i = 0; i < board.length ; i++) {
            dfs(board,i,0);
            dfs(board,i,n-1);
        }
        
        
        //Change the array in place using the blocked matrix
        for(int i = 0; i < m; i++) {
            for(int j = 0 ; j < n; j++) {
                if(!blocked[i][j] && board[i][j] == 'O') board[i][j] = 'X';
            }
        }

    }
}