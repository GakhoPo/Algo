setTimeout(() => console.log(1), 0);
new Promise((resolve, reject) => {
    console.log(2);
    resolve();
    //reject();
})
    .then(() => {
        console.log(3);
    })
    .catch(() => console.log("error"))
    .then(() => console.log(4));
setTimeout(() => console.log(5), 0);
