class Person {
    constructor(name) {
        this.name = name;
        //this.printNameFunction = this.printNameFunction.bind(this);
    }

    printNameArrow() {
        setTimeout(() => console.log("Arrow: " + this.name), 1000);
    }

    printNameFunction() {
        console.log("functionout: " + this.name);
        setTimeout(function () {
            console.log("Function: " + this.name);
        }, 1000);
    }
}

let person = new Person("Bob");
person.printNameArrow();
person.printNameFunction();

const a = 1;
function test() {
    console.log("test" + this.a);
}
const obj = {
    a: 2,
    test,
};
obj.test();
test.newApply(obj);
