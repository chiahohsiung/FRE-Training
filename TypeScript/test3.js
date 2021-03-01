function getItems(items) {
    return new Array().concat(items);
}
var myNumArr = getItems([10, 20, 30]);
var myStrArr = getItems(['Hello', 'Antra']);
myNumArr.push(40);
myNumArr.push('Hello TypeScript');
myStrArr.push('Hello Tom');
myStrArr.push(40);
console.log(myNumArr);
console.log(myStrArr);
// function getItems<T>(items: T[]): T[] {
//     return new Array<T>().concat(items);
// }
// let myNumArr = getItems<number>([10, 20, 30]);
// let myStrArr = getItems<string>(['Hello', 'Antra']);
// myNumArr.push(40);
//myNumArr.push('Hello Antra');
//myStrArr.push('Hello TypeScript');
//myStrArr.push(40);
// console.log(myNumArr);
// console.log(myStrArr);
