/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points = points.sort((a,b) => a[1] - b[1]);
    
    let arrows = 1;
    let end = points[0][1];
    for (let ballon of points) {
        if(ballon[0] > end){
            end = ballon[1];
            arrows++;
        }
    }
    
    return arrows;
    
    
    
};