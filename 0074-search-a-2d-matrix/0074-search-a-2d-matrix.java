class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        //Premise -> Row = index / n, Column = index % n
        int n = matrix[0].length;
        int m = matrix.length;
        
        int left = 0, right = n * m - 1;
        while (left < right) {
            int mid = (left + right) / 2;
            if(matrix[mid / n][mid % n] >= target) {
                right = mid;
            } else {
                left = mid  + 1;
            }
        }
        
        return matrix[left / n][left % n] == target;
    }
}