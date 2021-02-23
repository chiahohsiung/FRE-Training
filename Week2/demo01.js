// PRIMITIVE DATA
// string, number, boolean, undefined, symbol, null

// COERCION
// console.log(+true, +false); //
// console.log(+'20' + 1); //

// EQUALITY == vs. ===
// console.log('1' == 1); //
// console.log(a + ''); // toSting()

// class Person{};
// var p = new Person();
// console.log(p);

// PLAIN OBJ

// var obj = {};
// var obj = { name: 'Dio', age: 200 }; // OBJ DATA
// var obj2 = Object.create({});

// function foo(obj2) {
//     console.log(obj === obj2);
//     obj2.name = 'Jojo';
// }
// foo(obj);

// function Person1(name, age) {
//     let obj = {};
//     obj.name = name;
//     obj.age = age;
//     obj.__proto__.constructor = Person1;
//     return obj;
// }
// const p1 = Person1('Dio', 200);
// console.log(p1);

// CALL STACK

// for loop

// var       | let    | const  | function
// hoisting:
// scope
// not defined and undefined

// CLASS

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
// console.log(p);

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

// ARRAY BUILT IN METHODS

// const arr = [];
// arr.__proto__.myMap = function () {
//     console.log(1111);
// }
// const arr1 = []
// arr1.myMap()

// // "USE STRICT"

// function foo() {
//     y = 6;
//     console.log(x);
//     "use strict"
// }
// foo();

// OOP
// ENCAPSULATION
class Person {
    #name;
    #age;
    constructor(name = 'Dio', age = 200) {
        this.#name = name;
        this.#age = age;
    }
    get book() {
        return this.#name;
    } 
    set book(newName) {
        this.#name = newName;
    }
    get age() {
        return this.#age;
    } 
    set age(newAge) {
        this.#age = newAge;
    }
    walk() {
        console.log(this.#name + 'walks to school ');
        console.log(this.#name, 'walk to school');
        console.log(`${this.#name} walk to school`);
    }
}
// const p = new Person('Jojo', 20);
// p.book = 'David';
// console.log(p.book);
// console.log(p);
// p.walk();
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.walk = function () {
//     console.log(this.name + ' walk to school');
// }
// p.walk();


// INHERITANCE
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

// POLYMORPHISM
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

// ABSTRACTION
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

// LOOP

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

// REST PARAM vs. SPREAD OPERATOR
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

// OBJ COPY
// // shadow copy, deep copy;
// const obj = { 
//     name: 'Dio',
//     age: new Date,
//     links: { date: new Date }
// };
// // const obj2 = obj;

// // first level deep copy;
// const obj2 = {...obj};
// console.log(obj.links === obj2.links);

// // deep copy
// console.log(obj);
// // console.log(JSON.stringify(obj));

// const obj2 = JSON.parse(JSON.stringify(obj));
// // console.log(obj.links === obj2.links);
// console.log(obj2);

/* 02-16-2020 */