function father() {
    return Promise.resolve(true);
}

function son() {
    let flag = father();
    return Promise.resolve(flag);
}
console.log(son()); //未执行完毕

son()
    .then((mes) => {
        if (mes) return Promise.resolve(2);
    })
    .then((mes) => console.log(mes));
//console.log(father());
