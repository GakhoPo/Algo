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
        }).catch((e) => reject(e));
    });
}
