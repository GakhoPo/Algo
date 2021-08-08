arr = [85, 24, 63, 45, 24, 17, 31, 96, 50];

const mysort = (arr) => {
    const n = arr.length;
    if (!n || n < 2) return arr;
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    return arr;
};

console.log("select", mysort(arr));
