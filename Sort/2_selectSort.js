arr = [85, 24, 63, 45, 17, 31, 96, 50];

function selectSort(arr) {
    const n = arr.length;
    if (n < 2) return arr;
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

console.log(selectSort(arr));
