function zombieBite(grid) {
    let people = 0;
    let q = [];
    const rows = grid.length,
        cols = grid[0].length;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) people++;
            else if (grid[i][j] === 2) q.push([i, j]);
        }
    }
    if (people === 0) return 0;
    const dirs = [
        [1, 0],
        [0, 1],
        [0, -1],
        [-1, 0],
    ];
    let days = 0;
    let len;
    while ((len = q.length)) {
        days++;
        for (let i = 0; i < len; i++) {
            const zombie = q.shift();
            for (let dir of dirs) {
                const target = [zombie[0] + dir[0], zombie[1] + dir[1]];
                if (
                    target[0] >= 0 &&
                    target[0] < rows &&
                    target[1] >= 0 &&
                    target[1] < cols &&
                    grid[target[0]][target[1]] === 1
                ) {
                    q.push(target);
                    grid[target[0]][target[1]]++;
                    people--;
                }
                if (people === 0) return days;
            }
        }
    }
    return -1;
}

const grid1 = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
];
const grid2 = [
    [2, 2, 2],
    [0, 2, 2],
    [1, 0, 2],
];
const grid3 = [
    [1, 1, 0, 1],
    [1, 2, 1, 1],
    [0, 1, 2, 1],
    [1, 2, 1, 0],
    [0, 0, 1, 1],
];

console.log(`grid1: ${zombieBite(grid1)}`);
console.log(`grid2: ${zombieBite(grid2)}`);
console.log(`grid3: ${zombieBite(grid3)}`);
