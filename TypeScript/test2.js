"use strict";
// export class student {
//     id: number;
//     name: string;
exports.__esModule = true;
exports.student = void 0;
//     display(): void {
//         console.log('Function displays Student id is:' + this.id)
//         console.log('Function displays Student name is:' + this.name)
//     }
// }
// let obj = new student();
// obj.id = 101;
// obj.name = 'Tom';
// obj.display();
// export class student {
//     id: number;
//     name: string;
//     display(id: number, name: string): void {
//         this.id = id;
//         this.name = name;
//         console.log('Function displays Student id is:' + this.id)
//         console.log('Function displays Student name is:' + this.name)
//     }
// }
// let obj = new student();
// obj.display(101, 'Tom');
var student = /** @class */ (function () {
    function student(id, name) {
        this.id = id;
        this.name = name;
    }
    student.prototype.display = function () {
        console.log('Function displays Student id is:' + this.id);
        console.log('Function displays Student name is:' + this.name);
    };
    return student;
}());
exports.student = student;
var obj = new student(101, 'Tom');
obj.display();
