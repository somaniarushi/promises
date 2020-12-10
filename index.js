/** Shadowing the Promise class to create my own implementation. */
class Promise {
}

/** Testing */
let exe = (resolve, reject) => (setTimeout(()=> resolve('done'), 100));
let promise = new Promise(exe);
let onRes = (val) => alert(val);
let onRej = (err) => alert(err.toString());
promise.then(onRes, onRej);