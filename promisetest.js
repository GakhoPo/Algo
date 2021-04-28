function father() {
    return Promise.resolve(true);
}

function son() {
    let flag = father();
    return new Promise((resolve, reject) => resolve(flag));
}
console.log(son()); //未执行完毕

son()
    .then((mes) => {
        if (mes) return 1;
    })
    .then((mes) => console.log(mes));
//console.log(father());
