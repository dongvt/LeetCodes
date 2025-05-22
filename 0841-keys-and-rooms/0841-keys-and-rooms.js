/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const n = rooms.length;
    const visited =  new Array(n).fill(false);
    const dfs = (node) => {
        if(visited[node]) return;
        visited[node] = true;
        for(const no of rooms[node]) {
            dfs(no);
        }
    }

    dfs(0);

    for(const v of visited) {
        if(!v) return v;
    }

    return true;

};