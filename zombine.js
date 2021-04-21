function minHours(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const dirs = [
        [1, 0],
        [0, 1],
        [0, -1],
        [-1, 0],
    ];
    const queue = [];

    let hours = 0;
    let population = rows * cols;

    // Find all walkers....
    grid.forEach((row, r) => {
        row.forEach((person, c) => {
            if (person === 1) {
                // Add walker to the queue, so she can infect her next victim
                // when its her turn....
                queue.push([r, c]);
            }
        });
    });

    // If everyone has infected, game-over...
    if (queue.length === population) {
        // hours = 0....
        return hours;
    }

    // Find how many humans left...
    population -= queue.length;

    // We have zombies waiting patiently in the queue...
    while (queue.length) {
        // Sorry, kitchen closed...
        if (!population) {
            break;
        }

        // At this point we are t + 1...
        ++hours;

        // lop through all zombies in the queue at t + 1
        for (let i = queue.length; i > 0; --i) {
            const zombie = queue.shift();

            // Loop through all possible directions
            dirs.forEach((dir) => {
                const target = [zombie[0] + dir[0], zombie[1] + dir[1]];

                // If target exists in row and she's a human
                // turn her...
                if (
                    target[0] >= 0 &&
                    target[0] < rows &&
                    target[1] >= 0 &&
                    target[1] < cols &&
                    grid[target[0]][target[1]] === 0
                ) {
                    // Target will try to infect humans at
                    // t + 2
                    queue.push(target);
                    // Mark her as non human
                    ++grid[target[0]][target[1]];
                    // Human population decreased...
                    --population;
                }
            });
        }
    }

    // Congrats, it's zombieland now...
    return hours;
}

const grid1 = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1],
    [1, 1, 1, 0, 1],
];

const grid2 = [
    [0, 1, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0],
];

console.log(`grid1 = ${minHours(grid1)}`);
console.log(`grid1 = ${minHours(grid2)}`);
