function zombieBite(grid) {
    let people = 0,
        days = 0;
    let zomPos = [];
    const rows = grid.length,
        cols = grid[0].length;
    const dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) people++;
            else if (grid[i][j] === 2) zomPos.push([i, j]);
        }
    }
    if (people === 0) return 0;
    let len;
    while ((len = zomPos.length)) {
        days++;
        for (let i = 0; i < len; i++) {
            const zom = zomPos.shift();
            for (let dir of dirs) {
                const [x, y] = [zom[0] + dir[0], zom[1] + dir[1]];
                if (
                    x < rows &&
                    x >= 0 &&
                    y < cols &&
                    y >= 0 &&
                    grid[x][y] === 1
                ) {
                    zomPos.push([x, y]);
                    people--;
                    grid[x][y] = 2;
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
