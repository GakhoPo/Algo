arr = [85, 24, 63, 45, 17, 31, 96, 50, 22, 22];

//Method 1
function quickSort(arr) {
    if (arr.length < 2) return arr;
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr.splice(pivotIndex, 1)[0];
    const left = [],
        right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(arr));

//Method 2
arr2 = [85, 24, 63, 45, 17, 31, 96, 50, 22, 22];

function quickSort2(a, left, right) {
    if (left === right) return;
    const index = partition(a, left, right); //选出key下标
    if (left < index) {
        quickSort2(a, left, index - 1); //对key的左半部分排序
    }
    if (index < right) {
        quickSort2(a, index + 1, right); //对key的右半部份排序
    }
    return a;
}
function partition(a, left, right) {
    const key = a[left]; //一开始让key为第一个数
    while (left < right) {
        //扫描一遍
        while (key <= a[right] && left < right) {
            //如果key小于a[right]，则right递减，继续比较
            right--;
        }
        [a[left], a[right]] = [a[right], a[left]]; //交换
        while (key >= a[left] && left < right) {
            //如果key大于a[left]，则left递增，继续比较
            left++;
        }
        [a[left], a[right]] = [a[right], a[left]]; //交换
    }
    return left; //把key现在所在的下标返回
}
console.log(quickSort2(arr2, 0, arr2.length - 1));
