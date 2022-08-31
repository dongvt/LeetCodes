class Solution {
    
    private int [][] gHeights = null; //global heights
    private int[][] directions = {{1,0},{0,1},{-1,0},{0,-1}}; 
    
    public void checkCell(int row, int col,boolean[][] arr) {
        arr[row][col] = true;
        for(int[] direction : this.directions) {
            int newRow = row + direction[0];
            int newCol = col + direction[1];
            
            if(newRow < 0 || newCol < 0 || newRow >= gHeights.length || newCol >= gHeights[0].length)
                continue;
            
            if(arr[newRow][newCol]) continue; //Already visited
            
            if(gHeights[row][col] > gHeights[newRow][newCol]) continue;
            
            checkCell(newRow,newCol,arr);
        }
    }
    
    public List<List<Integer>> pacificAtlantic(int[][] heights) {
        
        int M = heights.length, N = heights[0].length; //M -> rows , N -> columns
        this.gHeights = heights;
        
        boolean[][] pacific = new boolean[M][N];
        boolean[][] atlantic = new boolean[M][N];
        
        //Check Columns
        for(int i = 0; i < M; i++) {
            checkCell(i,0,pacific);
            checkCell(i,N-1,atlantic);
        }
        //Check rows
        for(int i = 0; i < N; i++) {
            checkCell(0,i,pacific);
            checkCell(M-1,i,atlantic);
        }
        
        List<List<Integer>> coordinates = new ArrayList<>();
        for(int i = 0; i < M; i++) {
            for(int j = 0; j < N; j++) {
                if(pacific[i][j] && atlantic[i][j]) coordinates.add(List.of(i,j));
            }                               
        }
        
        return coordinates;
    }
}