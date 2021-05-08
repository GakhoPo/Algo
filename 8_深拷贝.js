function deepCopy(obj, hash = new WeakMap()) {
    if (hash.has(obj)) return hash.get(obj);
    let cloneObj = Array.isArray(obj) ? [] : {};
    hash.set(obj, cloneObj);
    for (let key in obj) {
        cloneObj[key] = isObj(obj[key]) ? deepCopy(obj[key], hash) : obj[key];
    }
    return cloneObj;
}
