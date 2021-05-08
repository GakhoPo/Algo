function _new() {
    let obj = {};
    let Con = [].shift.call(arguments);
    obj.__proto__ = Con.prototype;
    let res = Con.apply(obj, arguments);
    return typeof result === "object" ? res : obj;
}
