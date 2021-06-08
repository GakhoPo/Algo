function _debounce(n, func) {
    let count = 0;
    return (args) => {
        count = count < n ? count + 1 : 1;
        if (count === 1) return func.call(this, args);
    };
}

function func1(input) {
    console.log(input);
}
let la = _debounce(2, func1);
//la(0);
la("1, 11");
la("2, 22");
la("3, 33");
la("4, 44");
