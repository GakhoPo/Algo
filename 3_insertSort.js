arr = [85, 24, 63, 45, 17, 31, 96, 50];

function insertSort(arr) {
    if(arr.length < 2) return arr;
    const len = arr.length;
    for(let i = 1; i < len; i++) {
        const temp = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}

console.log(insertSort(arr));