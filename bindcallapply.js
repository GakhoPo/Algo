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
Function.prototype.newBind = function (context) {
    context = context || window;
    let args = [...arguments].slice(1);
    let _this = this;
    return function F() {
        if (this instanceof F) return new _this(...args, ...arguments);
        return _this.apply(context, args.concat(...arguments));
    };
};

//test
let val = 2;
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

console.log(bar("jack", 20)); //{ val: 2, name: 'jack', age: 20 }
console.log(bar.newApply(foo, ["jack", 20])); //{ val:}
console.log(bar.newCall(foo, "rose", 19));
let bind1 = bar.newBind(foo, "tank", 1000);
let bind2 = bar.newBind(foo, "tank2");
console.log(bind1());
console.log(bind2(2000));
