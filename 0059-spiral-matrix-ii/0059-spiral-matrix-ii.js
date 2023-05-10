/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const res = new Array(n).fill().map(() => new Array(n).fill(0));
    const xr = [0,n-1];
    const yr = [0,n-1];
    let fill = 0;
    while(fill < n * n) {
        //top
        for(let i = xr[0]; i <= xr[1]; i++) {
            res[yr[0]][i] = ++fill;
        }
        yr[0]++;
        //right
        for(let i = yr[0]; i <= yr[1]; i++) {
            res[i][xr[1]] = ++fill;
        }
        xr[1]--;
        //bot
        for(let i = xr[1]; i >= xr[0]; i--) {
            res[yr[1]][i] = ++fill;
        }
        yr[1]--;
        //left
        for(let i = yr[1]; i >= yr[0]; i--) {
            res[i][xr[0]] = ++fill;
        }
        xr[0]++;
    }
    
    //console.log(res)
    
    return res;
};