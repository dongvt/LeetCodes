/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const old = image[sr][sc];
    
    if(old === newColor) return image;
    
    const N = image.length, M = image[0].length;
    const BFS = (r,c) => { //r -> row, c -> column
        
        //Base case
        if(r < 0 || r >= N || c < 0 || c >= M || image[r][c] !== old) return;
        image[r][c] = newColor;
        BFS(r + 1,c);
        BFS(r - 1,c);
        BFS(r,c + 1);
        BFS(r,c - 1);
    }
    
    BFS(sr,sc);
    return image;
};