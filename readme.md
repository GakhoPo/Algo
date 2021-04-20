# this is the test
---
* Task
* Purpose
3. <font color=purple>Aim</font>
自己去[谷歌](https://www.google.com)
快速排序：
```
arr = [85, 24, 63, 45, 17, 31, 96, 50, 22, 22];

function quickSort(arr) {
    if(arr.length < 2) return arr;
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr.splice(pivotIndex, 1)[0];
    const left = [], right = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(arr));
```
 Jacky | Mike | Tom 
-|-|-|
Home|2|3

