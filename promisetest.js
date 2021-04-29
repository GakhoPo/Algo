function add(num) {
    return new Promise((resolve, reject) => {
        let res = num + 1;
        if (res === 2) resolve(true);
        else reject(false);
    });
}

function father() {
    return Promise.resolve(1);
}

function mom() {
    return new Promise((resolve, reject) => {
        resolve(father());
    })
        .then((num) => {
            return add(num);
        })
        .then((res) => console.log(Object.prototype.toString.call(res)));
}
mom();

console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(undefined));
console.log(typeof undefined);
console.log([] instanceof Object);
