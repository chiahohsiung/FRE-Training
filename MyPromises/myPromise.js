class MyPromise {
  callBackQueue = [];
  callBackErrorQueue = [];
  status = "pending";
  currentData;

  constructor(executor) {
    executor(this.resolve, this.reject);
  }
  resolve = data => {
    setTimeout(() => {
      this.status = "fullfiled";
      if (!this.callBackQueue.length) return;
      this.currentData = data;
      while (this.callBackQueue.length) {
        this.currentData = this.callBackQueue.shift()(this.currentData);
      }
    }, 1000);
  };

  reject = data => {
    setTimeout(() => {
      this.status = "rejected";
      if (!this.callBackErrorQueue.length) return;
      this.currentData = data;
      while (this.callBackErrorQueue.length) {
        this.currentData = this.callBackErrorQueue.shift()(this.currentData);
      }
    }, 1000);
  };

  then = cb => {
    this.callBackQueue.push(cb);
    return this;
  };

  catch = cb => {
    this.callBackErrorQueue.push(cb);
    return this;
  };

  all = arr => {
    while (arr.length) {
      const cb = arr.shift();
      console.log(cb);
      // cb();
    }
  };
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("first");
    // reject(new Error(" error message "));
  }, 2000);
});
const r = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("second");
    // reject(new Error(" error message "));
  }, 2000);
});

const o = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("third");
    // reject(new Error(" error message "));
  }, 2000);
});

p.all([p, r, o]);
// .then(values => {
//   console.log(values);
// });

// .then(data => {
//   console.log("here " + data);
//   return "here " + data;
// })
// .then(data => {
//   console.log("here i " + data);
//   return data;
// })
// .then(data => {
//   console.log("here i am " + data);
//   return data;
// })
// .catch(error => {
//   console.log(error);
// });
