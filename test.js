arr = [85, 24, 63, 45, 24, 17, 31, 96, 50];

const mysort = (arr) => {
    const n = arr.length;
    if (!n || n < 2) return arr;
    for (let i = 1; i < n; i++) {
        const temp = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
};

console.log("insert", mysort(arr));
