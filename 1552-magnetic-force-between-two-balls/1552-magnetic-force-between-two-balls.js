/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    
    const canPlaceBalls = (dist) => {
        let balls = 1;
        let lastBall = position[0];
        for(let i = 0 ; i < position.length ; i++) {
            if(position[i] - lastBall >= dist) {
                lastBall = position[i];
                balls++;
            }
            if(balls >= m) return true;
        }
        return false;
    }

    position.sort((a,b) => a-b);
    let left = 1;
    let right = position.at(-1) - position[0];

    while(left <= right) {
        const mid = ~~((left +  right) / 2);
        if(canPlaceBalls(mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
};