const newSort = arr => {
    if(arr.length < 2) return arr;
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];
    const left = [], right = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return newSort(left).concat(pivot, newSort(right));
}

arr = [85, 24, 63, 45, 17, 20, 31, 20, 96, 50, 1];

console.log(newSort(arr));