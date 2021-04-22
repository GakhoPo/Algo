//防抖
//1. 非立即执行版本
function debounce(fn, wait) {
    let timer = null;
    return function () {
        const context = this;
        const args = arguments;
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
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
        if (now) {
            fn.apply(this, args);
        }
    };
}
//节流
//1.时间戳版本
function throttle(fn, wait) {
    var prev = 0;
    return function () {
        let now = Date.now();
        let context = this;
        let args = arguments;
        if (now - prev > wait) {
            fn.apply(context, args);
            prev = now;
        }
    };
}
//2.定时器版本
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
