//////////////////////////////enums//////////////////////////////////////

// enum Direction {
//     Up ,
//     Down=10,
//     Left,
//     Right,
// };



// console.log(Direction);
// console.log(Direction['Up']);
// console.log(Direction.Up);
// console.log(Direction['Down']);
// console.log(Direction[10]);



// enum Direction {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT",
// }


// console.log(Direction);
// let x = Direction.Up;
// console.log(x);
// console.log(Direction[x])


// enum AppStatus {
//     ACTIVE = "Yes",
//     INACTIVE = 1,
//     ONHOLD,
//     ONSTOP = "Stop",
// };

// console.log(AppStatus);
// console.log(AppStatus.ONHOLD);
// console.log(AppStatus[2]);


//////////////////////////////////////////////////////////////////////////
///////////////////////Array//////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// let arr:string[] = ['A', 'B', 'C', 'D'];

//let arr:Array<string> = ['A', 'B', 'C', 'D']; 两种写法都可

// console.log(arr);
// arr.push('E');
// console.log(arr);


/////////////////////////////////////////////////////////////////////////
////////////////////interface////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// interface IPerson {
//     firstName: string,
//     lastName: string,
//     sayHi(): string,
// };

// let p1:IPerson = {firstName: "Tom", lastName: "Hanks", sayHi():string {return "Hello";}};



// console.log(p1);



// interface searchFunc {(srcstr: string, substr: string): boolean;}

// let myFunc : searchFunc;

// myFunc = function (srcstr: string, substr: string): boolean {
//     return srcstr.search(substr) !== -1;
// }

// console.log(myFunc("abcd", "abc"));



//////////////////////////////////////////////////////////////////
//////////////////////generic///////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// function creatArray<T>(length: number, value: T): Array<T> {
//     let arr: T[] = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(value);
//     }
//     return arr;
// }

// console.log(creatArray<string>(3, 'Hi'));



// function swap <T, U> (arr: [T, U]): [U, T] {
//     return [arr[1], arr[0]];
// }

// console.log(swap <string, number> (["a", 1]));




//////////////////////////////////////////////////////////////
////////generic constriants//////////////////////////////////
/////////////////////////////////////////////////////////////



// interface Lengthwise {
//     length: number;
// }


// function test <T extends Lengthwise> (arg: T):T{
//     console.log(arg.length);
//     return arg;
// }

// test <string> ("abc");


// interface searchFunc {(srcstr: string, substr: string): boolean;}

// let myFunc : searchFunc;

// myFunc = function (srcstr: string, substr: string): boolean {
//     return srcstr.search(substr) !== -1;
// }

// console.log(myFunc("abcd", "abc"));



// interface CreateArrayFunc {
//     <T> (length: number, value: T): Array<T>;
// }

// let myFunc: CreateArrayFunc;

// myFunc = function <T> (length: number, value: T): Array<T> {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(value);
//     }
//     return arr;
// }

// console.log(myFunc<string>(5, 'x'));


