/**
 * @param {string[]} classroom
 * @param {number} energy
 * @return {number}
 */
var minMoves = function (classroom, energy) {
    const m = classroom.length;
    const n = classroom[0].length;
    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    classroom = classroom.map((row) => row.split("")); //Separate the crap into full matrix

    let litterCount = 0;
    let startingPoint = [null, null];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (classroom[i][j] === "S") startingPoint = [i, j];
            if (classroom[i][j] === "L") classroom[i][j] = ++litterCount;
        }
    }

    const targetMask = (1 << litterCount) - 1;
    const visited = Array.from({
        length: m
    }, () => Array.from({
        length: n
    }, () => Array.from({
        length: energy + 1
    }, () => Array(targetMask + 1).fill(false)))
    )
    const q = new Queue();
    q.enqueue([startingPoint, energy, 0, 0]); //Coordinates, energy on track, collected litter mask,steps
    visited[startingPoint[0]][startingPoint[1]][energy][0] = true;

    while (q.size() > 0) {
        const [[y, x], currEnergy, litterCollected, steps] = q.dequeue();
        if (targetMask === litterCollected) return steps;
        for (const [dy, dx] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            if (newX < 0 || newX >= n || newY < 0 || newY >= m) continue;
            const nextCell = classroom[newY][newX];
            if (nextCell === 'X') continue; //obstable

            let nextEnergy = currEnergy - 1;

            if (nextEnergy < 0) continue; //out of energy;
            if (nextCell === 'R') nextEnergy = energy;

            let nextMask = litterCollected;

            if (typeof nextCell === 'number') {
                nextMask = nextMask | (1 << (nextCell - 1))
            }
            // console.log(typeof nextCell,nextCell,nextMask,litterCollected,classroom)
            
            if (visited[newY][newX][nextEnergy][nextMask]) continue;

            visited[newY][newX][nextEnergy][nextMask] = true;
            q.push([[newY, newX], nextEnergy, nextMask, steps + 1]);
        }
    }

    return -1;
};
