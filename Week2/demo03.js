// ES6 destructure

// const obj = { name: 'Dio', age: 200 }
// const arr = [
//     {name: 'Dio'},
//     (data) => {
//         arr[0] = {...arr[0], ...data}
//     }
// ];
// let [state, setState] = arr;

// setState({age: 200});
// console.log(arr[0]);

// const data = {age: 200};
// const obj = { data, };
// console.log(obj);

// this:
// global this
// arguments
// function foo() {
//     console.log(this);
// }
// foo();

// object owning the method;
// const obj = {
//     foo() {
//         console.log(this);
//     }
// };
// obj.foo();

// newly instance
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     bar() {
//         console.log(this);
//     }
// }
// const p = new Person('Dio');
// p.bar();
// console.log(p);

// Array.prototype.myMap = function(cb) {
//     console.log(this);
// }
// const arr = [1, 2, 3]; // Array.create()
// arr.myMap();

// this: call, apply, bind

// const obj = {
//     pi: 3.1415926,
//     getPi() {
//         return this.pi;
//     }
// }
// function foo(circle, radius) {
//     console.log(circle, 'is a circle.', 'the area is', this.getPi() * (radius ** 2));
// }
// const bar = foo.bind(obj);
// bar('Dio', 2);

// // call apply
// foo.call(obj, 'Dio', 2);
// foo.apply(obj, ['Dio', 2]);

// ES6 arrow function:
// const myObj = {
//     myMethod(item) {
//         console.log(this);

//         const resolve = function() {
//             console.log(this);
//         }.bind(this);

//         const bar = () => {
//             console.log(this);
//         }

//         foo();
//         bar();
//     }
// };
// myObj.myMethod([1]);

// const Car = function(color) {
//     this.color = color;
// }

// const Car = (color) => {
//     this.color = color;
// }
// const car = new Car('red');

// function foo() {
//     console.log(arguments);
//     const bar = function() {
//         console.log(this.arguments);
//     }.bind(this);
//     // const bar = () => {
//     //     console.log(arguments);
//     // }
//     bar('c', 'd');
// }
// foo('a', 'b'); //

// closure
// console.log(foo(4)(5)); // 9

// function foo(num1) {
//     // ~~~~~~~~~~~~
//     let num = num1;
//     // ~~~~~~~~~~~~
//     return function bar(num2) {
//         return num1 + num2;
//     };
// }
// foo(3);

// const foo = limitedFunction(3, (a, b) => console.log(a + b));

// function limitedFunction(num, callbackfn) {
//     // ............
//     let counter = 0;
//     // ............
//     return (...args) => {
//         if (counter === num) {
//             console.log('over limited');
//         } else {
//             callbackfn(...args);
//             counter++;
//         }
//     };
// }

// foo(3, 4) // 7
// foo(4, 5) // 9
// foo(5, 6) // 11
// foo(5, 6) // 'over limited'
// foo(5, 6) // 'over limited'
// foo(5, 6) // 'over limited'
// foo(5, 6) // 'over limited'
// foo(5, 6) // 'over limited'

// // async
// console.log(0);
// setTimeout(() => console.log(1), 1000);
// console.log(2);
// setTimeout(() => console.log(3), 0);
// console.log(4);
// // console(3)
// // console(1)

// call stack, async api || web api, message queue || tasks queue
// console: 1s,  console: 0; < ----  async api
// console(1), <----- message queue

// function foo() {
//     // for (var i = 0; i < 5; i++) {
//     //     (function foo(i) {
//     //         var v = i;
//     //         setTimeout(() => console.log(v), v * 1000);
//     //     })(i); 
//     // }
//     for (let i = 0; i < 5; i++) {
//         setTimeout(() => console.log(i), i * 1000);
//     }
// }
// foo(); // 5 5 5 5 5

// 
// console(i): 0s, console(i): 1s, console(i): 2s, console(i): 3s, console(i): 4s, < ----  async api
// console(i), console(i), console(i), console(i), console(i),  <----- message queue

// // callback function;

// const foo = () => {
//     console.log('this is foo()');
// }
// const bar = () => {
//     console.log('this is bar()');
// }
// const getRandomTime = () => {
//     return Math.floor(Math.random() * 6);
// }

// const callFnInRandomTime = (callbackfn) => {
//     const timer = getRandomTime();
//     console.log(timer, 's');
//     setTimeout(callbackfn, timer * 1000);
// }
// callFnInRandomTime(() => {
//     callFnInRandomTime(() => {
//         callFnInRandomTime(() => {
//             callFnInRandomTime(() => {
//                 callFnInRandomTime(() => {
//                     callFnInRandomTime(() => {
//                         callFnInRandomTime(foo);
//                     })
//                 })
//             })
//         })
//     })
// }); // promise

// XHR

// function getUser(cb, id) {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             // Typical action to be performed when the document is ready:
//             const data = JSON.parse(xhttp.response);
//             cb(data);
//         }
//     };
//     const url = 'https://jsonplaceholder.typicode.com/todos/';
//     xhttp.open("GET", url + id, true);
//     xhttp.send();
// }

// function print(data) {
//     console.log(data);
// }

// getUser(print, 5);
// getUser(print, 12);
// getUser(print, 3);
// 5, 12, 3
// getUser(data => {
//     print(data);
//     getUser(data => {
//         print(data);
//         getUser(data => {
//             print(data);
//         }, 3)
//     }, 12)
// }, 5); // promise;

// promise
// const getRandomTime = () => {
//     return Math.floor(Math.random() * 5);
// }


// function print(data) {
//     console.log(data);
// }
// function getUserPromise(id) {
//     return new Promise((resolve, reject) => {
//         var xhttp = new XMLHttpRequest();
//         const url = 'https://jsonplaceholder.typicode.com/todos/';
//         xhttp.open("GET", url + id, true);
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 // Typical action to be performed when the document is ready:
//                 const data = JSON.parse(xhttp.response);
//                 resolve(data); // <------------
//             }
//         };
//         xhttp.send();
//     })
// }
// getUserPromise(5)
//     .then(data => {
//         print(data);
//         return getUserPromise(12);
//     })
//     .then(data => {
//         print(data);
//         return getUserPromise(3);
//     })
//     .then(data => print(data));
// 5, 12, 3
// async await 
// async function getUserAsync() {
//     try {
//         const data5 = await getUserPromise(5);
//         print(data5);
//         const data12 = await getUserPromise(12);
//         print(data12);
//         const data3 = await getUserPromise(3);
//         print(data3);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getUserAsync();

// console.log(p);
const getRandomTime = () => {
    return Math.floor(Math.random() * 3);
}
class MyPromise {
    thenCallBackQueue = [];
    currentData;
    promisestate = 'pending';

    constructor(executor) {
        executor(this.resolve, this.reject.bind(this));
    }

    resolve(data) {
        setTimeout(() => {
            this.promisestate = 'fulfilled';
            if (!this.thenCallBackQueue.length) return;
            this.currentData = data;
            while (this.thenCallBackQueue.length) {
                const cb = this.thenCallBackQueue.shift();

                if (this.currentData instanceof MyPromise) {
                    this.currentData.then(dataFromRes => {
                        this.currentData = cb(dataFromRes);
                    });
                } else {
                    this.currentData = cb(this.currentData);
                }
            } 
        }, 0);
    }
    reject(error) {
        this.promisestate = 'rejected';
    }
    then(thencallbackfun) {
        this.thenCallBackQueue.push(thencallbackfun);
        return this;
    }
    catch() { }

    // promise.all
}

// const p = new MyPromise((resolve, reject) => {
//     const timer = getRandomTime();
//     console.log(`${timer}s`);
//     setTimeout(() => {
//         console.log('promise');
//         resolve('hello');
//     }, timer * 1000);
// }).then(data => {
//     console.log(data);
//     return new MyPromise((res, rej) => {
//         res('Dio');
//     });
// }).then(data => console.log(data));

console.log(1);
const p = new Promise((resolve, reject) => {
    resolve(2)
}).then(data => console.log(data));
console.log(3);

console.log(p);

// // push, pop, shift, unshift
// const arr = [4, 1, 2, 3];
// arr.unshift(4) // push
// const num = arr.shift() // 4

// queue = []