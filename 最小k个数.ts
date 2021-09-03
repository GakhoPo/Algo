function smallestK(arr: number[], k: number): number[] {
    const n: number = arr.length;
    let left: number = 0,
        right: number = n - 1;
    let index: number = partition(arr, left, right);
    while (index !== k) {
        if (index > k) {
            right = index - 1;
            index = partition(arr, left, right);
        } else if (index < k) {
            left = index + 1;
            index = partition(arr, left, right);
        }
    }
    return arr.slice(0, k);
}

const partition = (arr: number[], left: number, right: number): number => {
    const key: number = arr[left];
    while (left < right) {
        while (key <= arr[right] && left < right) right--;
        [arr[left], arr[right]] = [arr[right], arr[left]];
        while (key >= arr[left] && left < right) left++;
        [arr[left], arr[right]] = [arr[right], arr[left]];
    }
    return left;
};

const arr: number[] = [1, 3, 5, 7, 2, 4, 6, 8];
const k: number = 4;
console.log(smallestK(arr, k));
