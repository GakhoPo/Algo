setTimeout(() => console.log(1), 0);
new Promise((resolve, reject) => {
    console.log(2);
    if (true) resolve();
    else reject("error");
})
    .then(() => {
        console.log(3);
    })
    .catch(() => console.log("error"))
    .then(() => console.log(4));
setTimeout(() => console.log(5), 0);

let map = new WeakMap();
map.set({ id: 1 }, { id: 1 });
console.log(map);
