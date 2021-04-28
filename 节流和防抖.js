//防抖
//1. 非立即执行版本
function debounce(fn, wait) {
    let timer = null;
    return function () {
        const args = arguments;
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, wait);
    };
}

//2. 立即执行版本
function debounce(fn, wait) {
    let timer = null;
    return function () {
        const args = arguments;
        const now = !timer;
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
        }, wait);
        if (now) fn.apply(this, args);
    };
}

//节流
//1.时间戳版本
//在持续触发事件的过程中，函数会立即执行，用户在wait秒内不管执行多少次事件，都会等待wait秒后再执行。
function throttle(fn, wait) {
    var prev = 0;
    return function () {
        let now = Date.now();
        let args = arguments;
        if (now - prev > wait) {
            fn.apply(this, args);
            prev = now;
        }
    };
}
//2.定时器版本
//在触发事件的过程中，不会立即执行，并且每wait秒执行一次，在停止触发事件后还会再执行一次。
function throttle(fn, wait) {
    var timer = null;
    return function () {
        const context = this;
        const args = arguments;
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                fn.apply(context, args);
            }, wait);
        }
    };
}

console.log(!null); //true
console.log(!12); //false
console.log(!"pack"); //false
console.log(!""); //true
