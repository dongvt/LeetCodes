class Solution {
    public int[][] diagonalSort(int[][] mat) {
        int M = mat.length;
        int N = mat[0].length;
        
        Map<Integer,Queue<Integer>> map = new HashMap<>();
        
        for(int i = 0 ; i < M; i++) {
            for(int j = 0 ; j < N; j++) {
                map.putIfAbsent(i - j,new PriorityQueue<>());
                map.get(i-j).add(mat[i][j]);
            }
        }
        
        for(int i = 0 ; i < M; i++) {
            for(int j = 0 ; j < N; j++) {
                mat[i][j] = map.get(i - j).remove();
            }
        }
        
        return mat;
    }
}