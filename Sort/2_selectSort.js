arr = [85, 24, 63, 45, 17, 31, 96, 50];

function selectSort(arr) {
    if(arr.length < 2) return arr;
    for(let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++) {
            minIndex = arr[j] < arr[minIndex] ? j : minIndex;
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

console.log(selectSort(arr));