class MyPromise {
  callBackQueue = [];
  status = "pending";
  currentData;

  constructor(executor) {
    executor(this.resolve, this.reject);
  }
  resolve = data => {
    this.currentData = data;
    console.log(data);
    while (this.callBackQueue.length) {
      this.currentData = this.callBackQueue.shift()(this.currentData);
    }
  };
  reject = () => {};

  then = cb => {
    this.callBackQueue.push(cb);
    return this;
  };
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    console.log("hello");
    resolve("nameisantony");
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
  });

// p()s;
