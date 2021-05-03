function promiseAll(arr) {
    let count = 0;
    let len = arr.length;
    let result = new Array(len).fill(null);
    return new Promise((resolve, reject) => {
        arr.forEach((fn, index) => {
            fn.then((res) => {
                result[index] = res;
                count++;
                if (count === len) resolve(result);
            });
        });
    }).catch((e) => e);
}
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(3);
let arr = [p1, p2, p3];
promiseAll(arr);
