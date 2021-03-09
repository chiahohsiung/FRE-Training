// // Primitive Data
// // string, number, boolean, undefined, symbol, null

// console.log('string: typeof instance === ', typeof 'string');
// console.log('number: typeof instance === ', typeof 911);
// console.log('boolean: typeof instance === ', typeof true);
// console.log('undefined: typeof instance === ', typeof undefined);
// console.log(typeof null);

// var a = '5';

// function foo(num) {
//     num = 7;
//     return num;
// }

// foo(a);
// console.log(a)

// // coercion
// console.log(+true, +false); //
// console.log(+'20' + 1); //

// // equality == vs. ===
// console.log('1' == 1); //
// console.log(a + ''); // toSing()

// // plain object
// var obj = {};
// console.log(obj);

// class Person{};
// var p = new Person();
// console.log(p);

// // object data
// var obj = { name: 'Dio', age: 200 };

// var obj2 = Object.create({});
// console.log(obj);
// console.log(obj2);

// function foo(obj2) {
//     console.log(obj === obj2);
//     obj2.name = 'Jojo';
// }
// foo(obj);
// var arr = [1, 2];
// console.log(typeof arr);

// call stack

// function foo() {

//     for (var i = 0; i < 3; i++) {
//         console.log(a);
//     }
//     let = 5;
// }
// foo();

// //           var       | let    | const  | function
// hoisting:
// scope
// not defined and undefined

// // class
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     work() {
//         console.log('work');
//     }
// }

// const p = new Person('Dio', 200);
// const p2 = new Person('Jojo', 20);
// // console.log(p);

// p.__proto__.wolk = function() {
//     console.log('wolk');
// }
// Person.prototype.run = function() {
//     console.log('run');
// }
// console.log(p);
// p.wolk();
// p2.wolk();
// p.run();
// p2.run();

// console.log([1, 2])
// const arr = [];

// arr.__proto__.myMap = function () {
//     console.log(1111);
// }
// const arr1 = []
// arr1.myMap()

// function Person1(name, age) {
//     let obj = {};
//     obj.name = name;
//     obj.age = age;
//     obj.__proto__.constructor = Person1;
//     return obj;
// }
// const p1 = Person1('Dio', 200);
// console.log(p1);

// // "use strict"
// function foo() {

//     y = 6;
//     console.log(x);
//     "use strict"
// }
// foo();

// oop
// encapsulation
// class Person {
//     #name;
//     #age;
//     constructor(name = 'Dio', age = 200) {
//         this.#name = name;
//         this.#age = age;
//     }
//     get name() {
//         return this.#name;
//     } 
//     set name(newName) {
//         this.#name = newName;
//     }
//     get age() {
//         return this.#age;
//     } 
//     set age(newAge) {
//         this.#age = newAge;
//     }

//     walk() {
//         console.log(this.#name + ' walk around the world!');
//         // console.log(this.#name, 'walk around the world!');
//         // console.log(`${this.#name} walk around the world!`);
//     }
// }
// const p = new Person('Jojo', 20);
// p.#name;
// p.name;
// p.book = 'David';
// console.log(p.book);
// console.log(p);
// p.walk();
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.walk = function () {
//     console.log(this.name + ' walk around the world!');
// }

// const p = new Person('Jojo', 20);
// console.log(p);
// p.walk();


// // inheritance
// class Employee extends Person{
//     constructor(name, age, company) {
//         super(name, age);
//         this.company = company;
//     }
//     walk() {
//         console.log(this.name + ' is ' + this.age);
//     }

//     walk(num, num2){
//         console.log('this is the num: ', num, num2);
//     }
// }
// function Employee(name, age, company) {
//     Person.call(this, name, age);
//     this.company = company;
// }
// Employee.prototype = Person.prototype;
// Employee.prototype.constructor = Employee;

// const e = new Employee('Dio', 20, 'Jump');
// console.log(e);
// e.walk(3); // 

// // Polymorphism
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     move() {
//         console.log('move');
//     }
// }
// class Fash extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can swim');
//     }
// }
// class Bird extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can fly');
//     }
// }
// class Monkey extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can run');
//     }
// }
// const fish = new Fash('fish');
// const bird = new Bird('bird');
// const monkey = new Monkey('monkey');
// fish.move();
// bird.move();
// monkey.move();

// // Abstraction
// class Circle {
//     #pi = 3.1415926;
//     constructor(radius) {
//         this.radius = radius;
//     }
//     getArea() {
//         return this.#pi * this.radius ** 2;
//     }
// }
// const circle = new Circle(20);
// console.log(circle.getArea());

// // loop

// const arr = [1, 2, 3];

// Array.prototype.myForEach = function (callbackfn) {
//     //console.log(this);
//     for (let i = 0; i < this.length; i++) {
//         callbackfn(this[i], i, this);
//     }
// }

// arr.myForEach((ele, index, arr) => {
//     arr[index] = ele * 2;
// });
// console.log(arr);

// console.log(arr.forEach(ele => ele * 2));
// console.log(arr.map(ele => ele * 2));


// Array.prototype.myMap = function (callbackfn) {
//     const map = [];
//     for (let i = 0; i < this.length; i++) {
//         map.push(callbackfn(this[i], i, this));
//     }
//     return map;
// }

// console.log(arr.myMap((ele, index, arr) => {
//     return ele * 2
// }));

// const arr = [1, 2, 3, 2, 2];

// Array.prototype.myFilter = function (callbackfn) {
//     const arr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callbackfn(this[i], i, this)) {
//             arr.push(this[i]);
//         }
//     }
//     return arr;
// }
// console.log(arr.myFilter(ele => ele === 2));
// console.log(arr.filter(ele => ele === 2));

// Array.prototype.myReduce = function (callbackfn, initAcc) {
//     let acc = initAcc;
//     for (let i = 0; i < this.length; i++) {
//         acc = callbackfn(acc, this[i], i, this);
//     }
//     return acc;
// }
// console.log(arr);
// console.log(arr.myReduce((acc, cur) => acc + cur, 0));
// console.log(arr.reduce((acc, cur) => acc + cur, 0));
// '' + a + a = aa + b + b = aabb + c + c = 'aabbcc'

// some, every

// map vs. forEach

// map, filter, reduce

// hight order function
// function foo(cb) {
//     return function name(params) {

//     }
// }

// const obj = {name: 'Dio', age: 200};

// console.log(obj.name);
// // const name = 'name'
// console.log(obj['name']);

// Object.prototype.forEach = function (callbackfn) {
//     let keys = Object.keys(this);
//     console.log(keys);
//     for (let i = 0; i < keys.length; i++) {
//         callbackfn(this[keys[i]], keys[i], this);
//     }
// }
// console.log(obj);
// obj.forEach(ele => console.log(ele));

// // // rest parameters vs. spread operator
// function foo(num, num1, num2, num3, ...rest) {

//     const arr = [1, 2, 3, 4];
//     const arr1 = [6, ...arr, 7]; // [1, 2, 3, 4]
//     console.log(arr === arr1);
//     console.log(arr, arr1);

//     const obj = { name: 'Dio', age: 200 };
//     const obj1 = {...obj};
//     console.log(obj, obj1);

//     const arr2 = [...'abcdefghijklmnopqrstuvwxyz'];
//     console.log(arr2);
// }
// // const foo = (...args) => console.log(args);
// foo(1, 2, 3, 4);
// const foo = input => {
//     const set = new Set([...input]); // Map
//     return [...set].join('');
// }
// console.log(foo('qwertqwert'));

// // object copy
// // shadow copy, deep copy;
// const obj = { 
//     name: 'Dio',

//     foo: function(input) {
//         console.log(input);
//     }
// };
// console.log(obj)
// const obj2 = obj;

// // first level deep copy;
// const obj2 = {...obj};
// console.log(obj.links === obj2.links);

// // deep copy
// console.log(obj);
// console.log(JSON.stringify(obj));

// const obj2 = JSON.parse(JSON.stringify(obj));
// // // console.log(obj.links === obj2.links);
// console.log(obj2);

// const obj = {
//     foo(input) {
//         console.log(input);
//     }
// }
// obj.foo(111)
// const obj1 = JSON.parse(JSON.stringify(obj));
// obj1.foo(111);

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
function foo() {
    console.log(this);
}
foo();

// object owning the method;
const obj = {
    foo() {
        console.log(this); 
    }
};
obj.foo();

// newly instance
class Person {
    constructor(name) {
        this.name = name;
    }
    bar() {
        console.log(this);
    }
}
const p = new Person('Dio');
p.bar();
console.log(p);

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

// // // call apply
// foo.call(obj, 'Dio', 2);
// foo.apply(obj, ['Dio', 2]);

// ES6 arrow function:
const myObj = {
    myMethod(item) {
        console.log(this);

        const resolve = function() {
            console.log(this);
        }.bind(this);

        const bar = () => {
            console.log(this);
        }

        foo();
        bar();
    }
};
myObj.myMethod([1]);

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

    for (let i = 0; i < 5; i++) {
        setTimeout(() => console.log(v), (5 - v) * 1000);
    }
    // call stack: () => console.log(i)
    // web api || async api: , 0s. () => console.log(i), 5s. .. 2s 3s 4s
    // message queue: [, () => console.log(i),  ....]
    
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

// const getRandomTime = () => {
//     return Math.floor(Math.random() * 3);
// }

// // MyPromise
class MyPromise {
    thenCallBackQueue = [];
    catchCallBackQueue = [];
    currentData;
    promisestate = 'pending';

    constructor(executor) {
        try {
            executor(this.resolve, this.reject.bind(this));
        } catch (error) {
            this.reject(error);
        }
    }

    resolve = (data) => {
        setTimeout(() => {
            try {
                this.promisestate = 'fulfilled';
                if (!this.thenCallBackQueue.length) return; // <-------------

                this.currentData = data;
                while (this.thenCallBackQueue.length) {
                    const cb = this.thenCallBackQueue.shift();

                    if (this.currentData instanceof MyPromise) {
                        this.currentData.then(dataFromRes => {
                            this.currentData = cb(dataFromRes);
                        });
                    } else {
                        this.currentData = cb !== undefined 
                            ? cb(this.currentData)
                            : this.currentData;
                    }
                }
            } catch (error) {
                if (this.catchCallBackQueue.length) {
                    const cb = this.catchCallBackQueue.shift();
                    cb(error);
                }
            }
        }, 0);
    }
    reject(error) {
        this.promisestate = 'rejected';
        setTimeout(() => {
            if (!this.catchCallBackQueue.length) return;
            this.currentData = error;
            const cb = this.catchCallBackQueue.shift();
            if (this.currentData instanceof MyPromise) {
                this.currentData.catch(dataFromRes => {
                    this.currentData = cb(dataFromRes);
                });
            } else {
                this.currentData = cb(this.currentData);
            }
        }, 0);
    }
    then(resolvefn, rejectfn) {
        if (this.promisestate === 'pending') // <-------------
            this.thenCallBackQueue.push(resolvefn);
        return this;
    }
    catch(rejectfn) {
        if (rejectfn != undefined)
            this.catchCallBackQueue.push(rejectfn);
        return this;
    }

    // Promise.all
    static all(array) {
        let counter = 0;
        const resolveData = new Array(array.length); // 

        return new MyPromise((res, rej) => {
            array.forEach((ele, i) => {
                if (ele instanceof MyPromise) {
                    ele.then(data => {
                        counter++;
                        resolveData[i] = data;
                        if (counter === array.length)
                            res(resolveData);
                    }).catch(err => rej(err));
                } else {
                    counter++;
                    resolveData[i] = ele;
                    if (counter === array.length)
                        res(resolveData);
                }
            });
        });
    }
    // Promise.resolve
    static resolve(resdata) {
        return new MyPromise((resolve, _) => {
            resolve(resdata)
        });
    }
    // Promise.reject
    static reject(rejdata) {
        return new MyPromise((_, reject) => {
            reject(rejdata);
        });
    }
}

// const promise = new Promise((res, rej) => res(2) )
//     .then(() => { })
//     .then(() => { })
//     .then((data) => console.log(data) );

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promise', 1);
        resolve('hello');
    }, 3 * 1000);
})
    .then().then().then().then().then().then()
    .then((data) => {
        console.log(data, 2);
    })
    .then((data) => {
        console.log(data, 3);
    });
// const p = new MyPromise((resolve, reject) => {
//     // console.log(a);
//     const timer = getRandomTime();
//     console.log(`${timer}s`);
//     setTimeout(() => {
//         console.log('promise');
//         resolve('hello');
//     }, timer * 1000);
//     reject('1111');
// })
//     .then(data => {
//         console.log(data);
//         return new MyPromise((res, rej) => {
//             res('Dio');
//         });
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// console.log(1);
// const p = new Promise((resolve, reject) => {
//     resolve(2)
// }).then(data => console.log(data)); 
// console.log(3);

// const promise1 = MyPromise.resolve(3);
// const promise2 = 42;
// const promise3 = new MyPromise((resolve, reject) => {
//     setTimeout(resolve, 100, 'foo');
// });
// // console.log(promise3.then(data => console.log(4)));

// MyPromise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// });

// myFetch
function myFetch(url, options) {
    return new Promise((resolve, reject) => {
        let method = options && options.method ? options.method : 'GET';
        const xhttp = new XMLHttpRequest();

        xhttp.open(method, url, true);
        if (options && options.headers)
            Object.keys(options.headers).forEach(key => {
                xhttp.setRequestHeader(key, options.headers[key]);
            });
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status >= 200 && this.status < 300)
                resolve({ json: () => JSON.parse(xhttp.response) });
            else if (this.status < 200 || this.status >= 300)
                reject({ errorState: this.readyState, errorStatus: this.status });
        };
        options && options.body ? xhttp.send(options.body) : xhttp.send();
    });
}

// GET
myFetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));

// POST
myFetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
        userId: 1,
        title: 'bar',
        completed: false,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(err => console.log(err));

// DELETE
myFetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
});

// PUT
myFetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

// PATCH
myFetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'foo',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));
    
