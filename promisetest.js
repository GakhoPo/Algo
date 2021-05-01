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
