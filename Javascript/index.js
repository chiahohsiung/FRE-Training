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
class Person {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    get name() {
        return this.#name;
    } 
    set name(newName) {
        this.#name = newName;
    }
}

const p = new Person('Dio', 200);
p.name = 'Jojo';
// p.#name = 'Jojo';
console.log(p)

// // inheritance
