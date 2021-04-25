class newPromise {
    state = "pending";
    value = undefined;
    reason = undefined;
    resolveCallbacks = undefined;
    rejectCallbacks = undefined;
    constructor(excutor) {
        let resolve = (value) => {
            if (this.state === "pending") {
                this.state = "fulfilled";
                value;
                this.resolveCallbacks.forEach((func) => func(value));
            }
        };
        let reject = (reason) => {
            if (this.state === "pending") {
                this.state === "rejected";
                reason;
                this.rejectCallbacks.forEach((func) => func());
            }
        };

        try {
            excutor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }
    then(onFulfilled, onRejected) {
        if (this.state === "fulfilled") onFulfilled(this.value);
        else if (this.state === "rejected") onRejected(this.reason);
        else if (this.state === "pending") {
            this.resolveCallbacks.push(() => {
                onFulfilled(this.value);
            });
            this.rejectCallbacks.push(() => {
                onRejected(this.reason);
            });
        }
    }
}
