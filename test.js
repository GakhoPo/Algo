var a = 1;
var test = () => {
    console.log(this.a);
};
var obj = {
    a: 2,
    test,
};
obj.test();
