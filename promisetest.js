function _fetch() {
    const json = '{"id": 1, "name": "pu"}';
    return Promise.resolve(json);
}

function _check(json) {
    return new Promise((resolve, reject) => {
        _json = JSON.parse(json);
        resolve(_json);
    });
}

function _fetchAndValid() {
    return new Promise((resolve, reject) => {
        const json = _fetch();
        resolve(json);
    })
        .then((json) => _check(json))
        .then((mes) => console.log(mes))
        .catch((e) => console.log(false));
}

_fetchAndValid();

//Promise exercise
const first = () =>
    new Promise((resolve, reject) => {
        console.log(3);
        let p = new Promise((resolve, reject) => {
            console.log(7);
            setTimeout(() => {
                console.log(5);
                resolve(6);
            }, 0);
            resolve(1);
        });
        resolve(2);
        p.then((arg) => {
            console.log(arg);
        });
    });

first().then((arg) => {
    console.log(arg);
});
console.log(4);
//3, 7, 4, 1, 2, 5
