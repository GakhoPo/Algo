arr = [85, 24, 63, 45, 17, 31, 96, 50];

function bubbletSort(arr) {
    const n = arr.length;
    if (!n || n < 2) return arr;
    for (let i = 0; i < n; i++) {
        let flag = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = true;
            }
        }
        if (!flag) break;
    }
    return arr;
}

console.log(bubbletSort(arr));
