class Promise {
    constructor(executor) {
        this.outcome = null;
        this.thenFunctions = callStack;

        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);

        executor(this.resolve, this.reject);
    }

    resolve(value) {
        this.outcome = {status: 'fulfilled', value: value};
        this.callThen();
    }

    reject(error) {
        this.outcome = {status: 'rejected', reason: error};
        this.callThen();
    }

    then(onFulfilled) {
        this.thenFunctions.push(onFulfilled);
        if (this.outcome !== null) {
            this.callThen();
        }
        return this;
    }

    callThen() {
        if (this.thenFunctions) {
            this.thenFunctions.forEach(fn => {
                this.outcome.value = fn(this.outcome.value)
            });
            this.thenFunctions = [];
        }
    }

}