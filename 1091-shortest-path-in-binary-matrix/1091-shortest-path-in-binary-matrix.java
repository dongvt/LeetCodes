class Solution {
    public int shortestPathBinaryMatrix(int[][] grid) {
        if(grid[0][0] == 1) return -1;
        int n = grid.length;
        boolean[][] visited = new boolean[n][n];
        Queue<Point> q = new LinkedList<>();
        int[][] directions = new int[][]{{-1,-1},{-1,0},{-1,1},{0,-1},{0,1},{1,-1},{1,0},{1,1}};
        visited[0][0] = true;
        q.add(new Point(0,0,1));
        int count = 0;
        while(!q.isEmpty()) {
            Point p = q.poll();

            if(p.x == n - 1 && p.y == n - 1) return p.level;
            for(int[] dir : directions) {
                int newRow = p.x - dir[0];
                int newCol = p.y - dir[1];
                if(newRow < 0 || newRow == n || newCol < 0 || newCol == n || grid[newRow][newCol] == 1 || visited[newRow][newCol]) continue;
                //System.out.println(newRow + " - " + newCol);

                visited[newRow][newCol] = true;
                q.add(new Point(newRow,newCol,p.level + 1));
            }
        }
        
        return -1;
    }
}

class Point {
    int x;
    int y;
    int level;
    
    Point(int _x,int _y,int _level) {
        x = _x;
        y = _y;
        level = _level;
    }
}