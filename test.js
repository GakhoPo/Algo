Function.prototype.newBind = function (context, ...args) {
    context = context || window;
    args = args || [];
    let _this = this;
    function resultFn() {
        let isnew = this instanceof resultFn;
        return _this.newArray(
            isnew ? this : context,
            args.concat(...arguments)
        );
    }
    resultFn.prototype = Object.create(_this.prototype);
    return resultFn;
};

function _new(context, ...val) {
    let obj = {};
    obj.__proto__ = context.prototype;
    let res = context.apply(obj, val);
    return typeof res === "object" ? res : obj;
}
function Student(name, age) {
    this.name = name;
    this.age = age;
}

let newPerson = _new(Student, "hanson", 18);
console.log(newPerson.name); // hanson
