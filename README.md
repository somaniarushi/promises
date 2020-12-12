# Creating Promises in Javascript
A Minified Implementation of The Promise Class 🤞

This Promise class implementation includes Promise object creation and the `then` function. It allows allows for `then` chaining. I wrote about this implementation [here](https://amks.me/blog/promises),


## The Flaws Of This Implementation
There's a tiny lie that this execution of the Promise class tells its user. When `then` is called, the user assumes that it returns a new Promise. This is not the case. It is always the original Promise object that is returned. It is also the original Promise that is modified to reflect the `then` calls.

Because of this, parellel promises will not work as intended:
```
// let promise = <Promise object>

promise.then((val) => val+"2");
promise.then((val) => val+ "3");
```
The second `then` function should return `value3`, but would return `value23`. A fix for this would be to distinguish `then` chaining and parellel `then`s, which this implementation does not do. 

If anyone is interested in writing an extension to this implementation, incorporating rejections and fixing other faults, please create a pull request!
