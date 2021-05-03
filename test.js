class EventBus {
    constructor() {
        this.handlers = {};
    }

    publish(type, value) {
        let fns = this.handlers[type];
        if (Array.isArray(fns)) {
            fns.forEach((fn) => fn(value));
        }
    }

    subscribe(type, func) {
        let fns = this.handlers[type] || [];
        if (fns.indexOf(func) !== -1) fns.push(func);
    }

    remove(type, func) {
        if (!type) this.handlers = {};
        else {
            let fns = this.handlers[type];
            if (!type) fns = [];
            if (Array.isArray(fns)) {
                const index = fns.indexOf(func);
                if (index !== -1) fns.splice(index, 1);
            }
        }
    }
}
