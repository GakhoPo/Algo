function maxSum(arr) {
    const n = arr.length;
    let res = 0,
        sum = 0;
    let left = 0,
        right = 0;
    while (right < n) {
        const c = arr[right];
        right++;
        sum += c;
        res = Math.max(res, sum);
        while (sum > res) {
            const d = arr[left];
            left++;
            sum -= d;
        }
    }
    return res;
}
const arr = [1, 2, 3, -1, 4, -3];
console.log(maxSum(arr));
