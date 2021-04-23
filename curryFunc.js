var curry = (fn) =>
    (judge = (...args) =>
        args.length === fn.length ? fn(...args) : (arg) => judge(...args, arg));
//判断输入变量长度和函数需要的变量长度是否一致，一致就返回运算结果，不一致就返回一个闭包，未来的输入参数为arg
var curry = (fn) =>
    (judge = (...args) =>
        args.length === fn.length ? fn(...args) : (arg) => judge(...args, arg));
