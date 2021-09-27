class BusEvent {
    constructor() {
        this.handlers = {};
    }

    publish(type, val) {
        let fns = this.handlers[type];
        fns.forEach((fn) => fn(val));
    }

    subscribe(type, func) {
        let fns = this.handlers[type] || [];
        if (fns.indexOf(func) === -1) fns.push(func);
    }

    remove(type, func) {
        if (!type) this.handlers = {};
        else {
            let fns = this.handlers[type];
            if (!func) fns = [];
            else if (Array.isArray(fns)) {
                let index = fns.indexOf(func);
                if (index !== -1) fns.splice(index, 1);
            }
        }
    }

    once(type, func) {
        const one = (...args) => {
            func.apply(this, args);
            this.remove(type, one);
        };
        one.origin = func;
        this.subscribe(type, one);
    }
}

function debounce(func, wait) {
    let timer = null;
    return function () {
        const args = arguments;
        let now = !timer;
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
        }, wait);
        if (now) func.apply(this, args);
    };
}

function throttle(func, wait) {
    let timer = null;
    return function () {
        const args = arguments;
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                func.apply(this, args);
            }, wait);
        }
    };
}
