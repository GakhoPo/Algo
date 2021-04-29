function newInstanceof(left, right) {
    let _prototype = right.prototype;
    left = left.__proto__;
    while (true) {
        if (left === null) return false;
        else if (left === _prototype) return true;
        left = left.__proto__;
    }
}
console.log(newInstanceof(Function, Object)); //true
var foo = 1;
(function foo() {
    foo = 10;
    console.log(foo);
})();
