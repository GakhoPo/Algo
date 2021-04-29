function newFlat(arr) {
    return arr.reduce((sum, item) => {
        if (item instanceof Array) item = newFlat(item);
        return sum.concat(item);
    }, []);
}

const arr = [1, 2, 3, [4, 5, [6, 7, [8]]]];

console.log(newFlat(arr)); //[1, 2, 3, 4, 5, 6, 7, 8]
