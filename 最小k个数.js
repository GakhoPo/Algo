function smallestK(arr, k) {
    var n = arr.length;
    var left = 0, right = n - 1;
    var index = partition(arr, left, right);
    while (index !== k) {
        if (index > k) {
            right = index - 1;
            index = partition(arr, left, right);
        }
        else if (index < k) {
            left = index + 1;
            index = partition(arr, left, right);
        }
    }
    return arr.slice(0, k);
}
var partition = function (arr, left, right) {
    var _a, _b;
    var key = arr[left];
    while (left < right) {
        while (key <= arr[right] && left < right)
            right--;
        _a = [arr[right], arr[left]], arr[left] = _a[0], arr[right] = _a[1];
        while (key >= arr[left] && left < right)
            left++;
        _b = [arr[right], arr[left]], arr[left] = _b[0], arr[right] = _b[1];
    }
    return left;
};
var arr = [1, 3, 5, 7, 2, 4, 6, 8];
var k = 4;
console.log(smallestK(arr, k));
