function _new() {
    let obj = {};
    let Con = [].shift.call(arguments);
    obj.__proto__ = Con.prototype;
    let res = Con.apply(obj, arguments);
    return typeof res === "object" ? res : obj;
}

function Student(name, age) {
    this.name = name;
    this.age = age;
}

let newPerson = _new(Student, "hanson", 18);
console.log(newPerson.name); // hanson
