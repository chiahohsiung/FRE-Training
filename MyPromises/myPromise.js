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
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Successfull");
    // reject(new Error(" error message "));
  }, 2000);
})
  .then(data => {
    console.log("here " + data);
    return "here " + data;
  })
  .then(data => {
    console.log("here i " + data);
    return data;
  })
  .then(data => {
    console.log("here i am " + data);
    return data;
  })
  .catch(error => {
    console.log(error);
  });
