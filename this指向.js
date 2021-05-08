var a = 10;
var obj = {
    a: 20,
    say: () => {
        console.log(this.a);
    },
};
var obj2 = {
    a: 20,
    say: function () {
        return () => {
            console.log(this.a);
        };
    },
};
obj.say(); // 10 和最近一层非箭头函数所在环境的this保持一致
obj2.say()(); //20
var anotherObj = { a: 30 };
obj.say.apply(anotherObj); // 10
