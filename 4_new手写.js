function newMethod(Fn, ...args) {
    let obj = Object.create(Fn.prototype);
    const res = Fn.apply(obj, args);
    return typeof res === "object" ? res : obj;
}
