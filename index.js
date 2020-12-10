/** Shadowing the Promise class to create my own implementation. */
class Promise {
    constructor(executor) {
        this.executor = executor;
        this.outcome = null;
        this.pending = true;

        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
    }

    resolve(value) {
        this.outcome = {status: 'fulfilled', value: value};
        this.pending = false;
    }

    reject(error) {
        this.outcome = {status: 'rejected', reason: error};
        this.pending = false;
    }
}

/** Testing */
let exe = (resolve, reject) => (setTimeout(()=> resolve('done'), 100));
let promise = new Promise(exe);
let onRes = (val) => alert(val);
let onRej = (err) => alert(err.toString());
promise.then(onRes, onRej);