/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function (grid) {
    //Initial idea,
    //DO BFS, until you find a key, then do BFS from the key and so on.

    const isKey = (y, x) => {
        const cellVal = grid[y].charCodeAt(x);
        return 'a'.charCodeAt(0) <= cellVal && 'z'.charCodeAt(0) >= cellVal;
    }

    const isLock = (y, x) => {
        const cellVal = grid[y].charCodeAt(x);
        return 'A'.charCodeAt(0) <= cellVal && 'Z'.charCodeAt(0) >= cellVal;
    }

    const haveLockKey = (char, mask) => {
        const keyIdx = char.charCodeAt(0) - 65;
        // console.log(keyIdx,char)
        return (mask & (1 << keyIdx)) !== 0;
    }

    const isValidCell = (y, x) => {
        return x >= 0 && x < grid[0].length && y >= 0 && y < grid.length;
    }

    const q = new Queue();
    let startPoint = [null, null];
    let keyMask = 0;
    //find inital starting point
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i].charAt(j) === '@') startPoint = [i, j];
            if (isKey(i, j)) {
                const c = grid[i].charCodeAt(j);
                keyMask = keyMask | 1 << (c - 97)
            }
        }
    }



    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ]

    const visited = Array.from({
        length: grid.length
    }, () => Array.from({
        length: grid[0].length
    }, () => Array(keyMask).fill(false))
    );
    visited[startPoint[0]][startPoint[1]][0] = true;
    q.enqueue([startPoint, 0, 0]); //Coordinates, distance, keys

    while (q.size() > 0) {
        const [[y, x], distance, keys] = q.dequeue();
        // console.log(y,x,keys,keyMask)
        if (keys === keyMask) return distance;

        for (const [dy, dx] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            if (!isValidCell(newY, newX)) continue;
            const c = grid[newY].charAt(newX);
            // if(newY === 0 && newX === 11) {
            //     console.log(keys,isLock(newY,newX))
            //     console.log(haveLockKey(c,keys))
            // }
            if (isLock(newY, newX) && !haveLockKey(c, keys)) continue;
            if (visited[newY][newX][keys]) continue;
            if (grid[newY].charAt(newX) === '#') continue;
            let newKeys = keys;
            if (isKey(newY, newX)) newKeys = keys | (1 << c.charCodeAt(0) - 97);

            visited[newY][newX][newKeys] = true;
            q.enqueue([[newY, newX], distance + 1, newKeys]);
        }
    }


    return -1;
};