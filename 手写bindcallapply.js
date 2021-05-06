//Generate new apply
Function.prototype.newApply = function (context, args) {
    context = context || window;
    args = args || [];
    const key = Symbol();
    context[key] = this;
    let result = context[key](...args);
    delete context[key];
    return result;
};
//Generate new call
Function.prototype.newCall = function (context, ...args) {
    context = context || window;
    args = args || [];
    const key = Symbol();
    context[key] = this;
    let result = context[key](...args);
    delete context[key];
    return result;
};
//Generate new bind
Function.prototype.newBind = function (context, ...args) {
    context = context || window;
    args = args || [];
    let _this = this;
    function resultFn() {
        let isnew = this instanceof resultFn;
        return _this.newApply(
            isnew ? this : context,
            args.concat(...arguments)
        );
    }
    resultFn.prototype = Object.create(_this.prototype);
    return resultFn;
};

//test
var val = 2;
let foo = {
    val: 1,
};

function bar(name, age) {
    return {
        val: this.val,
        name,
        age,
    };
}
bar.prototype.friend = "kevin";

console.log(bar("jack", 20)); //{ val: 2, name: 'jack', age: 20 }
console.log(bar.newApply(foo, ["jack", 20])); //{ val:}
console.log(bar.newCall(foo, "rose", 19));
let bind1 = bar.newBind(foo, "tank", 1000);
let bind2 = bar.newBind(foo, "tank2");
console.log(bind1());
bind2 = new bind2(2000);
bind2 = { ...bind2, val: "new" };
console.log(bind2);
