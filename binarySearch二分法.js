function binarySearch(data, target) {
    if (!data.length) return -1;
    let left = 0,
        right = data.length - 1;
    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (data[mid] > target) {
            right = mid - 1;
        } else if (data[mid] === target) return mid;
        else {
            left = mid + 1;
        }
    }
    return -1;
}

const arr = [1, 3, 5, 6, 9, 10, 11, 12];
console.log(binarySearch(arr, 5));
console.log(binarySearch(arr, 4));
console.log(binarySearch(arr, 11));
console.log(binarySearch(arr, 1));
console.log(binarySearch(arr, 3));
