arr = [85, 24, 63, 45, 17, 31, 96, 50];

function mergeSort(arr) {
    const len = arr.length;
    if(len < 2) return arr;
    const mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const res = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) res.push(left.shift());
        else res.push(right.shift());
    }
    while(left.length) res.push(left.shift());
    while(right.length) res.push(right.shift());
    return res;
}

console.log(mergeSort(arr));